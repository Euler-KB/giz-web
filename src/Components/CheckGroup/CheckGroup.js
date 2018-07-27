import React , { Component } from 'react';
import PropTypes from 'prop-types';

class CheckGroup extends Component {

    static propTypes = {
        items: PropTypes.array,
        onItemCheckChanged : PropTypes.func
    };

    constructor(props){
        super(props);
        this.state = {
            checkMap: []
        }
    }

    getCheckedValues(){
        return this.state.checkMap.map(x => x.value);
    }

    render(){

        const props = this.props;
        return <div className="row detail-checkbox-wrap">
            {props.items.map( (item,key) => {

               return <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" key={key}>
                    <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" checked={ !!this.state.checkMap.find(x => x == item) } onChange={evt => {

                              const checked = evt.target.checked;

                              if(props.onItemCheckChanged){
                                  props.onItemCheckChanged(item,checked);
                              }

                              const state =  this.state;
                              let checkMap = state.checkMap;

                              if(!checked){
                                  let index = checkMap.indexOf(item);
                                  checkMap.splice(  index , 1);
                              }else{

                                  if(!checkMap.find(x => x == item)){
                                     checkMap.push(item);
                                  }

                              }

                              this.setState({
                                  checkMap: checkMap
                              });


                        }}/>
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description">{item.label}</span>
                    </label>
                </div>;

            })}
        </div>
    }

}

export default CheckGroup;