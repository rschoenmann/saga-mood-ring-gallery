import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Chip} from '@material-ui/core';

class ImageTags extends Component{
	render(){
		//console.log('this.props.reduxState.images:', this.props.reduxState)
		return(
			<div className="imageTagDiv">
				<pre>{JSON.stringify(this.props.reduxState.images)}</pre>
			{/* <ul>
				{this.props.reduxState.images.map((object) => {
					if(object.tags !=null){
						return (
							<li>tag</li>
						)
					}else{
						return(
							<p>No tags on this image</p>
						)
					
					}
				})}
			</ul> */}
			</div>
		)
	}
}

const mapReduxStateToProps = (reduxState) => ({
	reduxState
});

export default connect(mapReduxStateToProps)(ImageTags);