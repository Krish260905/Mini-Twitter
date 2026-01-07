const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    username: {
        type :String,
        required : true},
    post: {
        type :String,
        required : true},
    created_at: {
        type: Date,
    },
    updated_at: {
        type: Date,
    }
});

const tweets = mongoose.model('tweets', tweetSchema);

module.exports = tweets;