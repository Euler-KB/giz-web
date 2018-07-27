import React , { Component } from 'react';
import PropTypes from 'prop-types';

class  Footer extends Component{

    static  propTypes = {
        facebookLink:  PropTypes.string,
        twitterLink: PropTypes.string,
        instagramLink: PropTypes.string
    };

    static defaultProps = {
        facebookLink: "#",
        twitterLink: "#",
        instagramLink: "#"
    };

    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){

        const props = this.props;
        return <footer className="main-block dark-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="copyright">
                            <p>Copyright &copy; 2018 GIZ. All rights reserved</p>
                            <ul>
                                <li><a href={props.facebookLink}><span className="ti-facebook"></span></a></li>
                                <li><a href={props.twitterLink}><span className="ti-twitter-alt"></span></a></li>
                                <li><a href={props.instagramLink}><span className="ti-instagram"></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>;

    }
    
}

export default Footer;