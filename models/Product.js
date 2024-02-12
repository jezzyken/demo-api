const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  price: {
    type: Number,
    min: 0,
    default: 0,
  },
  description: {
    type: String,
    maxlength: 255,
  },
  category: {
    type: String,
  },
  stockQuantity: {
    type: Number,
    default: 0,
    min: 0,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
