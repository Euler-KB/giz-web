import React , { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component{

    static propTypes = {
        menuItems: PropTypes.array,
        title: PropTypes.string,
        titleStyle: PropTypes.object,
        solidBackground: PropTypes.bool
    };

    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){

        const props = this.props;

        return <div>
            <div className={ props.solidBackground ? "" : "nav-menu"}>
                <div className={`${props.solidBackground ? "dark-bg" : "bg"} transition`}>
                    <div className={`container-fluid ${props.solidBackground ? "" : "fixed"}`}>
                        <div className="row">
                            <div className="col-md-12">
                                <nav className="navbar navbar-expand-lg navbar-light">
                                    <a className="navbar-brand" href="/" style={props.titleStyle}>{props.title}</a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="icon-menu"></span>
                                    </button>
                                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                                        <ul className="navbar-nav">

                                            {props.menuItems.map( (item,index) => {

                                                if(item.hasOwnProperty('render')){
                                                    return item.render(index);
                                                }

                                                return <li className="nav-item dropdown" key={index}>

                                                    <a className="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        {item.title}
                                                        <span className="icon-arrow-down"></span>
                                                    </a>

                                                    {item.items && <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                        { item.items.map( (action,key) => {
                                                            return (<a className="dropdown-item" {...action} key={key}>{action.text}</a>);
                                                        })}
                                                    </div>}

                                                </li>;

                                            })}


                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
        
    }

}

export default Header;