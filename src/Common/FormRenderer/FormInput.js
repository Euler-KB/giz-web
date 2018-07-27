import React,{ Component }   from 'react';
import PropTypes from 'prop-types';
import {CheckView, InputView, SelectView, viewList} from "./FormViews";
import Validators from "./FormValidators";

const Styles = {

    errorLabel: {
        width: "100%",
        marginTop: "0.25rem",
        fontSize: "87.5%",
        color: "#cd201f"
    }

};


/**
 * Form Control Input
 */
class FormInput extends Component{

    static TypeName = "FormInput";

    static Views = viewList;

    static Validations = Validators;

    static propTypes = {
        getRef: PropTypes.func,
        type: PropTypes.string,
        displayName: PropTypes.string,
        required: PropTypes.bool,
        icon: PropTypes.string,
        label: PropTypes.any,
        hint: PropTypes.string,
        validations: PropTypes.any,
        inputStyle: PropTypes.object,
        inputClassName: PropTypes.string,
        inputDisabled: PropTypes.bool,
        initialValue: PropTypes.any,
        inputOptions: PropTypes.object,
        onChange: PropTypes.func
    };

    static defaultProps = {
        views: viewList,
        validations: Validators
    };

    constructor(props){
        super(props);
        this.state = {
            value: props.initialValue,
            error: null
        };

    }

    setError(errorMessage){

        this.setState({
            error: errorMessage
        });

    }

    validate(only){

        const props = this.props;
        const validations = props.validations;
        const results = [];
        const me = this;

        function runValidation(frame) {

            let _error = null;
            const validationContext = {
                name: props.displayName || props.label,
                value: me.state.value,
                setError: (err) => _error = err
            };

            let _val = null;
            let _name = null;
            if(typeof frame === "string"){
                _name = frame;
                _val = me._findValidator(frame);
            }
            else if(typeof frame === "function"){
                _name = "custom";
                _val = me._findValidator(_name);
                validationContext.args = {
                    validator: frame
                };

            }
            else if(typeof frame === "object"){

                //  get validation type
                _name = frame.type;
                _val = me._findValidator(_name);
                validationContext.args = frame.args;

            }

            if( (!only || (only && only.indexOf(_name) >= 0) ) && _val){
                //
                validationContext.args = validationContext.args ||  { };

                //  validate
                _val.validate(validationContext);
                if(_error){
                    results.push(_error);
                }

            }

        }

        if(props.required){
            runValidation("required");
        }

        if(Array.isArray(validations)){
            validations.forEach(v => runValidation(v));
        }
        else if(typeof validations === "string"){
            runValidation(validations);
        }

        //
        if(results.length > 0){
            this.setError(results[0]);
        }
        else {
            this.clearError();
        }

        return results;
    }

    clearError(){
        this.setError(null);
    }

    getValue(){
        return this.state.value;
    }

    setValue(value){

        //  set value
        this.setState({
            value: value
        });

    }

    _findView(name){
        const props = this.props;
        return FormInput.Views.find(x => Array.isArray(x.name) ? (x.name.indexOf(name) >= 0) : name);
    }

    _findValidator(name){
        return FormInput.Validations.find(x => x.name === name);
    }

    _getProgressiveValidators(){

        const props = this.props;
        const validators = [];

        if(props.required)
            validators.push("required");

        props.validations.forEach(x => {

            let name;
            switch(typeof x){
                case "function":
                    name = "custom";
                    break;
                case "string":{

                    const _v = this._findValidator(x);
                    if(_v && _v.mode === "progressive")
                        name = x;
                }
                    break;
                case "object": {

                    if(x.hasOwnProperty('mode') && x.mode === "progressive"){
                        name = x.type;
                    }
                    else {
                        const _v = this._findValidator(x.type);
                        if (_v && _v.mode === "progressive")
                            name = x.type;
                    }
                }
                    break;
            }

            if(name && validators.indexOf(name) < 0)
                validators.push(name);

        });

        return validators;
    }

    renderView(view){

        const props = this.props;
        const state=  this.state;
        const me = this;

        if(typeof view === "string"){

            const frame = this._findView(view);
            if(frame){
                view = frame.renderer;
            }
            else{

                //  nullify view
                view = null;
            }
        }

        if(view){

            return view({
                getRef: props.getRef,
                type: props.type,
                hint: props.hint,
                className: props.inputClassName,
                style: props.inputStyle,
                disabled: props.inputDisabled,
                value: state.value,
                options: props.inputOptions,
                onChange: value => {


                    this.setState({
                        value: value
                    },() => {

                        const validators = me._getProgressiveValidators();
                        if(validators.length > 0){
                            this.validate(validators);
                        }

                    });

                    if(props.onChange){
                        props.onChange(value);
                    }

                }
            });

        }

        return null;
    }

    render(){

        const props = this.props;
        const state = this.state;

        return  <div className="form-group">
            {(props.label || props.icon) && <label className="form-label">{props.icon ? (<i className={props.icon}></i>) : null} {props.label}</label>}
            {props.hasOwnProperty('view') ? this.renderView(props.view) : this.renderView(props.type)}
            {state.error && <div style={Styles.errorLabel}>{state.error}</div>}
        </div>
    }

}

export default FormInput;