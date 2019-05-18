import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button, FormControl, FormHelperText, Select, MenuItem, InputLabel} from '@material-ui/core';

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

				<FormControl variant="outlined" onChange={this.handleTag}>
					<Select value="" name="tag" displayEmpty>
						<MenuItem value="" disabled>How does this image make you feel?</MenuItem>
							{this.props.reduxState.tags.map((tag) => {
								return (
									<MenuItem key={tag.id} value={tag.id}>{tag.name}</MenuItem>
								)
							})}
					</Select>
					<FormHelperText>Add a tag to this image if you'd like!</FormHelperText>
				</FormControl>
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