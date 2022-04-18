
//npm run server
//require c'est comme un import 

require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");

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


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));