import React,{ Component }   from 'react';

/**
 * Regular form inputs
 * @param props
 * @constructor
 */
function InputView(props){

    const options = props.options;
    return <input ref={r =>  props.getRef ? props.getRef(r) : null} value={props.value} style={props.style} type={props.type} className={"form-control " + (props.className ? props.className : "") } placeholder={props.hint} disabled={props.disabled} onChange={evt => {
        props.onChange(evt.target.value);
    }} {...options} />;

}



/**
 * Select form input
 * @param props
 * @constructor
 */
function SelectView(props){

    const items = typeof props.options.items === "function" ? props.options.items() : props.options.items;
    return <select ref={r =>  props.getRef ? props.getRef(r) : null} className={"custom-select mb-2 mr-sm-2 mb-sm-0 " + (props.className ? props.className : "")} style={props.style} disabled={props.disabled} onChange={evt => {
        props.onChange(evt.target.value);
    }} value={props.value}>
        {items.map((item,key) => {
            return <option key={key} value={item.value}>{item.label}</option>
        })}
    </select>

}

/**
 * Checkbox view
 * @param props
 * @constructor
 */
function CheckView(props){


}

InputView.defaultValue = "";
SelectView.defaultValue = "";
CheckView.defaultView = false;

const viewList = [
        {
            name: ["text","password","email" , "phone" , "number" ],
            renderer: InputView
        },
        {
            name: "check",
            renderer: CheckView
        },
        {
            name: "select",
            renderer: SelectView
        }
];

export {
    InputView,
    CheckView,
    SelectView,
    viewList
}