const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    name: String,
    contact_no: Number,
    password: String,
    gender: String,
    selectedProfilePic: String,
    dateOfBirth: String
});

module.exports = mongoose.model('ProfileSchema', profileSchema);
