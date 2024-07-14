const Article = require('../models/article');

const getMostVisitedTags = async () => {
  return Article.aggregate([
    { $unwind: '$tags' }, 
    { $group: { _id: '$tags.name', totalViews: { $sum: '$tags.views' } } }, 
    { $sort: { totalViews: -1 } }, 
    { $limit: 10 } 
  ]);
};

module.exports = {
  getMostVisitedTags
};
