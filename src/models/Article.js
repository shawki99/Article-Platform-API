const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagSchema = new Schema({
    name: String,
    views: { type: Number, default: 0 }
});

const articleSchema = new Schema({
    title: { type: String, required: true },
    summary: { type: String, required: true },
    body: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    tags: [tagSchema],
    viewers: { type: Number, default: 0 },
    likes: { type: Number, default: 0 }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;