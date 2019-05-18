import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button} from '@material-ui/core';

class ImageList extends Component{

	handleTag = (event) => {
		console.log('in handleTag')
		console.log('event.target.value', event.target.value)
		console.log('this.props.image.id', this.props.image.id)
		//send dispatch to sagaWatcher to trigger addTag saga
		//capture id of image clicked and id of tag selected as payload
		this.props.dispatch({ type: 'ADD_TAG', tag: event.target.value, img: this.props.image.id})
	};//end handleTag

	render(){
		return(
			// <Card key={image.id}>
			// 	<CardHeader
			// 		title={image.title}
			// 	/>
			// 	<CardMedia
			// 		image={image.path}
			// 		title={image.title}
			// 	/>
			// 	<CardActions disableActionSpacing>
			// 		<IconButton aria-label="Previous Image">
			// 			<ArrowBack />
			// 		</IconButton>
			// 		<IconButton aria-label="Next Image">
			// 			<ArrowForward />
			// 		</IconButton>
			// 	</CardActions>
			// </Card>
			<div>
				<img src={this.props.image.path} alt={this.props.image.title} />
				<Button variant="contained"
					color="primary" >Previous Image</Button>
				<select onChange={this.handleTag}>
					<option selected disabled>How does this image make you feel?</option>
					{this.props.reduxState.tags.map((tag) => {
						return (
							<option key={tag.id} value={tag.id}>{tag.name}</option>
						)
					})}
				</select>
				<Button variant="contained"
					color="primary" >Next Image</Button>
			</div>
		)
	}
}

const mapReduxStateToProps = (reduxState) => ({
	reduxState
});

export default connect(mapReduxStateToProps)(ImageList);