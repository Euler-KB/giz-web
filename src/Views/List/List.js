import React , { Component } from 'react';
import APIProxy from "../../Common/Proxy/APIProxy";
import HeaderMenu from "../Home/HeaderMenu";
import SelectList from "../../Common/SelectList";
import {ProductClassifications} from "../../Common/Constants";
import CheckGroup from "../../Components/CheckGroup/CheckGroup";
import ProductItem from "./ProductItem";
import ProductQueryBuilder from "../../Common/ProductQueryBuilder";
import {ProductsEndpoints} from "../../Common/Proxy/Endpoints";
import Utils from "../../Common/Utils";
import QueryString from 'query-string';
import LoadingTarget from 'react-loading-overlay';
import DocumentTitle from 'react-document-title';
import MDProgress from 'react-md-progress-bar';
import CollapseView from "../../Common/CollapseView";
import Globals from "../../Common/Globals";

const Styles = {

    selectList: {

    },


};

const Solutions = [
    {

    }
];

const Country = [
    {
        label: "Ghana",
        value: ""
    }
];

const ClassificationFilters = [

    {
        label: "Organic",
        value: "organic"
    },
    {
        label: "Inorganic",
        value: "inorganic"
    },
    {
        label: "Organic & Inorganic",
        value: ""
    }
];

const Crops = [
    {
        label:"Any",
        value: ""
    },
    {
        label: "Mango",
        value: "Mango"
    },
    {
        label: "Pineapple",
        value: "Pineapple"
    },
    {
        label: "Citrus",
        value: "Citrus"
    },
    {
        label: "Vegetables",
        value: "Vegetables"
    },
    {
        label: "Cashew",
        value: "Cashew"
    },
    {
        label: "Rice",
        value: "Rice"
    },
    {
        label: "Sorghum",
        value: "Sorghum"
    },
    {
        label: "Soya",
        value: "Soya"
    }

];

const ProductTypeFilters = [
    {
        label: "None",
        value: ""
    },
    {
        label: "Fertilizer",
        value: "Fertilizer"
    },
    {
        label: "Fungicide",
        value: "Fungicide"
    },
    {
        label: "Seeds",
        value: "Seeds"
    },
    {
        label: "Insecticide",
        value: "Insecticide"
    },
    {
        label: "Herbicide",
        value: "Herbicide"
    },
    {
        label: "Weedicide",
        value: "Weedicide"
    }

];

const RegionFilters = [
    {
        label: "Any Region",
        value: ""
    },
    {
        label: "Upper West Region",
        value: "Upper West"
    },
    {
        label: "Upper East Region",
        value: "Upper East"
    },
    {
        label: "Northern Region",
        value: "Northern"
    },
    {
        label: "Greater Accra Region",
        value: "Greater Accra"
    },
    {
        label: "Central Region",
        value: "Central"
    },
    {
        label: "Eastern Region",
        value: "Eastern"
    },
    {
        label: "Brong Ahafo Region",
        value: "Brong Ahafo"
    },
    {
        label: "Ashanti Region",
        value: "Ashanti"
    },
    {
        label: "Volta Region",
        value: "Volta"
    },
    {
        label: "Western Region",
        value: "Western"
    }

];

const BusyView = (props) => {

    return <div className="text-center">
        <h4>Processing Query</h4>
        <p>Please hold on while fetch products...</p>
    </div>
};

const EmptyView = (props) => {

    return <div className="text-center" style={{ width: "100%" , padding : 60}}>
        <h4>Ooops, sorry</h4>
        <p>There are no products matching current search keyword and filters</p>
    </div>
};

function mapValue(key,filters) {

    if(!key){
        return "";
    }

    const _key= key.toLowerCase();
    let v = filters.find(x => x.value.toLowerCase() == _key );
    if(v){
        return v.value;
    }

    return "";
}

class List extends Component {

    proxy;

    constructor(props){

        super(props);

        //  get proxy instance
        this.proxy = APIProxy.getInstance();

        //  set the initial state
        this.state = this.getInitialState(props);
    }

