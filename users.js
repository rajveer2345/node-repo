const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    userID: {
        type: ObjectId,
        ref: 'user'
    }
});

module.exports = mongoose.model('users', userSchema);