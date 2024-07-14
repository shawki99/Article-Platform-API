const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tagController');

router.get('/most-visited', tagController.getMostVisitedTags);

module.exports = router;
