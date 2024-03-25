const Product = require("../models/Product");
const router = require("express").Router();
import { Request, Response } from "express";

//Get all products
router.get("/", async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json("Error getting products");
  }
});

//Get a single product
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json("Error getting product");
  }
});

//Add a product
router.post("/", async (req: Request, res: Response) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    console.log(err);
    res.status(500).json("Error saving product");
  }
});