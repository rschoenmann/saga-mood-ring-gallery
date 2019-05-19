import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// maybe setting default image info will help?
const imageInfo = [
    {id: '', title: '', path: '', tags: []},
];

// keep track of our index position in images array based on button clicks
const indexCount = (state=0, action) => {
    switch(action.type){
        case 'NEXT_PAGE':
			return state +1;
		case 'PREVIOUS_PAGE':
			return state -1;
		default:
			return state;
    }
};//end indexCount

// Used to store images returned from the server
const images = (state = imageInfo, action) => {
    switch (action.type) {
        case 'SET_IMAGES':
            return action.payload;
        default:
            return state;
    }
};//end images

// Used to store the images tags (e.g. 'Inspirational', 'Calming', 'Energy', etc.)
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
};//end tags

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        images,
        tags,
		indexCount
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_IMAGES', fetchImages)
    yield takeEvery('FETCH_TAGS', fetchTags)
    yield takeEvery('ADD_TAG', addTag)
};//end rootSaga

function* addTag(action){
    try{
        console.log('addTag action.img:', action.img)
        console.log('addTag action.tag:', action.tag)
        yield axios.post('/api/images/addtag', {img: action.img, tag: action.tag})
    }catch(error){
        console.log('error in addTag post:', error)
    }
}

function* fetchTags(){
    const allTheTags = yield axios.get('/api/tags')
    yield put({type: 'SET_TAGS', payload: allTheTags.data})
};//end fetchTags

function* fetchImages(){
    try{
        const allTheImages = yield axios.get('/api/images');
        console.log('allTheImages.data:', allTheImages.data)
        yield put({type: 'SET_IMAGES', payload: allTheImages.data})
    }catch(error){
        console.log('error in get images:', error)
    }
};//end fetchImages


// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
