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
const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY','JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER','NOVEMBER', 'DECEMBER'];
const years = [2017, 2018, 2019, 2020];

class ChartComponent extends React.Component {

    average = list => list.reduce((prev, curr) => prev + curr) / list.length;

    state = {
        light: [],
        temperature: [],
        humidity: [],
        categories: [],
        title: '',
    };

    componentDidMount(){
        const {lightData, temperatureData, humidityData, flag} = this.props;
        let light = [], temperature = [], humidity = [];
        let title;
        let categories;

        let array;
        switch (flag) {
            case DAY:
                array = days;
                title = 'DAYS'
                categories = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
                break;
            case MONTH:
                array = months;
                title='MONTHS'
                categories = ['J', 'F', 'M', 'A', 'M','J', 'J', 'A', 'S', 'O','N', 'D'];
                break;
            case YEAR:
                array = years;
                title = 'YEARS'
                categories = [2017, 2018, 2019, 2020];
                break;
        }
        array.map((category) => {
            let values = [];
            lightData.map((x) => {
                if (x.date.dayOfWeek == category || x.date.month == category || x.date.year == category) {
                    values.push(x.value);
                }
            });
            let averageValue;
            if (values.length !== 0) {
                averageValue = this.average(values);
                light.push(averageValue);
            }
        });

        array.map((category) => {
            let values = [];
            temperatureData.map((x) => {
                if (x.date.dayOfWeek == category || x.date.month == category || x.date.year == category) {
                    values.push(x.value);
                }
            });
            let averageValue;
            if (values.length !== 0) {
                averageValue = this.average(values);
                temperature.push(averageValue);
            }
        });

        array.map((category) => {
            let values = [];
            humidityData.map((x) => {
                if (x.date.dayOfWeek == category || x.date.month == category || x.date.year == category) {
                    values.push(x.value);
                }
            });
            let averageValue;
            if (values.length !== 0) {
                averageValue = this.average(values);
                humidity.push(averageValue);
            }
        });
        this.setState({
            light:light,
            humidity: humidity,
            temperature: temperature,
            categories: categories,
            title: title,
        })

    }

    render() {
        const {light, humidity, temperature, categories, title} = this.state;

        return (
            <div>
                <Chart>
                    <ChartTitle text={title}/>
                    <ChartCategoryAxis>
                        <ChartCategoryAxisItem title={title} categories={categories}/>
                    </ChartCategoryAxis>
                    <ChartSeries>
                        <ChartSeriesItem type="line" data={light}/>
                        <ChartSeriesItem type="line" data={humidity}/>
                        <ChartSeriesItem type="line" data={temperature}/>
                    </ChartSeries>
                </Chart>
            </div>
        );
    }
}


export default ChartComponent;

