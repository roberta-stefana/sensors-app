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

const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

class ChartComponent extends React.Component {
    render() {
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

