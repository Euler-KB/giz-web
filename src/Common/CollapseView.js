import React,{ Component }   from 'react';
import PropTypes from 'prop-types';

class CollapseView extends Component{

    static propTypes = {
        initiallyOpen: PropTypes.bool,
        title: PropTypes.any,
        toggleBtn: PropTypes.func
    };

    static defaultProps = {

        toggleBtn: ({ isOpen , toggle }) => {
            return <button type="button" onClick={toggle} className="btn btn-link">{isOpen ? "Close" : "Expand" }</button>
        }

    };

    constructor(props){
        super(props);
        this.state = {
            isOpen: props.initiallyOpen
        }
    }

    isOpen(){
        return this.state.isOpen;
    }

    toggle(){

        if(this.isOpen())
            this.close();
        else
            this.show();
    }

    show(){

        this.setState({
            isOpen: true
        });

    }

    close(){

        this.setState({
            isOpen: false
        });

    }

    render(){

        const props = this.props;

        return <div>

            <div className="clearfix">

                <div className="pull-left">
                    {props.title}
                </div>

                <div className="pull-right">
                    {props.toggleBtn ? props.toggleBtn({ isOpen: this.state.isOpen , toggle: this.toggle.bind(this) }) : null}
                </div>

            </div>
            {this.state.isOpen && props.children}

        </div>
    }
}

export default CollapseView;