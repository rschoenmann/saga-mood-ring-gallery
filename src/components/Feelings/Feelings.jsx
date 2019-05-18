import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Card, CardHeader, CardMedia, CardActions, IconButton} from '@material-ui/core';
// import {ArrowBack, ArrowForward} from '@material-ui/icons';
import ImageList from '../ImageList/ImageList';
import TagList from '../TagList/TagList';
import ImageTags from '../ImageTags/ImageTags';

class Feelings extends Component {

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

	render(){
		return(
			<div>
				<h2>Images:</h2>
				{/* insert into material-ui card with complex interaction */}
					{this.props.reduxState.images.map((image) => {
						// let url = `/public/${image.path}`
						return (
							<>
								<ImageList key={image.id} image={image} />
								{/* <TagList /> */}
								<ImageTags />
							</>
						)
					})}
			</div>
		)
	}
}

const mapReduxStateToProps = (reduxState) => ({
	reduxState
});

export default connect(mapReduxStateToProps)(Feelings);