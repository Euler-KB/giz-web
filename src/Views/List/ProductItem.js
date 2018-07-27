import React , { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductItem.css';
import {ProductClassifications} from "../../Common/Constants";
import QueryString from 'query-string';
import APIProxy from "../../Common/Proxy/APIProxy";

const Styles = {

    divider : {
        marginTop: 0,
        marginBottom: "0.2rem"
    }

};

const DefaultProductImagesMap = [
    {
        type: "Fertilizer",
        src: "images/products/fertilizer-default.png"
    },
    {
        type: "Fungicide",
        src: "images/products/fungicide-default.png"
    },
    {
        type: "Seeds",
        src: "images/products/seeds-default.png"
    },
    {
        type: "Insecticide",
        src: "images/products/insecticide-default.png"
    },
    {
        type: "Herbicide",
        src: "images/products/herbicide-default.png"
    },
    {
        type: "Weedicide",
        src: "images/products/weedicide-default.png"
    }
];

const UnknownProductImageSrc = "images/products/default.png";

function getDefaultSrc(productType) {

    const frame = DefaultProductImagesMap.find(x => x.type === productType);

    if(frame){
        return frame.src;
    }

    return UnknownProductImageSrc;
}

class ProductItem extends Component {

    static propTypes = {
        product: PropTypes.object,
        className: PropTypes.string,
        style: PropTypes.object,
        onClick: PropTypes.func
    };

    constructor(props){
        super(props);
        this.state = {};
        this.proxy = APIProxy.getInstance();
    }

    static formatClassification(value){

        switch (value){
            case ProductClassifications.Inorganic:
                return "Inorganic";
            case ProductClassifications.Organic:
                return "Organic";
        }

    }

    render(){

        const props = this.props;
        const proxy = this.proxy;
        const product = props.product;
        const media = (product.Media && product.Media.length > 0) ? ( product.Media.find(x => x.tag === "default") || product.Media[0] )  :  null;
        const src =  media ? proxy.getUrl( media.ThumbnailPath ) :  getDefaultSrc(product.ProductType);

        return <div className={`card card-product ${props.className}`} style={props.style} onClick={props.onClick}>

            <div className="clearfix">
                <div className="pull-right" style={{marginRight: 10 , marginTop: 10 }}>
                    <div className="badge badge-pill badge-gray" style={{fontSize: 14, padding: 10}}>
                        {product.ProductType}
                    </div>

                </div>
            </div>

            <div style={{
                width: "100%" ,
                height: 140,
                marginTop: 10,
                backgroundImage: `url(${src})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}>

            </div>

            <div className="product-content">

                <div className="clearfix">
                    <div className="pull-left" >
                        <h5>{product.Name}</h5>
                    </div>

                </div>

                <hr style={Styles.divider}/>

                <div>

                    <dl>
                        <dt>Brands</dt>
                        <dd>{product.Brands.join(" , ")}</dd>

                        <dt>Crops</dt>
                        <dd>{product.Crops.join(" , ")}</dd>
                    </dl>


                </div>

                <div className="clearfix">

                    <div style={{float: "left"}}>
                        <a href={'/dealers?' + QueryString.stringify({  search : product.Dealer.FullName  })} className="btn-link">{product.Dealer.FullName}</a>
                    </div>

                    <div style={{float: "right"}}>
                        {ProductItem.formatClassification(product.Classification)}
                    </div>

                </div>

            </div>


        </div>

    }

}

export default ProductItem;