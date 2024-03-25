import authRouter from "./routes/auth.routes";

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()
const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGODB_URI, {
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err: any) => {
  console.error('Failed to connect to MongoDB:', err);
});

app.use(express.json());
app.use("/api/auth", authRouter);
 


app.listen(port, () => {
  console.log('Server started successfully. Connected to MongoDB.');
});