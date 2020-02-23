const mongoose = require('mongoose');

const ArticleSchema = new Schema({
    articleTitle: String,
    articleUrl: String,
    tweetCount: Number
 });

 module.exports = mongoose.model('Article', new ArticleSchema(), 'Article');