    getInitialState(props){

        const search = this.props.location.search;
        const query = QueryString.parse(search);
        return {
            isBusy: false,
            isLoaded: false,
            isFaulted: false,
            isFetchingSolutions: false,
            solutions: null,
            errorMessage: null,
            results: [],
            showFilters: window.sessionStorage.getItem("show_list_filters"),

            classification: mapValue(query.classification,ClassificationFilters),
            searchKeyword: query.search || "",

            productName: query.productName || "",
            productType: mapValue(query.product,ProductTypeFilters),
            productBrand: query.brand || "",
            dealerName: query.dealerName || "",
            dealerCompanyName: query.dealerCompanyName || "",
            dealerRegion: mapValue(query.dealerRegion,RegionFilters) || "",
            crop: mapValue(query.crop,Crops)
        };

    }

    loadState(){

        const state = this.state;
        const proxy = this.proxy;

        //  query list here
        const queryBuilder = new ProductQueryBuilder();

        if(state.searchKeyword.trim())
            queryBuilder.SearchKeyword(state.searchKeyword);

        if(state.productName.trim()){
            queryBuilder.HasName(state.productName);
        }

        if(state.productBrand.trim())
            queryBuilder.HasBrands([state.productBrand]);

        if(state.crop.trim())
            queryBuilder.HasCrops(state.crop.split(','));

        if(state.productType.trim()){
            queryBuilder.IsType(state.productType);
        }

        queryBuilder.FromDealer( state.dealerName.trim() || undefined , state.dealerCompanyName.trim() || undefined , state.dealerRegion.trim() || undefined);

        if(state.classification){

            let cls;
            switch (state.classification){
                case "organic":
                    cls = ProductClassifications.Organic;
                    break;
                case "inorganic":
                    cls = ProductClassifications.Inorganic;
                    break;
            }

            queryBuilder.WithClassification(cls);
        }

        this.setState({
            isBusy: true
        });

        return proxy.processRequest( ProductsEndpoints.searchQuery(queryBuilder.build()) ).then(response => {

            console.log('List', response.body);

            this.setState({
                isLoaded: true,
                isFaulted: false,
                isBusy: false,
                results: response.body.Data
            });


        }).catch(err => {

            console.error('List',err);

            this.setState({
                isBusy: false,
                isFaulted: true,
                errorMessage: Utils.getErrorMessage(err)
            });

        });


    }

    componentWillMount(){

        return Promise.all([

            //  Load state
            this.loadState(),

            //  update
            this.updateSolutions()

        ]);

    }

    updateSolutions(){

        const state = this.state;
        const proxy = this.proxy;

        this.setState({
            isFetchingSolutions: true
        });

        return proxy.processRequest( ProductsEndpoints.getSolutions(state.productType || undefined) ).then(response =>{

            this.setState({
                isFetchingSolutions: false,
                solutions: response.body.Data
            })

        }).catch(err => {

            this.setState({
                isFetchingSolutions: false
            })

        });

    }


