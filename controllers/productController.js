const productService = require("../services/productService");

const productController = {
  get: async (req, res) => {
    try {
      const products = await productService.get();
      res.status(200).send({
        total: products.length,
        success: true,
        data: products,
      });
    } catch (error) {
      res.send({ success: false, message: error.message, stack: error.stack });
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const products = await productService.getById(id);
      res.status(200).send({
        success: true,
        data: products,
      });
    } catch (error) {
      res
        .status(400)
        .send({ success: false, message: error.message, stack: error.stack });
    }
  },
  create: async (req, res) => {
    try {
      const product = await productService.create(req);
      res.status(201).send({
        sucess: true,
        message: "Product created successfully",
        data: product,
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: error.message,
        stack: error.stack,
      });
    }
  },
  update: async (req, res) => {
    try {
      const product = await productService.update(req);
      res.status(200).send({
        sucess: true,
        message: "Product updated successfully",
        data: product,
      });
    } catch (error) {
      res
        .status(400)
        .send({ success: false, message: error.message, stack: error.stack });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await productService.delete(id);
      res.status(200).send({
        sucess: true,
        message: "Product deleted successfully",
      });
    } catch (error) {
      res
        .status(400)
        .send({ success: false, message: error.message, stack: error.stack });
    }
  },
};

module.exports = productController;
