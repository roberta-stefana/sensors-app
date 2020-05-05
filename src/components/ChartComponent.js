import React from 'react';

import '@progress/kendo-react-charts'
import '@progress/kendo-react-popup'
import '@progress/kendo-react-inputs'
import '@progress/kendo-react-intl'
import '@progress/kendo-data-query'
import '@progress/kendo-drawing'
import '@progress/kendo-file-saver'

import 'hammerjs';

import {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartSeries,
    ChartSeriesItem,
    ChartTitle
} from '@progress/kendo-react-charts';

const DAY = "DAY";
const MONTH = "MONTH";
const YEAR = "YEAR";

const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
const months = ['January'.toUpperCase(), 'February'.toUpperCase(), 'March'.toUpperCase(), 'April'.toUpperCase(), 'May'.toUpperCase(),
    'June'.toUpperCase(), 'July'.toUpperCase(), 'August'.toUpperCase(), 'September'.toUpperCase(), 'October'.toUpperCase(),
    'November'.toUpperCase(), 'December'.toUpperCase()];
const years = [2017, 2018, 2019, 2020];

class ChartComponent extends React.Component {

    average = list => list.reduce((prev, curr) => prev + curr) / list.length;

    state = {
        light: [],
        temperature: [],
        humidity: [],
        categories: []
    };

    createData = () => {
        const {lightData, temperatureData, humidityData, flag} = this.props;
        let light = [], temperature = [], humidity = [];
        console.log("lightData");
        console.log(lightData);

        let array;
        switch (flag) {
            case DAY:
                array = days;
                break;
            case MONTH:
                array = months;
                break;
            case YEAR:
                array = years;
                break;
        }
        array.map((category) => {
            let values = [];
            lightData.map((x) => {
                if (x.date.day == category || x.date.month == category || x.date.year == category) {
                    values.push(x.value);
                }
            });
            let averageValue;
            if (values.length !== 0) {
                averageValue = this.average(values);
                light.push(averageValue);
            }
        });
        this.setState({
            light: light,
            categories: array
        })
    }

    render() {
        const {lightData, temperatureData, humidityData, flag} = this.props;
        const {light, humidity, temperature, categories} = this.state;

        if (lightData !== undefined || lightData !== null)
            this.createData();

        return (
            <div>
                <Chart>
                    <ChartTitle text="Units sold"/>
                    <ChartCategoryAxis>
                        <ChartCategoryAxisItem title={{text: 'Months'}} categories={categories}/>
                    </ChartCategoryAxis>
                    <ChartSeries>
                        <ChartSeriesItem type="line" data={[123, 276, 310, 212, 240, 156, 98]}/>
                        <ChartSeriesItem type="line" data={[165, 210, 287, 144, 190, 167, 212]}/>
                        <ChartSeriesItem type="line" data={[56, 140, 195, 46, 123, 78, 95]}/>
                    </ChartSeries>
                </Chart>
            </div>
        );
    }
}


export default ChartComponent;

