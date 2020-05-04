import React, { Component } from 'react';
import Chart from './Chart'

class History extends Component {
    state = {  }
    render() { 
        const {lightData} = this.props;

        return (
            <div>
                <Chart lightData={lightData} flag="DAY"/>
                <Chart lightData={lightData} flag="MONTH"/>
                <Chart lightData={lightData} flag="YEAR"/>
            </div>
        );
    }
}
 
export default History;