import React, {Component} from 'react';
import {connect} from 'react-redux';
import ImageList from '../ImageList/ImageList';

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
					{this.props.reduxState.images.map((image) => {
						return (
							<div>
								<ImageList key={image.id} image={image} />
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