import React , { Component } from 'react';
import NavLink from "../../Common/NavLink/NavLink";

const GettingStarted = (props) => {

    return <section className="main-block light-bg">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="add-listing-wrap">
                        <h2>Getting Started</h2>
                        <p>Register your dealership company with us and showcase your products</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="featured-btn-wrap">
                        <NavLink to="/dashboard/register" className="btn btn-danger"><span className="ti-plus"></span> Register Dealer</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </section>;
};

export default GettingStarted;