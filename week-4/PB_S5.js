const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/productDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String
});

const Product = mongoose.model("Product", productSchema);


app.get("/products", async (req, res) => {
  try {
    const products = await Product.find(); 

    res.json({
      message: "All Products fetched successfully",
      data: products
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.post("/products", async (req, res) => {
  try {
    const { name, price, category } = req.body;

    const newProduct = new Product({
      name,
      price,
      category
    });

    const savedProduct = await newProduct.save();

    res.status(201).json({
      message: "Product saved successfully",
      data: savedProduct
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.put("/products/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } 
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({
      message: "Product updated successfully",
      data: updatedProduct
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.delete("/products/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({
      message: "Product deleted successfully",
      data: deletedProduct
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});