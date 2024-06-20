const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    college: {
        type: String
    },
    payment: {
        type: String,
        required: true
    },
    step: {
        type: String,
        default: "REGISTERED"
    },
    imageUrl: {
        type: String
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;