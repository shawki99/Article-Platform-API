const tagSchema = new Schema({
    name: { type: String, required: true, unique: true },
    relatedArticles: [{ type: Schema.Types.ObjectId, ref: 'Article' }]
});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;
