const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

// Route includes
const imagesRouter = require('./routes/images.router');
const tagsRouter = require('./routes/tags.router');
const addTagRouter = require('./routes/addtag.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/api/images', imagesRouter);
app.use('/api/tags', tagsRouter);
app.use('/api/images/addtag', addTagRouter);


/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});