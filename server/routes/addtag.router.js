const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// POST - add tag to an image
router.post('/', (req, res) => {
	console.log('LOOK HERE POST req.body.imgId:', req.body.imageId)
	console.log('LOOK HERE POST req.body.tagId:', req.body.tagId)
	const queryText = `INSERT INTO "images_tag" ("image_id", "tag_id") VALUES ($1, $2);`;
	// const queryValues = [req.body.img, req.body.tag];
	pool.query(queryText, [req.body.imageId, req.body.tagId])
		.then(() => { res.sendStatus(200); })
		.catch((error) => {
			console.log('error in favorite query:', error);
			res.sendStatus(500);
		});
});

module.exports = router;