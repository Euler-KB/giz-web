import React , { Component } from 'react';
import APIProxy from "../../Common/Proxy/APIProxy";
import HeaderMenu from "../Home/HeaderMenu";
import SelectList from "../../Common/SelectList";
import {ProductClassifications} from "../../Common/Constants";
import CheckGroup from "../../Components/CheckGroup/CheckGroup";
import ProductQueryBuilder from "../../Common/ProductQueryBuilder";
import {ProductsEndpoints} from "../../Common/Proxy/Endpoints";
import Utils from "../../Common/Utils";
import QueryString from 'query-string';
import LoadingTarget from 'react-loading-overlay';
import DocumentTitle from 'react-document-title';
import MDProgress from 'react-md-progress-bar';
import CollapseView from "../../Common/CollapseView";

class Detail extends Component {

    constructor(props){
        super(props);

        this.state = {
            id: props.match.params.id
        };
    }

    componentWillMount(){

    }


    render() {

        const state = this.state;

        return <DocumentTitle title="Products">
            <LoadingTarget active={state.isBusy}
                           spinner
                           text="Loading products, please hold on..."
                           style={{position: "inherit"}}>

                <div>
                    <HeaderMenu solidBackground={true}/>
                </div>

                <section>
                    <div className="container-fluid">
                        <div className="card" style={{marginTop: 10}}>
                            <div className="card-header">
                                <h3 className="card-title">Compose new message</h3>
                            </div>
                            <div className="card-body">
                                <form action="">
                                    <div className="form-group">
                                        <div className="row align-items-center">
                                            <label className="col-sm-2">To:</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="row align-items-center">
                                            <label className="col-sm-2">Subject:</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control"/>
                                            </div>
                                        </div>
                                    </div>
                                    <textarea rows="10" className="form-control"></textarea>
                                    <div className="btn-list mt-4 text-right">
                                        <button type="button" className="btn btn-secondary btn-space">Cancel</button>
                                        <button type="submit" className="btn btn-primary btn-space">Send message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </LoadingTarget>

        </DocumentTitle>
    }
}

export default Detail;