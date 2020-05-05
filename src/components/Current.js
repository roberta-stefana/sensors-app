import React, { Component } from "react";
import { Paper, Typography, LinearProgress, withStyles } from "@material-ui/core";
import HumidityPNG from '../images/humidity.png';
import TemperaturePNG from '../images/temperature.png';
import LightPNG from '../images/light.png';

const ColorLinearProgress = withStyles({
    colorPrimary: {
      backgroundColor: '#a1a1a1',
    },
    barColorPrimary: {
      backgroundColor: '#080807',
    },
  })(LinearProgress);

class Current extends Component {
    state = {};
    render() {
        const {classes, light, humidity, temperature} = this.props

        return (
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h4" className={classes.title}>Current Values</Typography>
                <div className={classes.valueContainer}>
                    <div className={classes.value}>
                        <img src={HumidityPNG} alt="Humidity" className={classes.image}></img>
                        <Typography variant="h5">Humidity: {humidity}</Typography>
                    </div>
                    <ColorLinearProgress/>
                    <div className={classes.value}>
                        <img src={TemperaturePNG} alt="Temperature" className={classes.image}></img>
                        <Typography variant="h5">Temperature: {temperature}</Typography>
                    </div>
                    <ColorLinearProgress/>
                    <div className={classes.value}>
                        <img src={LightPNG} alt="Light" className={classes.image}></img>
                        <Typography variant="h5">Light: {light}</Typography>
                    </div>
                    <ColorLinearProgress/>
                </div>
            </Paper>
        );
    }
}
export default Current;
