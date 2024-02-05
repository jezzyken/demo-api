const Product = require("../models/Product");

const productService = {
  get: async () => {
    const products = await Product.find();
    return products;
  },
  getById: async (id) => {
    const products = await Product.findById(id);
    return products;
  },
  create: async (req) => {
    const product = new Product(req.body);
    product.save();
    return product;
  },
  update: async (req) => {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return updatedProduct;
  },
  delete: async (id) => {
    return await Product.findByIdAndDelete(id)
  },
};

module.exports = productService;
