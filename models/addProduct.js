const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    category: String,
    price: Number
});

module.exports = mongoose.model('ProductSchema', productSchema);
