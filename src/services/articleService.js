const Article = require('../models/article');

const createArticle = async (articleData) => {
  const article = new Article(articleData);
  await article.save();
  return article;
};

const getArticles = async () => {
  return Article.find().populate('author', 'username');
};

const incrementViewers = async (articleId) => {
  const article = await Article.findById(articleId);
  article.viewers += 1;
  await article.save();
  return article.viewers;
};

const likeArticle = async (articleId) => {
  const article = await Article.findById(articleId);
  article.likes += 1;
  await article.save();
  return article.likes;
};

module.exports = {
  createArticle,
  getArticles,
  incrementViewers,
  likeArticle
};
