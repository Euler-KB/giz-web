import React,{ Component }   from 'react';
import '../dashboard.css';
import DocumentTitle from 'react-document-title';
import NavLink from "../../../Common/NavLink/NavLink";
import APIProxy from "../../../Common/Proxy/APIProxy";
import FormInput from "../../../Common/FormRenderer/FormInput";
import FormWrapper from "../../../Common/FormRenderer/FormWrapper";
import {UsersEndpoints} from "../../../Common/Proxy/Endpoints";
import Utils from "../../../Common/Utils";
import {UserAccountTypes} from "../../../Common/Constants";
import Wizard from "../../../Components/Wizard/Wizard";
import ActivateAccount from "../ActivateAccount/ActivateAccount";

class Register extends Component{

    constructor(props){
        super(props);

        this.state = {
            isBusy: false,
            step: 0,
            errorMessage: null
        };

        this.proxy = APIProxy.getInstance();
    }

    onSubmit(evt){

        evt.preventDefault();

        const proxy = this.proxy;
        const form = this._form;
        if(form.validate().length === 0){

            const registerForm = form.getFormData();

            console.log('Register',registerForm);

            this.setState({
                isBusy: true,
                errorMessage: null
            });

            //
            return proxy.processRequest(UsersEndpoints.register({
                Username: registerForm.email,
                Password: registerForm.password,
                FullName: registerForm.name,
                Email: registerForm.email,
                Phone: registerForm.phone,
                AccountType: UserAccountTypes.Dealer
            })).then(response => {

                this.setState({
                    isBusy: false,
                    step: 1,
                    userIdentity: response.body.Data.Identity,
                    errorMessage: null
                });

            }).catch(err => {

                this.setState({
                    isBusy: false,
                    errorMessage: Utils.getErrorMessage(err)
                });

            });

        }

    }

    render(){

        const state = this.state;
        return  <DocumentTitle title="Register">
                    <div>
                        <div className="page">
                            <div className="page-single">
                                <div className="container">
                                    <div className="row">
                                        <div className="col col-login mx-auto">

                                            <div className="text-center mb-6">
                                                {/*<img src="./demo/brand/tabler.svg" className="h-6" alt=""/>*/}
                                            </div>

                                            <Wizard currentStep={state.step}
                                                    steps={[

                                                        <FormWrapper onSubmit={this.onSubmit.bind(this)}
                                                                     className="card"
                                                                     formRootClassName="card-body"
                                                                     progressType={"circular"}
                                                                     isBusy={state.isBusy}
                                                                     errorMessage={this.state.errorMessage}
                                                                     header={<div className="card-title"><h1>Register</h1></div>}
                                                                     inputs={[

                                                                         { key: "name", component: ({ getRef }) =>  <FormInput ref={getRef}
                                                                                                                               type="text"
                                                                                                                               label={"Full Name"}
                                                                                                                               initialValue={""}
                                                                                                                               hint="Enter your full name here"
                                                                                                                               required={true}/>
                                                                         },

                                                                         { key: "phone", component: ({ getRef }) => <FormInput ref={getRef}
                                                                                                                               type="phone"
                                                                                                                               label={"Phone"}
                                                                                                                               initialValue={""}
                                                                                                                               hint="Enter your phone no."
                                                                                                                               required={true}
                                                                                                                               validations={["phone"]}/>
                                                                         },

                                                                         { key: "email", component: ({ getRef  }) => <FormInput ref={getRef}
                                                                                                                                type="email"
                                                                                                                                label={"Email"}
                                                                                                                                initialValue={""}
                                                                                                                                hint="Enter your email here"
                                                                                                                                required={true}
                                                                                                                                validations={["email"]}/>
                                                                         },
                                                                         <hr key={"h1"} style={{marginTop: 0, marginBottom: 15}}/>,
                                                                         { key: "password", component: ({ getRef }) => <FormInput ref={getRef}
                                                                                                                                  type="password"
                                                                                                                                  label={"Password"}
                                                                                                                                  initialValue={""}
                                                                                                                                  hint="Enter your password here"
                                                                                                                                  required={true}/>
                                                                         }

                                                                     ]}
                                                                     getFormRef={form => this._form = form}
                                                                     submitBtn={<button type="submit" className="btn btn-primary btn-block">Register dealer account</button>}/>,

                                                        <ActivateAccount.Form
                                                            key="_activate_form"
                                                            identity={this.state.userIdentity}
                                                            header={<div>
                                                                        <h1>Activate Account</h1>
                                                                        <p>One more step to go, please enter the activation code received to proceed</p>
                                                                    </div>}
                                                            onActivated={res => {

                                                                if(res.ok){
                                                                    this.setState({
                                                                        step: 2
                                                                    });
                                                                }

                                                        }}/>,

                                                        <div className="card text-center" key="_complete_form">

                                                            <div className="card-body p-6">
                                                                <div className="card-title"><b>Registration Complete</b></div>
                                                                <p>You've been registered successfully. </p>
                                                                <div className="text-center">
                                                                    <NavLink to="/dashboard/login">Back to Login</NavLink>
                                                                </div>
                                                            </div>

                                                        </div>

                                                    ]}/>


                                            {this.state.step < 1 && <div className="text-center text-muted">
                                                Already have account? <NavLink to="/dashboard/login">Sign in</NavLink>
                                            </div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </DocumentTitle>

    }

}

export default Register;