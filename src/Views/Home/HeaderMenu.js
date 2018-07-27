import React from 'react';
import Header from "../../Components/Header/Header";
import PropTypes from 'prop-types';
import QueryString from 'query-string';

function getUrl(url, query ) {

    if(!query || Object.keys(query) == 0){
        return url;
    }

    return `${url}?${QueryString.stringify(query)}`;
}

/**
 * Renders the default header menu
 * @param props
 * @constructor
 */
const HeaderMenu = (props) => {

    return <Header title={props.title || "GIZ"}
                   solidBackground={props.solidBackground}
            titleStyle={ props.titleStyle || { fontWeight: "bold" } }
            menuItems={[
                {
                    title: "Explore",
                    items: [
                        {
                            text: "Registered Dealers",
                            href: "/dealers"
                        },
                        {
                            text: "Available Products",
                            href: "/list"
                        }
                    ]
                },
                {
                    title: "Dealers (Region)",
                    items: [
                        {
                            text: "Northern Region",
                            href: getUrl('/dealers',{ region: "Northern" })
                        },
                        {
                            text: "Upper West Region",
                            href: getUrl('/dealers',{ region: "Upper West" })
                        },
                        {
                            text: "Upper East Region",
                            href: getUrl('/dealers',{ region: "Upper East" })
                        },
                        {
                            text: "Ashanti Region",
                            href: getUrl('/dealers',{ region: "Ashanti" })
                        },
                        {
                            text: "Grater Accra Region",
                            href: getUrl('/dealers',{ region: "Grater Accra" })
                        },
                        {
                            text: "Central Region",
                            href: getUrl('/dealers',{ region: "Central" })
                        },
                        {
                            text: "Brong Ahafo Region",
                            href:  getUrl('/dealers',{ region: "Brong Ahafo" })
                        },
                        {
                            text: "Volta Region",
                            href:  getUrl('/dealers',{ region: "Volta" })
                        },
                        {
                            text: "Western Region",
                            href:  getUrl('/dealers',{ region: "Western" })
                        }
                    ]
                },
                {
                    title: "Dealers (Products)",
                    items: [

                        {
                            text: "Fertilizers",
                            href: "/list?product=fertilizer"
                        },
                        {
                            text: "Fungicides",
                            href: "/list?product=fungicide"
                        },
                        {
                            text: "Insecticide",
                            href: "/list?product=insecticide"
                        },
                        {
                            text: "Seeds",
                            href: "/list?product=seeds"
                        }
                    ]
                },
                {
                    render: (key) => {
                        return <li key={key}><a href="/dashboard/login" className="btn btn-outline-light top-btn">Sign In</a></li>;
                    }
                },
                {
                    render: (key) => {
                        return <li key={key}><a href="/dashboard/register" className="btn btn-outline-light top-btn"><span className="ti-plus"></span> Sign Up</a></li>;
                    }
                }

            ]}/>

};

HeaderMenu.propTypes = {
   solidBackground: PropTypes.bool
};

export default HeaderMenu;