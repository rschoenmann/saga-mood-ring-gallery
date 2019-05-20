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

// Used to store images returned from the server
const images = (state = [], action) => {
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

const tagsAndImages = (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL_THINGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        images,
        tags,
        tagsAndImages
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_IMAGES', fetchImages)
    yield takeEvery('FETCH_TAGS', fetchTags)
    yield takeEvery('ADD_TAG', addTag)
    yield takeEvery('DISPLAY_TAG', displayTag)
};//end rootSaga

function* displayTag(action){
    try{
        const displayToRender = yield axios.get(`api/showtags?id=${action.payload.imageId}`)
        console.log('displayToRender.data:', displayToRender.data)
        console.log('displayTag action.payload:', action.payload)
        yield put({type: 'GET_ALL_THINGS', payload: displayToRender.data})
    }catch(error){
        console.log('error in displayTag:', error)
    }
}

function* addTag(action){
    try{
        console.log('addTag action.payload:', action.payload)
        console.log('addTag action.payload.tagId:', action.payload.tagId)
        yield axios.post('/api/images/addtag', action.payload)
        // after we send post, need to update our reduxState with new tag info so we call another get
        yield put({type: 'DISPLAY_TAG', payload: action.payload})
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
