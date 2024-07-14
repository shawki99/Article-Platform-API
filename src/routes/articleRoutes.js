const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, articleController.create);
router.get('/', articleController.getAll);
router.patch('/view/:id', articleController.incrementViews);
router.patch('/like/:id', articleController.like);

module.exports = router;
