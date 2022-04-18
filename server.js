
//npm run server
//require c'est comme un import 

const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");
const path = require("path");
require("dotenv").config({ path: './env' });

connectDB();

const app = express();


const bodyParser = require('body-parser');


app.use(bodyParser.json());
// Commentaires : app.use(Router)
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "API running..." });
});

app.use("/api/products", productRoutes);

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
}
else {
    app.get("/", (req, res) => {
        res.send(process.env.NODE_ENV);

        res.send("Api running");
    })
}


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));