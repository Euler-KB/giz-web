import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a select list
 * @param props
 * @returns {XML}
 * @constructor
 */
const SelectList = (props) => {

     return <select className="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect" style={props.style} onChange={evt => {

         if(props.onSelected){
             props.onSelected(evt.target.value);
         }

     }} value={props.selected}>
         {props.items.map((item,key) => {
             return <option key={key} value={item.value}>{item.label}</option>
         })}
    </select>

};

SelectList.propTypes = {
    items: PropTypes.array,
    onSelected: PropTypes.func,
    selected: PropTypes.any
};

export default SelectList;