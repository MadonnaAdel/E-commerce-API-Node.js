const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const orderController = require("../controllers/orders");

router.post("/", auth, orderController.createOrder);
router.get("/:orderId", auth, orderController.getOneOrder);
router.get("/", auth, orderController.getAllOrders);
router.put("/:orderId", auth, orderController.updateOrder);
router.delete("/:orderId", auth, orderController.deleteOrder);

module.exports = router;
