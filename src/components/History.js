import React, { Component } from 'react';
import Chart from './Chart'

class History extends Component {
    state = {  }
    render() { 
        const {lightData, temperatureData, humidityData} = this.props;

        return (
            <div>
                <Chart lightData={lightData} temperatureData={temperatureData} humidityData={humidityData} flag="DAY"/>
                <Chart lightData={lightData} temperatureData={temperatureData} humidityData={humidityData} flag="MONTH"/>
                <Chart lightData={lightData} temperatureData={temperatureData} humidityData={humidityData} flag="YEAR"/>
            </div>
        );
    }
}
 
export default History;