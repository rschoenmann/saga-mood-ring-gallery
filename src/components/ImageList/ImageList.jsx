import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Chip, Card, CardHeader, CardMedia, CardActions, IconButton, Button, FormControl, FormHelperText, Select, MenuItem} from '@material-ui/core';
import {ArrowBack, ArrowForward} from '@material-ui/icons';

class ImageList extends Component{

	state = {
		imageId: '',
		tagId: 0,
		index: 0
	}

	componentDidMount(){
		this.setState({
			imageId: this.props.image.id
		})
	};//end componentDidMount

	handleNext = () => {
		//if local index state is equal to length or images array -1, set index to
		//zero to loop back to first image in array
		if(this.state.index === this.props.reduxState.images.length-1){
			this.setState({
				index: 0
			})
		}else{
			this.setState({
				index: this.state.index+1
			})
		}
		console.log('this.state.index:', this.state.index)
	};//end handleNext

	handlePrevious = () =>{
		//if local index state is already at zero, set it to length of image array minus
		//one to loop back through to the end of the array
		if(this.state.index === 0){
			this.setState({
				index: this.props.reduxState.images.length-1
			})
		}else{
			this.setState({
				index: this.state.index -1
			})
		}

		console.log('this.state.index:', this.state.index)
	};//end handlePrevious


	handleChange = (event) => {
		console.log('in handleTag')
		console.log('event.target.value', event.target.value)
		console.log('this.props.image.id', this.props.image.id)
		//send dispatch to sagaWatcher to trigger addTag saga
		//capture id of image clicked and id of tag selected as payload
		this.props.dispatch({ type: 'ADD_TAG', tag: event.target.value, img: this.props.image.id })
	};//end handleTag

	render(){
		return(
			<>
				<Card className="imageCard">
					<CardHeader />
					<CardMedia component="img"
						image={this.props.image.path}
						title={this.props.image.title} />
					<CardActions disableActionSpacing>

						<Button variant="contained" onClick={this.handlePrevious}
							color="primary" >Previous Image</Button>

						<select onChange={this.handleChange}>
							<option selected disabled>How does this image make you feel?</option>
							{this.props.reduxState.tags.map((tag) => {
								return (
									<option key={tag.id} value={tag.id}>{tag.name}</option>
								)
							})}
						</select>

						<Button variant="contained" onClick={this.handleNext}
							color="primary">Next Image</Button>
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