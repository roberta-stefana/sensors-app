import React, { Component } from 'react';
import Chart from './Chart'

class History extends Component {
    state = {  }
    render() { 
        const {lightData} = this.props;
        
        return (  
            <Chart lightData={lightData}/>
        );
    }
}
 
export default History;