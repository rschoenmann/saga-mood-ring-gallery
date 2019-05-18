const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all images in database
router.get('/', (req, res) => {
	const queryText = `SELECT "images".id, "images".title, "images".path, array_agg("images_tag".tag_id) as tags FROM "images"
		FULL JOIN "images_tag" ON "images_tag".image_id = "images".id
		GROUP BY "images".id ORDER BY "images".id;`;
	pool.query(queryText)
	.then((result) => {
		console.log('result.rows:', result.rows)
		res.send(result.rows)
	}).catch((error) => {
		console.log('error in get:', error );
	});
});//end GET

module.exports = router;