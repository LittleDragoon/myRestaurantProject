
//npm run server
//require c'est comme un import 

const express = require("express");
const productRoutes = require("./routes/productRoutes");
const PostRoutes = require("./routes/PostRoutes");

const connectDB = require("./config/db");
require("dotenv").config();

connectDB();
const app = express();

var cors = require('cors')

app.use(cors())
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());



app.get("/", (req, res) => {

    res.send("Api is running");
})

// Commentaires : app.use(Router)



app.use("/api/products", productRoutes);
app.use("/order", PostRoutes);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));