import React, { Component } from 'react';
import './App.css';
import Current from './components/Current';
import History from './components/History';

class App extends Component {
	state = { step: 1 }
	
	handleClick = () =>{
		this.setState({
			step: 2
		})
	}

    render() { 
		const {step} = this.state;

        return (
			<div>
				<button onClick={this.handleClick}>History</button>
				{step === 1 
				? <Current/>
				: <History/>
				}
			</div>
        );
    }
}
 
export default App;


