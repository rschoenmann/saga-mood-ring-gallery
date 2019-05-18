const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// POST - add tag to an image
router.post('/', (req, res) => {
	const postTag = req.body
	console.log('POST req.body:', req.params)
	// const queryText;
	//const queryValues = [];

	// pool.query(queryText, queryValues)
	// 	.then(() => { res.sendStatus(200); })
	// 	.catch((error) => {
	// 		console.log('error in favorite query:', error);
	// 		res.sendStatus(500);
	// 	});
});

module.exports = router;