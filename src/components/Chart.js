import React, { Component } from 'react';
import {Curent} from './Current';
import {History} from './History';
class Chart extends Component {
    state = {  }
    render() { 
        return ( <Curent /><History/> );
    }
}
 
export default Chart;