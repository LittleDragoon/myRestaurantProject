const express = require("express");
const router = express.Router();
const {
    createOrder,
    getOrder,
    getOrderId,
    deleteOrder,

} = require("../controller/productControllers");

router.post("/order", createOrder);
router.get("/order", getOrder);
router.get("/order/:id", getOrderId);
router.delete("/order/:id", deleteOrder);

module.exports = router;