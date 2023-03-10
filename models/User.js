const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    fname: {
        type: String,
        required: true,
    },

    lname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    profileImageURL: {
        type: String,
        default: ""
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('user', UserSchema);

module.exports = User;