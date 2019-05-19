import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Chip, Card, CardHeader, CardMedia, CardActions, IconButton, Button, FormControl, FormHelperText, Select, MenuItem} from '@material-ui/core';
import {ArrowBack, ArrowForward} from '@material-ui/icons';

class ImageList extends Component{

	handleChange = (event) => {
		console.log('in handleTag')
		console.log('event.target.value', event.target.value)
		console.log('this.props.image.id', this.props.image.id)
		//send dispatch to sagaWatcher to trigger addTag saga
		//capture id of image clicked and id of tag selected as payload
		this.props.dispatch({ type: 'ADD_TAG', tag: event.target.value, img: this.props.image.id })
	};//end handleTag

	render(){
		//pull out the tags key from our image object to display tag_id's associated with each image
		// let tagsToShow;
		// if(this.props.image.tags.length > 0){
		// 	tagsToShow = (<p>{this.props.image.tags}</p>)
		console.log('this.props.image.id', this.props.image.id)
		// }
		return(
			<>
				<Card className="imageCard">
					<CardHeader />
					<CardMedia component="img"
						image={this.props.image.path}
						title={this.props.image.title} />
					<CardActions disableActionSpacing>

						<Button variant="contained"
							color="primary" >Previous Image</Button>

						<FormControl variant="outlined" onChange={this.handleChange}>
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
					</CardActions>
				</Card>
				<ul>
					<li>{this.props.image.tags}</li>
				</ul>
			</>
		)
	}
}

const mapReduxStateToProps = (reduxState) => ({
	reduxState
});

export default connect(mapReduxStateToProps)(ImageList);