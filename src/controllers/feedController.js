const feedService = require('../services/feedService');

const getFeed = async (req, res) => {
  try {
    const userId = req.user.id;
    const articles = await feedService.getUserFeed(userId);
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getFeed
};
