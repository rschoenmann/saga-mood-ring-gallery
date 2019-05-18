const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all tags in database
router.get('/', (req, res) => {
	const queryText = `SELECT * FROM "tags" ORDER BY "id" ASC;`;
	pool.query(queryText)
		.then((result) => {
			console.log('result.rows:', result.rows)
			res.send(result.rows)
		}).catch((error) => {
			console.log('error in get:', error);
		});
});//end GET

module.exports = router;