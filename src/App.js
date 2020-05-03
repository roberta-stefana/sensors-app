import React, { Component } from 'react';
import './App.css';
import Current from './components/Current';
import History from './components/History';
import * as firebase from 'firebase';
import FirebaseConfig from './constants/FirebaseConfig'

class App extends Component {
	state = { 
		step: 1, 
		lightData: null,
	}
	
	handleClick = () =>{
		this.setState({
			step: 2
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

        return (
			<div>
				<button onClick={this.handleClick}>History</button>
				{step === 1 
				? <Current lightData={lightData}/>
				: <History lightData={lightData}/>
				}
			</div>
        );
    }
}
 
export default App;


