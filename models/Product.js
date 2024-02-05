const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  description: {
    type: String,
    maxlength: 255,
  },
  category: {
    type: String,
    enum: ["Electronics", "Clothing", "Books", "Other"],
  },
  stockQuantity: {
    type: Number,
    default: 0,
    min: 0,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
