import Globals from "../Globals";
import Request from 'superagent';
import moment from 'moment';

const AUTH_INFO_KEY = "_authInfo";

function combineUrl(left, right) {
    return (left.endsWith("/") ? left.substr(0,left.length - 1) : left ) + (right.startsWith("/") ? right : ("/" + right) );
}


/**
 * Provides an interface for backend communication
 */
class APIProxy {

    /**
     * The server's address
     */
    serverAddress;

    /**
     * Authentication ticket
     */
    authInfo;

    static getInstance(){
        return Globals.get('proxy', () => new APIProxy(process.env.REACT_APP_SERVER_ADDRESS));
    }

    constructor(address){
        this.serverAddress = address;
    }

    isAuthenticated(){
        return this.getAuthInfo() !== null;
    }

    setAuthInfo(auth){

        this.authInfo = {
            timeIssued: moment().toDate(),
            expiresAt: moment().add(auth.Duration,'millisecond').toDate(),
            ticket: auth
        };

        //  set authentication info
        window.localStorage.setItem(AUTH_INFO_KEY , JSON.stringify( this.authInfo ) );
    }

    isSessionExpired(){

        const authInfo = this.getAuthInfo();
        if(!authInfo){
            return false;
        }

        return moment().isAfter( moment(authInfo.expiresAt) );
    }

    getUrl(url){
        return combineUrl(this.serverAddress  ,url);
    }

    refreshToken(){

        const auth= this.getAuthInfo();
        const me = this;

        Request.post( this.getUrl("refresh_token"))
            .send({
                RefreshToken: auth.RefreshToken
            }).end(function (err,response) {

                if(!err){

                    if(response.forbidden)
                        return 'expired';

                    if(response.ok){

                        //  set current authentication info
                        me.setAuthInfo(response.Data);

                        return 'success';
                    }

                }

                return 'fail';
            });

    }


    getAuthInfo(){

        //
        if(this.authInfo !== undefined)
            return this.authInfo;

        //
        if(localStorage.getItem(AUTH_INFO_KEY)){

            const _ticket = localStorage.getItem(AUTH_INFO_KEY);
            _ticket.expiresAt = moment(_ticket.expiresAt);
            _ticket.timeIssued = moment(_ticket.timeIssued);

            if(moment().isAfter(_ticket.expiresAt)){

                //  expired
                localStorage.removeItem(AUTH_INFO_KEY);
            }
            else{

                this.authInfo = _ticket;
                return _ticket;
            }
        }

        return null;
    }

    _executeEndpoint( endpoint , resolve , reject , reEvaluate ){

        const builder = Request(endpoint.method, this.getUrl(endpoint.url) ) ;

        if(endpoint.hasOwnProperty('headers')){

            for(let item in endpoint.headers){
                builder.set(item,endpoint.headers[item]);
            }

        }

        const authInfo = this.getAuthInfo();

        //   check whether the proxy is authenticated
        if(authInfo !== null){
            builder.set('authorization',`Bearer ${authInfo.AccessToken}`);
        }

        if(endpoint.hasOwnProperty('query')){
            builder.query(endpoint.query);
        }

        if(endpoint.hasOwnProperty('contentType')){
            builder.type(endpoint.contentType);
        }

        if(endpoint.hasOwnProperty('content')){
            builder.send(endpoint.content);
        }

        builder.end((err,response) => {

            if(err){

                //  cause revaluation
                if(reEvaluate) {

                    const _res = err.response;

                    if (_res !== undefined) {

                        if(_res.body.Message === "Authorization has been denied for this request"){

                        }
                    }

                }

                reject(err);
            }
            else{
                resolve(response);
            }

        });
    }

    /**
     * Processes the endpoint
     * @param endpoint The endpoint to execute
     * @param authRequired Indicates whether proxy authentication is required
     */
    processRequest(endpoint , authRequired = true){

        const me = this;

        return new Promise((resolve,reject) => {

            if(authRequired) {

                //   refresh token necessary
                if (this.isSessionExpired()) {

                    //
                    return this.refreshToken().then(status => {

                        switch (status) {
                            case "expired":

                                //   Refresh token expired, navigate back to login screen
                                window.location.href = "/dashboard/login";

                                break;
                            case "success":
                                me._executeEndpoint(endpoint, resolve, reject);
                                break;
                        }

                    });
                }
                else {

                    //   prepare & execute
                    me._executeEndpoint(endpoint, resolve, reject , () => {

                        //  force refresh token
                        return this.refreshToken().then(status => {

                            //  execute
                            if(status === "success")
                                return me._executeEndpoint(endpoint,resolve,reject);


                        });



                    });

                }

            }
            else{

                //  prepare & execute
                me._executeEndpoint(endpoint,resolve,reject);
            }


        });

    }

}

export default APIProxy;