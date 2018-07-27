import React,{ Component }   from 'react';
import PropTypes from 'prop-types';

class Wizard extends Component{

    static propTypes = {
        steps: PropTypes.array,
        currentStep: PropTypes.number
    };

    constructor(props){
        super(props);
    }

    render(){

        const props = this.props;
        const step = props.currentStep;

        return <div>
            { props.steps.map((c,index) => {
                return <div key={index} style={{ display: (props.currentStep === index ?  "" : "none") }}>{c}</div>
            })}
        </div>
    }

}

export default Wizard;