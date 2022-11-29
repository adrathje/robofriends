import React, { Component } from 'react';

class ErrorBoundry extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info) {
		this.setState({ hasError: true})
	}

	render() {
		if (this.state.hasError) {
			return <h1>Well dang it. It looks like something broke. 
			Working on it now...</h1>
		}
		return this.props.children
	}
}


export default ErrorBoundry;
