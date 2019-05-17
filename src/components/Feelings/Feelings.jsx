import React, {Component} from 'react';
import {connect} from 'react-redux';

class Feelings extends Component {

	componentDidMount(){
		this.showImages();
	};//end componentDidMount
	
	showImages = () => {
		this.props.dispatch({type: 'FETCH_IMAGES'})
	}

	render(){
		return(
			<div>
				<h2>Images:</h2>
				{/* insert into material-ui card with complex interaction */}
					{this.props.reduxState.images.map((image) => {
						return (
							<img key={image.id} src={image.path} alt={image.title} className="image"/>
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