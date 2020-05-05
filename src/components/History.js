import React, { Component } from 'react';
import ChartComponent from './ChartComponent'

class History extends Component {
    state = {  }
    render() {
        const {lightData, temperatureData, humidityData} = this.props;

        return (
            <div>
                { lightData !== undefined && temperatureData!== undefined && humidityData !== undefined &&
                <div>
                    <ChartComponent lightData={lightData} temperatureData={temperatureData} humidityData={humidityData} flag="DAY"/>
                    <ChartComponent lightData={lightData} temperatureData={temperatureData} humidityData={humidityData} flag="MONTH"/>
                    <ChartComponent lightData={lightData} temperatureData={temperatureData} humidityData={humidityData} flag="YEAR"/>
                </div>
            }
            </div>
        );
    }
}

export default History;
