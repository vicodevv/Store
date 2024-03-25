import { Request, Response } from "express";

const router = require("express").Router();
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");
const user = require("../models/User");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const saltRounds = 10

// Register
router.post('/register', async (req: Request, res: Response) => {
    const { firstname, lastname, country, email, password } = req.body
    try {
        bcrypt.hash(password, saltRounds, async (err: any, hash: any) => {
          if (err) {
            console.log(err)
            res.json('There was an error hashing password.')
          } 
    
          const newUser = new user({
            firstname,
            lastname,
            country,
            email,
            password: hash
          })
    
          await newUser.save()
          res.status(201).json(newUser)
        })
      } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Something went wrong.' })
      }
    })
//Login
router.post('/login', async (req: Request, res: Response) => {
    const { email, password } = req.body
    try {
        User.findOne({email}, (err: any, foundUser: { password: any; _id: any; email: any; }) => {
            if(err){
                console.log(err)
                res.status(401).json({message: 'Email or password does not match'})
            }
            else{
                bcrypt.compare(password, foundUser.password, (err: any, result: any) => {
                    const jwtToken = jwt.sign(
                        {id: foundUser._id, email: foundUser.email},
                        process.env.SECRET_KEY
                    )
                    result && res.json({
                        message: 'Welcome to TicketAPI',
                        token: jwtToken
                    })
                })
            }
        })
    } catch (err) {
        res.status(401).json({ error: 'Something went wrong.' });
    }
})

module.exports = router;