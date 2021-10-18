import React, {Component} from 'react';

class Clock extends Component {
	constructor(props){
		super(props);
		this.state = {date: new Date()};
	}

	componentDidMount(){
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}t

	render() {
		return (
			<div  className='absolute left-0 top-0 pa2 ma1'>
				<h2>{this.state.date.toLocaleTimeString()} </h2>
			</div>
		);
	}
}

export default Clock;