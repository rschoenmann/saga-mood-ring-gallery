import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Chip, Card, CardHeader, CardMedia, CardActions, IconButton, Button, FormControl, FormHelperText, Select, MenuItem} from '@material-ui/core';
import {ArrowBack, ArrowForward} from '@material-ui/icons';
import ImageTags from '../ImageTags/ImageTags';

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
			<>
			<Card className="imageCard">
				<CardHeader/>
				<CardMedia component="img"
					image={this.props.image.path}
					title={this.props.image.title}/>
				<CardActions disableActionSpacing>

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
				</CardActions>
			</Card>
				<ul>
					<li>{this.props.image.tags}</li>
				</ul>
				{/* {this.props.reduxState.images.map((anObject) => {
					if(anObject.tags && anObject.length){
						return(
							<p>TAGS</p>
						)
					}else{
						return(
							<p>NO TAGS SORRY</p>
						)
					}

				})} */}
			</>
		)
	}
}

const mapReduxStateToProps = (reduxState) => ({
	reduxState
});

export default connect(mapReduxStateToProps)(ImageList);