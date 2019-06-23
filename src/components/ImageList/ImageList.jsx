import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Chip, Card, CardHeader, CardMedia, CardActions, IconButton, Button, FormControl, FormHelperText, Select, MenuItem} from '@material-ui/core';
import {ArrowBack, ArrowForward} from '@material-ui/icons';
import './ImageList.css';

class ImageList extends Component{

	state = {
		imageId: this.props.image.id,
		tagId: 0
	}

	componentDidMount(){
		this.props.dispatch({type: 'DISPLAY_TAG', payload: {imageId: this.props.image.id}})
	};//end componentDidMount


	handleChange = (event) => {
		console.log('in handleTag')
		console.log('event.target.value', event.target.value)
		console.log('this.props.image.id', this.props.image.id)
		this.setState({
			...this.state,
			tagId: parseInt(event.target.value)
		})
	};//end handleTag

	handleSubmit = (event) => {
		this.setState({
			...this.state,
			tagId: event.target.value
		})
		//send dispatch to sagaWatcher to trigger addTag saga
		//capture id of image clicked and id of tag selected as payload
		this.props.dispatch({ type: 'ADD_TAG', payload: {imageId: this.props.image.id, tagId: this.state.tagId}})
		// this.props.dispatch({ type: 'DISPLAY_TAG', payload: this.state })
	}

	render(){
		return(
			<div className="polaroid">
				<Card className="imageCard">
					<CardHeader />
					<CardMedia component="img"
						image={this.props.image.path}
						title={this.props.image.title} />
					<CardActions disableActionSpacing>
					<select onChange={this.handleChange} className="dropdown">
						<option selected disabled>How does this image make you feel?</option>
						{this.props.reduxState.tags.map((tag) => {
							return (
								<option key={tag.id} value={tag.id}>{tag.name}</option>
							)
						})}
					</select>	
						<Button onClick={this.handleSubmit} variant="contained" color="secondary" className="submitButton">Add Tag</Button>

						{this.props.reduxState.tagsAndImages.map((aTag) => {
							if (aTag.id === this.state.imgId) {
								return (
									<div>
										<p>Tags on this image:</p>
									<p>{aTag.name}</p>
									</div>
								)
							}else{
								return(
									<p>Add a tag to your image!</p>
								)
							}
						})}

						
						
					</CardActions>
				</Card>
			
					<pre>{JSON.stringify(this.props.reduxState.tagsAndImages)}</pre>
				
			</div>
		)
	}
}

const mapReduxStateToProps = (reduxState) => ({
	reduxState
});

export default connect(mapReduxStateToProps)(ImageList);