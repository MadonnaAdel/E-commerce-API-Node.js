const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/orders");

const app = express();
dotenv.config();

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/ECommerce")
  .then(() => {
    console.log("connected to mongo db ECommerce");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.listen(3330, () => {
  console.log("Server is running on port 3330");
});
