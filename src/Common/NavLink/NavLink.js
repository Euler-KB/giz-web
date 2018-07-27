import React from 'react';
import Globals from "../Globals";
import PropTypes from 'prop-types';

const  NavLink = (props) =>{

   return <a href="#" onClick={evt =>{
       evt.preventDefault();

       const history = Globals.get("history");
       history.push(props.to);

   }} {...props}>{props.children}</a>
};

NavLink.propTypes = {
  to: PropTypes.string
};

export default  NavLink;