import React, {  Component  } from 'react';
import PropTypes from 'prop-types';
import FormRenderer from "./FormRenderer";
import MDProgress from 'react-md-progress-bar';
import ErrorDisplay from "../ErrorDisplay";

const FormWrapper = (props) => {

    const progressType = props.progressType;
    const isCircular = progressType === "circular";
    const isBusy = props.isBusy;

    const content = [
        typeof props.header === "function" ? props.header() : props.header,
        <FormRenderer inputs={props.inputs} className={props.formClassName} ref={props.getFormRef}/>,
        <ErrorDisplay error={props.errorMessage}/>,
        <div className="form-footer">
            {(isBusy && !isCircular) && <MDProgress show={true} overlay={props.overlayProgress}/>}
            {props.submitBtn}
        </div>
    ];

    return <form className={props.className} onSubmit={props.onSubmit}>

        <div className={`${isCircular ? (`dimmer ${isBusy?  "active" : ""}`) : ""} ${props.formRootClassName}`}>

            {isCircular ? [
                <div className="loader"/>,
                <div className="dimmer-content">
                    {content}
                </div>
            ] : content}


        </div>

    </form>

};

FormWrapper.propTypes = {
    submitBtn: PropTypes.any,
    errorMessage: PropTypes.any,
    inputs: PropTypes.array,
    getFormRef: PropTypes.func,
    onSubmit: PropTypes.func,
    header: PropTypes.any,
    className: PropTypes.string,
    formClassName: PropTypes.string,
    formRootClassName: PropTypes.string,
    isBusy: PropTypes.bool,
    progressType: PropTypes.oneOf(["horizontal","circular"]),
    overlayProgress: PropTypes.bool
};

FormWrapper.defaultProps = {
    className: "card",
    progressType: "horizontal",
    submitBtn: <button type="submit" className="btn btn-primary btn-block">Submit</button>
};



export default FormWrapper;