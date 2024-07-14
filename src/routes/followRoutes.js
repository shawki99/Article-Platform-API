const express = require('express');
const router = express.Router();
const followController = require('../controllers/followController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/tag', authMiddleware, followController.followTag);
router.post('/publisher', authMiddleware, followController.followPublisher);
router.post('/unfollow/tag', authMiddleware, followController.unfollowTag);
router.post('/unfollow/publisher', authMiddleware, followController.unfollowPublisher);

module.exports = router;