
//npm run server
//require c'est comme un import 

const express = require("express");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

const connectDB = require("./config/db");
require("dotenv").config();

var cors = require("cors");

connectDB();
const app = express();


app.use(cors())
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());



app.get("/", (req, res) => {

    res.send("You can check the link /api/products   or  /order");
})

// Commentaires : app.use(Router)



app.use("/api/products", productRoutes);
app.use("/", orderRoutes);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));