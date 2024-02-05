const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.get).post("/", productController.create);
router
  .get("/:id", productController.getById)
  .put("/:id", productController.update)
  .delete("/:id", productController.delete);

module.exports = router;
