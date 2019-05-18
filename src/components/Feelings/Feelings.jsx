import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {Card, CardHeader, CardMedia, CardActions, IconButton} from '@material-ui/core';
// import {ArrowBack, ArrowForward} from '@material-ui/icons';

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
								<img key={image.id} src={image.path} alt={image.title} />
								<select >
									<option selected disabled>How does this image make you feel?</option>
									{this.props.reduxState.tags.map((tag) => {
										return (
											<option value={tag.id}>{tag.name}</option>
										)
									})}
								</select>
							</div>
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