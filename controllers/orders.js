const Order = require("../models/orders");

const createOrder = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const order = await Order.create({
      product: productId,
      quantity,
      buyer: req.userId,
    });
    res.status(201).json({ order });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getOneOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = await Order.findById(orderId);
    if (!order) {
      return res
        .status(404)
        .json({
          message: "SORRY!! This Order is not found,, check the orderID",
        });
    }
    res.json({ order });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json({ orders });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const updates = req.body;
    const options = { new: true };
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      updates,
      options
    );
    if (!updatedOrder) {
      return res
        .status(404)
        .json({
          message: "SORRY!! This Order is not found,, check the orderID",
        });
    }
    res.json({ order: updatedOrder });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const deletedOrder = await Order.findByIdAndDelete(orderId);
    if (!deletedOrder) {
      return res
        .status(404)
        .json({
          message: "SORRY!! This Order is not found,, check the orderID",
        });
    }
    res.json({ message: "DONE! Order deleted successfully ^_^" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createOrder,
  getOneOrder,
  updateOrder,
  deleteOrder,
  getAllOrders,
};
