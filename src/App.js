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
				this.setState({
					lightData: lightData,
				})
            }   
		});
		
    }

    render() { 
		const {step, lightData} = this.state;
		const {classes} = this.props;

        return (
			<React.Fragment>
				<AppBar className={classes.appbar}>
					<Toolbar>
						<Button onClick={()=>this.handleClick(2)}>History</Button>
						<Button onClick={()=>this.handleClick(1)}>Current</Button>
					</Toolbar>
				</AppBar>
				<Container className={classes.container}>
					{step === 1 
					? <Current lightData={lightData}/>
					: <History lightData={lightData}/>
					}
				</Container>
			</React.Fragment>
        );
    }
}
 
export default withStyles(styles)(App);


