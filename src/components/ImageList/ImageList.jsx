import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Chip, Card, CardHeader, CardMedia, CardActions, IconButton, Button} from '@material-ui/core';
import {ArrowBack, ArrowForward} from '@material-ui/icons';
import TagList from '../TagList/TagList';

class ImageList extends Component{

	render(){
		//pull out the tags key from our image object to display tag_id's associated with each image
		let tagsToShow;
		if(this.props.image.tags.length > 0){
			tagsToShow = (<p>{this.props.image.tags}</p>)
		}
		return(
			<>
			<Card className="imageCard">
				<CardHeader/>
				<CardMedia component="img"
					image={this.props.image.path}
					title={this.props.image.title}/>
				<CardActions disableActionSpacing>

					<Button onClick={() => this.props.dispatch({type: 'PREVIOUS_PAGE'})}
						variant="contained" color="primary" >Previous Image</Button>

					<Button onClick={() => this.props.dispatch({type: 'NEXT_PAGE'})}
						variant="contained" color="primary" >Next Image</Button>
				</CardActions>
			</Card>
				{tagsToShow}
			<TagList />
			</>
		)
	}
}

const mapReduxStateToProps = (reduxState) => ({
	images: reduxState.images,
	tags: reduxState.tags,
	indexCount: reduxState.indexCount
});

export default connect(mapReduxStateToProps)(ImageList);