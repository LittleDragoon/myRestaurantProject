const Product = require("../models/Product");
const Orders = require("../models/Orders");
const mongoose = require("mongoose");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const createOrder = async (req, res) => {
  const order = req.body;
  const newOrder = new Orders(order);
  console.log(newOrder);
  console.log(req.body);

  try {
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getOrder = async (req, res) => {
  try {
    const order = await Orders.find({});
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getOrderId = async (req, res) => {
  try {
    const orderID = await Orders.findById(req.params.id);

    res.json(orderID);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteOrder = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");

  await Orders.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully" });
};

module.exports = {
  getProducts,
  getProductById,
  createOrder,
  getOrderId,
  getOrder,
  deleteOrder,
};
