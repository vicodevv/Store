const User = require("../models/User");
const router = require("express").Router();
import { Request, Response } from "express";


//Get all users
router.get("/", async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json("Error getting users");
  }
});

//Get a single user
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json("Error getting user");
  }
});
module.exports = router;