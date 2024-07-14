const articleService = require('../services/articleService');

const create = async (req, res) => {
  try {
    const articleData = { ...req.body, author: req.user.id };
    const article = await articleService.createArticle(articleData);
    res.status(201).json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const articles = await articleService.getArticles();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const incrementViews = async (req, res) => {
  try {
    const viewers = await articleService.incrementViewers(req.params.id);
    res.json({ viewers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const like = async (req, res) => {
  try {
    const likes = await articleService.likeArticle(req.params.id);
    res.json({ likes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  create,
  getAll,
  incrementViews,
  like
};
