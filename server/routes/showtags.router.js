const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all tags associated with an image
router.get('/', (req, res) => {
	const queryText = `SELECT "tags".name, "tags".id FROM "tags"
JOIN "images_tag" ON "images_tag".tag_id = "tags".id
WHERE "images_tag".image_id = $1;`;
	console.log('req.params:', req.params)
	console.log('req.query.id:', req.query.id)
	const queryParams = req.query.id
	pool.query(queryText, [queryParams])
		.then((result) => {
			console.log('result.rows:', result.rows)
			res.send(result.rows)
		}).catch((error) => {
			console.log('error in get:', error);
		});
});//end GET

module.exports = router;