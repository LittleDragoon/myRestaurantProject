require("dotenv").config();


// Les différents produits
const productData = require("./data/products");
const connectDB = require("./config/db");

//Collection
const Product = require("./models/Product");
const CartItem = require("./models/CartItems");


connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});

        await Product.insertMany(productData[0]);
        await Product.insertMany(productData[1]);
        await Product.insertMany(productData[2]);
        await CartItem.insert([]);

        console.log("Data Import Success");

        process.exit();
    } catch (error) {
        console.error("Error with data import", error);
        process.exit(1);
    }
};

importData();