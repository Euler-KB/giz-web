import React,{ Component }   from 'react';
import DocumentTitle from 'react-document-title';
import '../dashboard.css';
import NavLink from "../../../Common/NavLink/NavLink";
import FormWrapper from "../../../Common/FormRenderer/FormWrapper";
import FormInput from "../../../Common/FormRenderer/FormInput";
import APIProxy from "../../../Common/Proxy/APIProxy";
import Wizard from "../../../Components/Wizard/Wizard";
import UserManager from "../../../Common/UserManager";
import {UsersEndpoints} from "../../../Common/Proxy/Endpoints";
import Utils from "../../../Common/Utils";

class ForgotPassword extends Component{

    constructor(props){
        super(props);
        this.state = {
            isBusy: false,
            step: 0,
            errorMessage: null,
            userIdentity: null,
            userEmail: null,
            validateConfirmCode: false
        };

        this.proxy = APIProxy.getInstance();
    }

    onSubmitForgotPassword(evt){

        evt.preventDefault();

        const form = this._forgotForm;
        if(form.validate().length === 0){

            const inputs = form.getFormData();
            const proxy = this.proxy;

            console.log('ForgotPassword',inputs);

            this.setState({
                isBusy: true,
                errorMessage: null,
                userEmail: inputs.email
            });

            //
            return proxy.processRequest(UsersEndpoints.forgotPassword(inputs.email)).then(response => {

                //
                const identity = response.body.Data.Identity;
                this.setState({
                    isBusy: false,
                    userIdentity: identity,
                    step: 1
                });

            }).catch(err => {

                this.setState({
                   isBusy: false,
                   errorMessage: Utils.getErrorMessage(err)
                });

            });

        }

    }

    onSubmitActivationCode(evt){

        evt.preventDefault();

        //
        const form = this._activationCodeForm;
        const identity = this.state.userIdentity;
        if(form.validate().length === 0){

            //
            const inputs = form.getFormData();
            const proxy = this.proxy;

            this.setState({
                isBusy: true,
                errorMessage: null
            });

            return proxy.processRequest(UsersEndpoints.resetPassword(identity, inputs.confirmation_code , "" , true )).then(response => {

                //
                this.setState({
                    isBusy: false,
                    step: 2,
                    confirmationCode: inputs.confirmation_code
                });

            }).catch(err => {

                this.setState({
                    isBusy: false,
                    errorMessage: Utils.getErrorMessage(err)
                });

            });


        }

    }


    onSubmitChangePassword(evt){

        evt.preventDefault();

        const form = this._changePwdForm;
        const identity =  this.state.userIdentity;
        const confirmationCode = this.state.confirmationCode;

        if(form.validate().length === 0){

            const inputs = form.getFormData();

            //
            if(inputs.new_password !== inputs.confirm_password){

                this.setState({
                    errorMessage: "Passwords do not match!"
                });

                return;
            }

            const proxy = this.proxy;

            this.setState({
                isBusy: true,
                errorMessage: null
            });

            return proxy.processRequest(UsersEndpoints.resetPassword(identity, confirmationCode , inputs.new_password , false )).then(response => {

                this.setState({
                    isBusy: false,
                    step: 3,
                    confirmationCode: confirmationCode
                });

            }).catch(err => {

                this.setState({
                    isBusy: false,
                    errorMessage: Utils.getErrorMessage(err)
                });

            });

        }

    }

    onResendResetCode(evt){

        //
        evt.preventDefault();

        //
        const proxy = this.proxy;
        return proxy.processRequest( UsersEndpoints.forgotPassword(this.state.userEmail) ).then(response => {

            //

        }).catch(err => {

            //

        });

    }

