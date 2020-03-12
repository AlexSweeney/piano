import React, {Component} from 'react';
import './piano.css';

const keys = ['c','c#','d','d#','e','f','f#','g','g#','a','a#','b'];

class Piano extends Component {
	render() {
		return (
			<div className="piano">
				<Octave/> 
			</div>
		)
	}
}

class Octave extends Component { 
	render() {
		return (
			<div className="octave">
				<WhiteKey/>{/*C*/}
				<WhiteKey left={12.5+"%"}/>{/*D*/}
				<WhiteKey left={(12.5 * 2)+"%"}/>{/*E*/}
				<WhiteKey left={(12.5 * 3)+"%"}/>{/*F*/}
				<WhiteKey left={(12.5 * 4)+"%"}/>{/*G*/}
				<WhiteKey left={(12.5 * 5)+"%"}/>{/*A*/}
				<WhiteKey left={(12.5 * 6)+"%"}/>{/*B*/}
			</div>
		)
	}
}

class Key extends Component {
	constructor(props) {
		super(props);
		this.keyClick = this.keyClick.bind(this);  
	}

	keyClick(sum = 0) {    
		let i = this.props.keyNumber + sum;  
		console.log('click key:', keys[i]);
	}
}

class WhiteKey extends Key {	
	
	render() {
		return (
			<div className="whiteKey" style={{left: this.props.left }} onClick={() => this.keyClick()}></div> 
		)
	}
} 

class BlackKey extends Key {
	render() {
		return (
			<div className="key left">
				<div className="blackKey" onClick={() => this.keyClick(-1)}></div>
				<div className="halfWhiteKey" onClick={() => this.keyClick()}></div>
			</div>
		)
	}
}

export default Piano;