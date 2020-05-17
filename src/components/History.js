import React, { Component } from 'react';
import ChartComponent from './ChartComponent'

class History extends Component {
    state = {  }
    render() {
        const {lightData, temperatureData, humidityData, classes} = this.props;

        return (
            <div>
                { lightData !== undefined && temperatureData!== undefined && humidityData !== undefined &&
                <div>
                    <div className={classes.chartDiv}><ChartComponent lightData={lightData} temperatureData={temperatureData} humidityData={humidityData} flag="DAY"/></div>
                    <div className={classes.chartDiv}><ChartComponent lightData={lightData} temperatureData={temperatureData} humidityData={humidityData} flag="MONTH"/></div>
                    <div className={classes.chartDiv}><ChartComponent lightData={lightData} temperatureData={temperatureData} humidityData={humidityData} flag="YEAR"/></div>
                </div>
            }
            </div>
        );
    }
}

export default History;
