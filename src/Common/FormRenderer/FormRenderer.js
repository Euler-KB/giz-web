import React,{ Component }   from 'react';
import DocumentTitle from 'react-document-title';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';

class  FormRenderer extends Component {

    static propTypes = {
        inputs: PropTypes.array,
        className: PropTypes.string
    };

    constructor(props){
        super(props);
        this._components = { };
    }

    _getInputRef(key){
        return this._components[key];
    }

    _getValueInputs(){
        return this.props.inputs.filter(x => x.hasOwnProperty('component'));
    }

    bindItem(item){

        const props = this.props;
        for(let k in item){
            this.setValue(k,item[k]);
        }

    }

    validate(){

        const props = this.props;
        const inputs = this._getValueInputs();
        const errors = [];

        for(let i = 0 ; i < inputs.length; i++ ){

            const formInput = this._getInputRef(inputs[i].key);
            if(formInput){

                const result = formInput.validate();
                if(result.length > 0){
                    errors.push( { key: inputs[i].key, errors: result });
                }

            }


        }

        return errors;
    }

    setValue(key,value){

        const props = this.props;
        const frame =  this._getValueInputs().find(x => x.key === key);
        if(frame){
            frame.component.setValue(value);
        }

    }

    getFormData(){

        const props = this.props;
        const inputs = this._getValueInputs();
        const _inputs = { };

        for(let i = 0 ; i  < inputs.length; i++) {

            const item = inputs[i];

            const formInput = this._getInputRef(item.key);

            if(formInput){
                _inputs[item.key] = formInput.getValue();
            }

        }

        return _inputs;
    }

    render(){

        const inputs = this.props.inputs;
        return <div className={this.props.className}>{inputs.map((c,index) => c.hasOwnProperty('component') ? <div key={index}>{c.component({ getRef: (comp) => {
            this._components[c.key] = comp;
        }})}</div> : c )}</div>;

    }

}


export default FormRenderer;