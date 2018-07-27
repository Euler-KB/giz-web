import React,{ Component }   from 'react';
import DocumentTitle from 'react-document-title';
import '../dashboard.css';
import NavLink from "../../../Common/NavLink/NavLink";
import APIProxy from "../../../Common/Proxy/APIProxy";
import QueryString from 'query-string';
import {UsersEndpoints} from "../../../Common/Proxy/Endpoints";
import {Redirect} from "react-router";
import ErrorDisplay from "../../../Common/ErrorDisplay";
import Utils from "../../../Common/Utils";
import PropTypes from 'prop-types';
import Globals from "../../../Common/Globals";

class Form extends Component {

    static propTypes = {
        onActivated: PropTypes.func,
        onFail: PropTypes.func,
        identity: PropTypes.string,
        header: PropTypes.any
    };

    static defaultProps = {
        header: <span>Please enter <b>activation code</b> below to activate your account</span>
    };

    constructor(props){
        super(props);

        this.state = {
            isBusy: false,
            activationCode: "",
            errorMessage: null
        };

        this.proxy = APIProxy.getInstance();
    }

    onSubmit(evt){

        evt.preventDefault();

        const code = this.state.activationCode;
        const identity = this.props.identity;
        const proxy = this.proxy;

        if(!code){
            this._activationCode.focus();
            return;
        }

        //
        this.setState({
            isBusy: true,
            errorMessage: null
        });

        return proxy.processRequest( UsersEndpoints.activate(identity , code) ).then(response => {

            //
            this.setState({
                isBusy: false
            });


            //  call  onActivated
            if(this.props.onActivated){
                this.props.onActivated(response);
            }

        }).catch(err => {

            this.setState({
                isBusy: false,
                errorMessage: Utils.getErrorMessage(err)
            });

        });

    }

    onResendActivationCode(evt){

        evt.preventDefault();

        return this.proxy.processRequest( UsersEndpoints.beginActivation(this.props.identity) ).then(response => {

            //


        }).catch(err => {

        });

    }

    render(){

        const isBusy = this.state.isBusy;
        return  <form className="card" onSubmit={this.onSubmit.bind(this)}>
            <div className={"dimmer " + (isBusy ? "active":  "") }>
                <div className="loader"></div>
                <div className="dimmer-content">

                    <div className="card-body p-6">
                        <div className="card-title">{this.props.header}</div>

                        <div className="form-group">

                            <input ref={r => this._activationCode = r} value={this.state.activationCode}  type="text" className="form-control" placeholder="Enter six digit activation code" onChange={evt =>{

                                this.setState({
                                    activationCode: evt.target.value
                                });

                            }}/>


                        </div>

                        <div className="small">
                            Didn't receive code ? <a href="#" onClick={this.onResendActivationCode.bind(this)}>Send code again</a>
                        </div>

                        <ErrorDisplay error={this.state.errorMessage}/>

                        <div className="form-footer">
                            <button type="submit" className="btn btn-primary btn-block">Activate Account</button>
                        </div>
                    </div>
                </div>

            </div>

        </form>
    }

}

class ActivateAccount extends Component {

    constructor(props){
        super(props);
        this.state = this.getInitialState(props);
        this.proxy=  APIProxy.getInstance();
    }

    getInitialState(props){

        const search = QueryString.parse( this.props.location.search );
        return {
            isBusy: false,
            step: 0,
            identity: search.identity,
            activationCode: ""
        }
    }

    render(){

        const state  = this.state;
        const isBusy = state.isBusy;

        if(!state.identity){
            return <Redirect to="/dashboard/login"/>
        }

        return <DocumentTitle title="Activate Account">
            <div className="page">
                <div className="page-single">
                    <div className="container">
                        <div className="row">
                            <div className="col col-login mx-auto">

                                <div className="text-center">
                                    <h1>Activate Account</h1>
                                </div>

                                <Form identity={state.identity}  onActivated={response => {

                                    const history = Globals.get('history');
                                    if(response.ok){
                                        history.push('/dashboard/login');
                                    }

                                }}/>

                                <div className="text-center text-muted">
                                    Back to <NavLink to="/dashboard/login">Sign In</NavLink>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DocumentTitle>;
    }

}

ActivateAccount.Form = Form;

export default  ActivateAccount;