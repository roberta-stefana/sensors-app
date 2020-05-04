import React, { Component } from 'react';
import Current from './components/Current';
import History from './components/History';
import * as firebase from 'firebase';
import FirebaseConfig from './constants/FirebaseConfig'
import {Container, AppBar, Toolbar, Button, withStyles} from '@material-ui/core';
import styles from './styles'

class App extends Component {
	state = { 
		step: 1, 
		lightData: null,
		temperatureData: null,
		humidityaData: null,
		currentTemperature: 0,
		currentLight: 0,
		currentHumidity: 0,
	}
	
	handleClick = (newStep) =>{
		this.setState({
			step: newStep
		})
	}

	async componentDidMount(){
		console.log("INITIALIZE")
        await firebase.initializeApp(FirebaseConfig);
		let lightRef = firebase.database().ref('/light');
        lightRef.on('value', snapshot => {
			let data = snapshot.val();
            if(data !== null){
				let lightData = Object.values(data);
				console.log(lightData)
				this.setState({
					lightData: lightData,
				})
            }   
		});

		let temperatureRef = firebase.database().ref('/temperature');
        temperatureRef.on('value', snapshot => {
			let data = snapshot.val();
            if(data !== null){
				let tempData = Object.values(data);
				this.setState({
					temperatureData: tempData,
				})
            }   
		});

		let humidityRef = firebase.database().ref('/humidity');
        humidityRef.on('value', snapshot => {
			let data = snapshot.val();
            if(data !== null){
				let humData = Object.values(data);
				this.setState({
					humidityData: humData,
				})
            }   
		});
		
    }

    render() { 
		const {step, lightData, temperatureData, humidityData, currentHumidity, currentLight, currentTemperature} = this.state;
		const {classes} = this.props;

        return (
			<React.Fragment>
				<AppBar className={classes.appbar}>
					<Toolbar>
						<Button onClick={()=>this.handleClick(2)} className={classes.button}>History</Button>
						<Button onClick={()=>this.handleClick(1)} className={classes.button}>Current</Button>
					</Toolbar>
				</AppBar>
				<Container className={classes.container}>
					{step === 1 
					? <Current light={currentLight} temperature={currentTemperature} humidity={currentHumidity} classes={classes}/>
					: <History lightData={lightData} temperatureData={temperatureData} humidityData={humidityData} classes={classes}/>
					}
				</Container>
			</React.Fragment>
        );
    }
}
 
export default withStyles(styles)(App);


