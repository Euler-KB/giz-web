import React , { Component } from 'react';
import PropTypes from 'prop-types';
import Globals from "../../Common/Globals";

class  Slider extends Component{

    static propTypes = {
        title: PropTypes.string,
        hintMessage: PropTypes.string,
        searchText: PropTypes.string,
        searchInputHint: PropTypes.string
    };

    constructor(props){
        super(props);
        this.state = {

        };
    }

    handleSearch(evt){

        //
        evt.preventDefault();

        const history=  Globals.get('history');
        const searchQuery = this._searchInput.value.trim();

        if(searchQuery){
             history.push( "/list?search=" + encodeURIComponent(searchQuery) );
        }
        else{

            //  focus and select all text
            this._searchInput.focus();
            this._searchInput.select();
        }

    }


    render(){

        const props = this.props;
        return <section className="slider d-flex align-items-center">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12">
                        <div className="slider-title_box">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="slider-content_wrap">
                                        <h1>{props.title}</h1>
                                        <h5 style={{color: "#f5f5f5"}}>{props.hintMessage}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-10">

                                    <form ref={r => this._searchForm = r} className="form-wrap mt-4" onSubmit={this.handleSearch.bind(this)}>
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <input type="text" ref={r => this._searchInput = r} placeholder={props.searchInputHint} className="btn-group2" style={{width:"80%"}}/>
                                            <button type="submit" className="btn-form"><span className="icon-magnifier search-icon"></span>{props.searchText}<i className="pe-7s-angle-right"></i></button>
                                        </div>
                                    </form>

                                    {/*<div className="slider-link">
                                        <a href="#">Browse Popular</a><span>or</span> <a href="#">Recently Added</a>
                                    </div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>;
    }

}

export default Slider;