    render(){

        const state= this.state;
        const isBusy = state.isBusy;

        return <DocumentTitle title="Reset Password">
                    <div className="page">
                    <div className="page-single">
                        <div className="container">
                            <div className="row">
                                <div className="col col-login mx-auto">

                                    <Wizard currentStep={state.step}
                                            steps={[

                                                <FormWrapper isBusy={isBusy}
                                                             progressType={"circular"}
                                                             className="card"
                                                             errorMessage={this.state.errorMessage}
                                                             onSubmit={this.onSubmitForgotPassword.bind(this)}
                                                             getFormRef={r => this._forgotForm = r}
                                                             formRootClassName="card-body p-6"
                                                             header={[
                                                                 <div className="card-title">Forgot password</div>,
                                                                 <p className="text-muted">Help us recover your lost password be entering your email below</p>
                                                             ]}
                                                             submitBtn={<button type="submit" className="btn btn-primary btn-block">Send me new password</button>}
                                                             inputs={[

                                                                 { key: "email" , component: ({ getRef }) => <FormInput ref={getRef}
                                                                                                                             type="email"
                                                                                                                             label={"Email"}
                                                                                                                             initialValue={""}
                                                                                                                             hint="Enter your email here"/> }
                                                             ]}/>,

                                                <FormWrapper isBusy={isBusy}
                                                             progressType={"circular"}
                                                             className="card"
                                                             errorMessage={this.state.errorMessage}
                                                             onSubmit={this.onSubmitActivationCode.bind(this)}
                                                             getFormRef={r => this._activationCodeForm = r}
                                                             formRootClassName="card-body p-6"
                                                             header={<div>
                                                                 <div className="card-title">Forgot password</div>
                                                                 <p className="text-muted">Confirm by entering the confirmation code you received below</p>
                                                             </div>}
                                                             submitBtn={<button type="submit" className="btn btn-primary btn-block">Confirm Code</button>}
                                                             inputs={[

                                                                 { key: "confirmation_code" , component: ({ getRef }) => <FormInput ref={getRef}
                                                                                                                             inputOptions={{ maxLength: 6 }}
                                                                                                                             type="text"
                                                                                                                             label={"Confirmation Code"}
                                                                                                                             initialValue={""}
                                                                                                                             hint="Enter six digit confirmation code..."/> },
                                                                 <div className="small" key={"_resend"}>
                                                                     Didn't receive code ? <a href="#" onClick={this.onResendResetCode.bind(this)}>Send code again</a>
                                                                 </div>

                                                             ]}/>,

                                                <FormWrapper isBusy={isBusy}
                                                             progressType={"circular"}
                                                             className="card"
                                                             errorMessage={this.state.errorMessage}
                                                             onSubmit={this.onSubmitChangePassword.bind(this)}
                                                             getFormRef={r => this._changePwdForm = r}
                                                             formRootClassName="card-body p-6"
                                                             header={[
                                                                 <div className="card-title">Forgot password</div>,
                                                                 <p className="text-muted">Almost done, please enter your new password</p>
                                                             ]}
                                                             submitBtn={<button type="submit" className="btn btn-primary btn-block">Change Password</button>}
                                                             inputs={[

                                                                 { key: "new_password" , component: ({ getRef }) => <FormInput ref={getRef}
                                                                                                                               type="password"
                                                                                                                               label={"New Password"}
                                                                                                                               initialValue={""}
                                                                                                                               hint="Enter your new password here..."/> },

                                                                 { key: "confirm_password" , component: ({ getRef }) => <FormInput ref={getRef}
                                                                                                                                   type="password"
                                                                                                                                   label={"Confirm Password"}
                                                                                                                                   initialValue={""}
                                                                                                                                   hint="Confirm your new password"/> },

                                                             ]}/>,

                                                <div className="card text-center">

                                                    <div className="card-body p-6">
                                                        <div className="card-title"><b>Password Reset Complete</b></div>
                                                        <p>Your password has been reset successfully.</p>
                                                        <div className="text-center">
                                                            <NavLink to="/dashboard/login">Back to Login</NavLink>
                                                        </div>
                                                    </div>

                                                </div>

                                            ]}/>


                                    {state.step < 3 && <div className="text-center text-muted">
                                        Forget it, <NavLink to="/dashboard/login">send me back</NavLink> to the sign in screen.
                                    </div>}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </DocumentTitle>;
    }

}

export default ForgotPassword;