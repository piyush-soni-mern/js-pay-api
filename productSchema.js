const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    price: Number,
    discount_percent: Number,
})

module.exports = mongoose.model("product",ProductSchema);