
//npm run server
//require c'est comme un import 

const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");
const path = require("path");
require("dotenv").config();

connectDB();

const app = express();


const bodyParser = require('body-parser');

if (process.env.NODE_ENV === "production") {

    app.use(express.static(path.join(__dirname, "client/build")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
}
else {
    app.get("/", (req, res) => {


        res.send("Api running");
    })
}

app.use(bodyParser.json());
// Commentaires : app.use(Router)
app.use(express.json());



app.use("/api/products", productRoutes);





const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));