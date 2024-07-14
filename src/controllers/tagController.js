const tagService = require('../services/tagService');

const getMostVisitedTags = async (req, res) => {
  try {
    const tags = await tagService.getMostVisitedTags();
    res.json(tags);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getMostVisitedTags
};
