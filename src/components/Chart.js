import React, { Component } from "react";
import CanvasJSReact from "../setup/canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
  state = {};
  render() {
    const { lightData } = this.props;
    console.log(lightData);
    const options = {
      theme: "light2",
      animationEnabled: true,
      title: {
        text: "Units Sold VS Profit",
      },
      subtitles: [
        {
          text: "Click Legend to Hide or Unhide Data Series",
        },
      ],
      axisX: {
        title: "States",
      },
      axisY: {
        title: "Units Sold",
        titleFontColor: "#6D78AD",
        lineColor: "#6D78AD",
        labelFontColor: "#6D78AD",
        tickColor: "#6D78AD",
        includeZero: false,
      },
      axisY2: {
        title: "Profit in USD",
        titleFontColor: "#51CDA0",
        lineColor: "#51CDA0",
        labelFontColor: "#51CDA0",
        tickColor: "#51CDA0",
        includeZero: false,
      },
      toolTip: {
        shared: true,
      },
      legend: {
        cursor: "pointer",
        itemclick: this.toggleDataSeries,
      },
      data: [
        {
          type: "spline",
          name: "Light",
          showInLegend: true,
          xValueFormatString: "MMM YYYY",
          yValueFormatString: "#,##0 Units",
          dataPoints: [
            { x: new Date(2017, 0, 1), y: 120 },
            { x: new Date(2017, 1, 1), y: 135 },
            { x: new Date(2017, 2, 1), y: 144 },
            { x: new Date(2017, 3, 1), y: 103 },
            { x: new Date(2017, 4, 1), y: 93 },
            { x: new Date(2017, 5, 1), y: 129 },
            { x: new Date(2017, 6, 1), y: 143 },
            { x: new Date(2017, 7, 1), y: 156 },
            { x: new Date(2017, 8, 1), y: 122 },
            { x: new Date(2017, 9, 1), y: 106 },
            { x: new Date(2017, 10, 1), y: 137 },
            { x: new Date(2017, 11, 1), y: 142 },
          ],
        },
        {
          type: "spline",
          name: "Temperature",
          axisYType: "secondary",
          showInLegend: true,
          xValueFormatString: "MMM YYYY",
          yValueFormatString: "$#,##0.#",
          dataPoints: [
            { x: new Date(2017, 0, 1), y: 19034.5 },
            { x: new Date(2017, 1, 1), y: 20015 },
            { x: new Date(2017, 2, 1), y: 27342 },
            { x: new Date(2017, 3, 1), y: 20088 },
            { x: new Date(2017, 4, 1), y: 20234 },
            { x: new Date(2017, 5, 1), y: 29034 },
            { x: new Date(2017, 6, 1), y: 30487 },
            { x: new Date(2017, 7, 1), y: 32523 },
            { x: new Date(2017, 8, 1), y: 20234 },
            { x: new Date(2017, 9, 1), y: 27234 },
            { x: new Date(2017, 10, 1), y: 33548 },
            { x: new Date(2017, 11, 1), y: 32534 },
          ],
        },
        {
          type: "spline",
          name: "Humidity",
          axisYType: "secondary",
          showInLegend: true,
          xValueFormatString: "MMM YYYY",
          yValueFormatString: "$#,##0.#",
          dataPoints: [
            { x: new Date(2017, 0, 1), y: 123.5 },
            { x: new Date(2017, 1, 1), y: 23215 },
            { x: new Date(2017, 2, 1), y: 25142 },
            { x: new Date(2017, 3, 1), y: 2688 },
            { x: new Date(2017, 4, 1), y: 2004 },
            { x: new Date(2017, 5, 1), y: 2034 },
            { x: new Date(2017, 6, 1), y: 3007 },
            { x: new Date(2017, 7, 1), y: 3023 },
            { x: new Date(2017, 8, 1), y: 2004 },
            { x: new Date(2017, 9, 1), y: 2074 },
            { x: new Date(2017, 10, 1), y: 3048 },
            { x: new Date(2017, 11, 1), y: 3304 },
          ],
        },
      ],
    };

    return (
      <div>
        <CanvasJSChart options={options} onRef={(ref) => (this.chart = ref)} />
        {}
      </div>
    );
  }
}

export default Chart;
