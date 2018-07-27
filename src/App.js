import React, { Component } from 'react';
import { Router , Switch , Route ,  Redirect } from 'react-router';
import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import Globals from "./Common/Globals";

import Home from './Views/Home/Home';
import List from './Views/List/List';
import Detail from './Views/Detail/Detail';
import Dealers from './Views/Dealers/Dealers';


import Login from './Views/Dashboard/Login/Login';
import Register from './Views/Dashboard/Register/Register';
import ForgotPassword from './Views/Dashboard/ForgotPassword/ForgotPassword';

import DealersHome from './Views/Dashboard/Dealer/Home/Home';

import AdminDealers from './Views/Dashboard/Admin/Dealers/Dealers';
import AdminHome from './Views/Dashboard/Admin/Home/Home';
import AdminProducts from './Views/Dashboard/Admin/Products/Products';
import {UserAccountTypes} from "./Common/Constants";
import APIProxy from "./Common/Proxy/APIProxy";
import ActivateAccount from './Views/Dashboard/ActivateAccount/ActivateAccount';
import UserManager from "./Common/UserManager";
const browserHistory = createBrowserHistory();

const checkAuthentication = () => {
    const proxy = APIProxy.getInstance();
    return proxy.isAuthenticated();
};

const SelectComponent = (components) => {

    const proxy = APIProxy.getInstance();
    if(proxy.isAuthenticated()) {

        const user = UserManager.getCurrentUser();
        const comp = components.find(x => x.AccountType === user.AccountType);

        if (comp) {
            return comp.Component;
        }

    }

};


class App extends Component {

    componentWillMount() {

        //  init global variables
        Globals.init();

        //  set global history object
        Globals.set('history', browserHistory );

        //

    }

    render() {

        const _dashboardComp = SelectComponent([
            {
                AccountType: UserAccountTypes.Administrator,
                Component: AdminHome
            },
            {
                AccountType: UserAccountTypes.Dealer,
                Component: DealersHome
            }
        ]);


        return (<Router history={browserHistory}>

                <Switch>
                    <Route exact={true} path="/" component={Home}/>
                    <Route path="/home" component={Home} />
                    <Route path="/detail/:id" component={Detail} />
                    <Route path="/list" component={List}/>
                    <Route path="/dealers" component={Dealers}/>

                    <Route path="/dashboard/login" component={Login}/>
                    <Route path="/dashboard/activation" component={ActivateAccount}/>
                    <Route path="/dashboard/register" component={Register}/>
                    <Route path="/dashboard/forgotpassword" component={ForgotPassword}/>

                    <Route path="/dashboard/home" component={ _dashboardComp} />
                    <Route path="/dashboard" exact={true} component={_dashboardComp}/>

                    <Route path="/dashboard/products" component={AdminProducts} />

                    <Route render={() => {

                        const proxy = APIProxy.getInstance();
                        if(proxy.isAuthenticated()){
                            return <Redirect to="/dashboard"/>
                        }

                        return <Redirect to="/"/>
                    }}/>

                </Switch>
            </Router>);
    }

}

export default App;
