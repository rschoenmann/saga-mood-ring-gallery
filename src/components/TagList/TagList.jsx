import React, { Component } from 'react';
import {connect} from 'react-redux';

class TagList extends Component{

	render(){
		return(
			<p>TagList component</p>
		)
	}
}

const mapReduxStateToProps = (reduxState) => ({
	reduxState
});

export default connect(mapReduxStateToProps)(TagList);