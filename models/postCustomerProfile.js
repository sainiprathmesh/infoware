const mongoose = require('mongoose');

const customerProfileSchema = mongoose.Schema({
    name: String,
    email: String,
    contact_no: Number,
    password: String,
    gender: String,
    dateOfBirth: String
});

module.exports = mongoose.model('CustomerProfileSchema', customerProfileSchema);
