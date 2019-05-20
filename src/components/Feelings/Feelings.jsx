import React, {Component} from 'react';
import {connect} from 'react-redux';
import ImageList from '../ImageList/ImageList';
import {Button} from '@material-ui/core';

class Feelings extends Component {

	state = {
		index: 0
	}

	componentDidMount(){
		this.showImages();
		this.showTags();
	};//end componentDidMount

	showTags = () => {
		//send dispatch to our sagaWatcher to trigger fetchTags saga
		this.props.dispatch({ type: 'FETCH_TAGS'})
	};//end showCategories
	
	showImages = () => {
		//send dispatch to our sagaWatcher to trigger fetchImages saga
		this.props.dispatch({type: 'FETCH_IMAGES'})
	};//end showImages

	handleNext = () => {
		//if local index state is equal to length or images array -1, set index to
		//zero to loop back to first image in array
		if (this.state.index === this.props.reduxState.images.length - 1) {
			this.setState({
				index: 0
			})
		} else {
			this.setState({
				index: this.state.index + 1
			})
		}
		console.log('this.state.index:', this.state.index)
	};//end handleNext

	handlePrevious = () => {
		//if local index state is already at zero, set it to length of image array minus
		//one to loop back through to the end of the array
		if (this.state.index === 0) {
			this.setState({
				index: this.props.reduxState.images.length - 1
			})
		} else {
			this.setState({
				index: this.state.index - 1
			})
		}
		console.log('this.state.index:', this.state.index)
	};//end handlePrevious

	render(){
		let index = this.state.index
		return(
			<div>
				{this.props.reduxState.images.map((image) => {
					if(image.id-1 === index){
						return (
							<div>
								<ImageList key={image.id} image={image} />

								<Button variant="contained" onClick={this.handlePrevious}
									color="primary" >Previous Image</Button>

								<Button variant="contained" onClick={this.handleNext}
									color="primary">Next Image</Button>
							</div>
						)
					}
				})}
			</div>
		)
	}
}

const mapReduxStateToProps = (reduxState) => ({
	reduxState
});

export default connect(mapReduxStateToProps)(Feelings);