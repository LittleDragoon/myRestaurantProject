const Product = require("../models/Product");
const Orders = require("../models/Orders");

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

module.exports = {
    getProducts,
    getProductById,
    createOrder,
    getOrder
};