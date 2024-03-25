const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth.routes');
const userRoute = require('./routes/user.routes');

const port = process.env.PORT || 3000
dotenv.config()

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
    }).then(console.log('Connected to MongoDB'))
    .catch((err: any) => console.log(err));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute)
 


app.listen(port, () => {
  console.log('Server started successfully. Connected to MongoDB.');
});