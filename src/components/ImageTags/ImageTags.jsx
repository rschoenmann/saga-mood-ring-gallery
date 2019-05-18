import React, {Component} from 'react';
import {connect} from 'react-redux';

class ImageTags extends Component{
	render(){
		return(
			<p>Image Tags</p>
		)
	}
}

const mapReduxStateToProps = (reduxState) => ({
	reduxState
});

export default connect(mapReduxStateToProps)(ImageTags);