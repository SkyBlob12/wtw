const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    dateOfBirth: { type: Date },
    avatar: { type: String }
})

const userModel = mongoose.model('users', userSchema)
module.exports = userModel