    render(){

        const state = this.state;
        const results = state.results || [];
        const showFilter = state.showFilters === "true";
        const solutions = state.solutions || [];

        return <DocumentTitle title="Products">
            <LoadingTarget active={state.isBusy && !state.isLoaded}
                           spinner
                           text="Loading products, please hold on..."
                           style={{ position: "inherit" }}>

                <div>

                    <HeaderMenu solidBackground={true}/>

                    <section>
                        <div className="container-fluid">
                            <div>

                                <div className="detail-filter-wrap">

                                    <div className="page-header">
                                        <h1 className="page-title" style={{fontSize: "2.5rem"}}>Products</h1>
                                        <div className="page-options d-flex">

                                            <button className={"btn " + (showFilter ? "btn-primary" : "btn-secondary" )} style={{marginRight: 5,  width: "15%"}} onClick={() => {

                                                //
                                                const show  = showFilter ? "false" : "true";

                                                this.setState({
                                                    showFilters: show
                                                });

                                                //
                                                window.sessionStorage.setItem("show_list_filters", show );

                                            }}><i className="fe fe-filter"></i> </button>

                                            <SelectList items={ClassificationFilters} selected={state.classification} onSelected={value =>{

                                                this.setState({
                                                    classification: value
                                                },() =>{
                                                    return this.loadState();
                                                });


                                            }}/>

                                            <form action="#" onSubmit={evt => {
                                                evt.preventDefault();
                                                return this.loadState();
                                            }}>

                                                <div className="input-icon ml-2">
                                                  <span className="input-icon-addon">
                                                    <i className="fe fe-search"></i>
                                                  </span>
                                                <input type="text" className="form-control w-10" style={{minWidth: 350}} value={state.searchKeyword} placeholder="Search products here" onChange={evt =>{

                                                    const value = evt.target.value;

                                                    this.setState({
                                                        searchKeyword: value
                                                    });

                                                }}/>

                                                </div>
                                            </form>

                                        </div>
                                    </div>

                                </div>

                                {showFilter && <form action="#" onSubmit={evt =>{

                                    evt.preventDefault();
                                    return this.loadState();
                                }}>

                                    <div>
                                        <b>Product</b>
                                        <div className="row">

                                            <div className="col-md-4">

                                                <input type="text" className="form-control" placeholder="Product Name eg. Mercury" value={this.state.productName} onChange={evt =>{

                                                    this.setState({
                                                        productName: evt.target.value
                                                    });

                                                }}/>

                                            </div>

                                            <div className="col-md-3">

                                                <input type="text" className="form-control" placeholder="Brand eg. NPK,PNI etc" value={this.state.brands} onChange={evt =>{

                                                    this.setState({
                                                        brands: evt.target.value
                                                    });

                                                }}/>

                                            </div>

                                            <div className="col-md-2">
                                                <SelectList items={Crops} style={{ width: "100%" }} selected={this.state.crop} onSelected={value =>{

                                                    this.setState({
                                                        crop: value
                                                    }, () => this.loadState());

                                                }}/>
                                            </div>

                                            <div className="col-md-3">

                                                <SelectList items={ProductTypeFilters} style={{ width: "100%" }} selected={this.state.productType} onSelected={value =>{

                                                    this.setState({
                                                        productType: value
                                                    }, () => {

                                                        return Promise.all([
                                                            this.updateSolutions(),
                                                            this.loadState()
                                                        ]);

                                                    });

                                                }}/>

                                            </div>

                                        </div>
                                    </div>

                                    <div style={{marginTop: 10}}>
                                        <b>Dealer</b>
                                        <div className="row">
                                            <div className="col-md-4">

                                                <input type="text" className="form-control" placeholder="Dealer Name" value={this.state.dealerName} onChange={evt =>{

                                                    this.setState({
                                                        dealerName: evt.target.value
                                                    });

                                                }}/>

                                            </div>

                                            <div className="col-md-5">

                                                <input type="text" className="form-control" placeholder="Dealer Company Name" value={this.state.dealerCompanyName} onChange={evt =>{

                                                    this.setState({
                                                        dealerCompanyName: evt.target.value
                                                    });

                                                }}/>

                                            </div>

                                            <div className="col-md-3">

                                                <SelectList items={RegionFilters} style={{ width: "100%" }} selected={this.state.dealerRegion} onSelected={value =>{

                                                    this.setState({
                                                        dealerRegion: value
                                                    }, () => {
                                                        return this.loadState()
                                                    });

                                                }}/>

                                            </div>


                                        </div>
                                    </div>

                                    <div>
                                    </div>

                                    <div style={{marginTop: 10}}>

                                        <CollapseView title={<h6 style={{marginTop: 5 }}>Solutions</h6>}
                                                      initiallyOpen={true}>

                                            {state.isFetchingSolutions ? <p className="text-center">Loading solutions...</p> :  (solutions.length === 0 ? <p className="text-center">No applicable solutions found for product</p> : <CheckGroup items={solutions.map(f =>{
                                                return {
                                                    label: f,
                                                    value: f
                                                }
                                            }) } ref={r => this._checkGroup = r}/> )}

                                        </CollapseView>

                                    </div>

                                    <button style={{width: "100%"}} className="btn btn-primary btn-outline-primary" onClick={(evt) =>{

                                        //
                                        evt.preventDefault();

                                        //  load state again
                                        return this.loadState();

                                    }}>
                                        <span className="icon-magnifier search-icon"></span> Search</button>
                                    <hr/>

                                </form>}


                                { (state.isBusy && state.isLoaded) && <MDProgress show={true}/>}

                                <div className="row row-cards">
                                    { (state.isBusy && !state.isLoaded) ? <BusyView/> : results.length === 0 ? <EmptyView/> : results.map( (item,key) => {
                                        return  <div className="col-sm-6 col-lg-4">
                                            <ProductItem className="p3" product={item} key={key} onClick={() =>{
                                                Globals.get("history").push(`/detail/${item.Id}`);
                                            }}/>
                                        </div>;
                                    })}
                                </div>


                            </div>
                        </div>
                    </section>
                </div>
            </LoadingTarget>
        </DocumentTitle>
    }

}

export default List;