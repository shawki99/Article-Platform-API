const User = require('../models/User');
const Article = require('../models/article');

const getUserFeed = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }

  const publisherArticles = await Article.find({ 
    'author': { $in: user.followedPublishers }
  }).populate('author', 'username');

  const tagArticles = await Article.find({ 
    'tags': { $in: user.followedTags }
  }).populate('author', 'username');

  const combinedArticles = [...publisherArticles, ...tagArticles];
  const articleMap = new Map();
  combinedArticles.forEach(article => {
    if (!articleMap.has(article.id)) {
      articleMap.set(article.id, article);
    }
  });

  return Array.from(articleMap.values());
};

module.exports = {
  getUserFeed
};
