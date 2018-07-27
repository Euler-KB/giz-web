import React , { Component } from 'react';
import HeaderMenu from "../Home/HeaderMenu";

class Dealers extends Component{

    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return <div>
            <HeaderMenu solidBackground={true}/>

            <section>
                <h6>Dealers</h6>
                <hr/>
            </section>

        </div>
    }

}

export default Dealers;