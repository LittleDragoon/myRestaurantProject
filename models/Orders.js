const mongoose = require("mongoose");

const Orders = new mongoose.Schema({
    totalqty: {
        type: Number,
        required: true
    },
    totalprice: {
        type: Number,
        required: true
    },
    order: [{
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        qty: {
            type: Number,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    }]
    
})


const Order = mongoose.model('Orders', Orders);
module.exports = Order;
