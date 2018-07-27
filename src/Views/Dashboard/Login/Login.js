import React,{ Component }   from 'react';
import DocumentTitle from 'react-document-title';
import { Link  } from 'react-router';

import '../dashboard.css';
import NavLink from "../../../Common/NavLink/NavLink";
import FormWrapper from "../../../Common/FormRenderer/FormWrapper";
import FormInput from "../../../Common/FormRenderer/FormInput";
import APIProxy from "../../../Common/Proxy/APIProxy";
import {UsersEndpoints} from "../../../Common/Proxy/Endpoints";
import Utils from "../../../Common/Utils";
import {ResponseStatus} from "../../../Common/Constants";
import UserManager from "../../../Common/UserManager";

class Login extends Component{

    constructor(props){
        super(props);

        this.state = {
            isBusy: false,
            errorMessage: null
        };

        this.proxy  = APIProxy.getInstance();
    }

    onSubmit(evt){

        evt.preventDefault();

        //
        const proxy = this.proxy;
        const form = this._form;
        const history = this.props.history;
        const results = form.validate();

        if(results.length === 0){

            const loginForm = form.getFormData();

            this.setState({
                isBusy: true,
                errorMessage: null
            });

            //
            return proxy.processRequest( UsersEndpoints.login(loginForm.email,loginForm.password), false ).then(response => {

                const body = response.body;
                switch(body.Status){
                    case ResponseStatus.Success:{

                            const ticket = body.Data;
                            proxy.setAuthInfo(ticket);

                            //  get current user info
                            return proxy.processRequest( UsersEndpoints.getMySelf() ).then(response => {

                                //  set current user
                                UserManager.setCurrentUser( response.body.Data );

                                //  navigate to dashboard
                                history.push("/dashboard");
                            });
                        }
                }

                this.setState({
                    isBusy: false,
                });

            }).catch(err => {

                if(err && err.hasOwnProperty('response') && err.response.status === 400){

                    const body = err.response.body;

                    switch(body.Status) {
                        case ResponseStatus.UserAccountActivationRequired: {
                            history.push(`/dashboard/activation?identity=${encodeURIComponent(body.UserIdentity)}`);
                            return;
                        }
                    }

                }

                //
                this.setState({
                    isBusy: false,
                    errorMessage: Utils.getErrorMessage(err)
                });

            });


        }

    }

    render(){

        const state = this.state;
        const isBusy = state.isBusy;

        return <DocumentTitle title="Login">
            <div className="page">
                <div className="page-single">
                    <div className="container">
                        <div className="row">
                            <div className="col col-login mx-auto">
                                <div className="text-center mb-6">
                                    <h1>Login</h1>
                                    {/*<img src="./demo/brand/tabler.svg" className="h-6" alt=""/>*/}
                                </div>

                                <FormWrapper onSubmit={this.onSubmit.bind(this)}
                                             className="card"
                                             formRootClassName="card-body"
                                             progressType={"circular"}
                                             errorMessage={this.state.errorMessage}
                                             isBusy={isBusy}
                                             header={<div className="card-title">Login to your account</div>}
                                             inputs={[

                                             { key: "email", component: ({ getRef }) =>  <FormInput       ref={getRef}
                                                                                                          type="email"
                                                                                                          label={"Email"}
                                                                                                          initialValue={""}
                                                                                                          hint="Enter your email here"
                                                                                                          validations={[
                                                                                                              {
                                                                                                                  type: "required",
                                                                                                                  mode: "demand"
                                                                                                              },
                                                                                                              {
                                                                                                                  type: "email",
                                                                                                                  mode: "demand"
                                                                                                              }
                                                                                                          ]}/>
                                                 },

                                                 { key: "password", component: ({ getRef }) => <FormInput   ref={getRef}
                                                                                                            type="password"
                                                                                                            label={"Password"}
                                                                                                            initialValue={""}
                                                                                                            hint="Enter your password here"
                                                                                                            validations={[
                                                                                                                {
                                                                                                                    type: "required",
                                                                                                                    mode:"demand"
                                                                                                                }
                                                                                                            ]}/>
                                                 },

                                                 <div className="clearfix" key={"_password"}>
                                                     <NavLink to="/dashboard/forgotpassword" className="pull-right small">Forgot Password</NavLink>
                                                 </div>

                                             ]}
                                             getFormRef={form => this._form = form}
                                             submitBtn={<button type="submit" className="btn btn-primary btn-block">Login</button>}/>


                                <div className="text-center text-muted">
                                    Don't have account yet? <NavLink to="/dashboard/register">Sign up</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DocumentTitle>;

    }

}

export default Login;