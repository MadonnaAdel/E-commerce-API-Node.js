const express = require("express");
const { createProduct, getTheSellerProducts,getOneProduct, editOneProduct, deleteProduct } = require("../controllers/products");
const router = express.Router();
const auth = require("../middleware/auth");

router.post("/", auth, createProduct);
router.get("/", auth, getTheSellerProducts);
router.get("/:id", getOneProduct);
router.put("/:id", auth, editOneProduct);
router.delete("/:id", auth, deleteProduct);

module.exports = router;
