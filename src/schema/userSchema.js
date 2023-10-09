const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

const userSchema = mongoose.Schema({
        username: {
            type: String
        },
        email: {
            type: String
        },
        password: {
            type: String
        },
        name: {
            type: String
        },
        dob: {
            type: Date
        },
        gender: {
            type: String
        },
        nationality: {
            type: String
        },
        phone: {
            type: Number
        }
    }, {
        timestamps: true
    }

);

const user = mongoose.model('user', userSchema);
module.exports = user;