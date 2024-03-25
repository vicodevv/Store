var express = require('express');
var app = express();
var mongoose = require('mongoose');
var dotenv = require('dotenv');
var authRoute = require('./routes/auth.routes');
var userRoute = require('./routes/user.routes');
var port = process.env.PORT || 3000;
dotenv.config();
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(console.log('Connected to MongoDB'))
    .catch(function (err) { return console.log(err); });
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.listen(port, function () {
    console.log('Server started successfully. Connected to MongoDB.');
});
