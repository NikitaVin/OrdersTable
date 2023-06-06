const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");
const app = express();
const config = require("./webpack.config.js");
const compiler = webpack(config);
const {getFullOrders, GetOrdersByParams, update, deleteOne} = require('./controllers/orders')


const DB_URL = "mongodb://localhost:27017";

app.use(express.json());
app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
);
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });
app.use(express.static("static"));
app.use(fileUpload());


app.post('/fullOrders', getFullOrders)
app.post("/orders", GetOrdersByParams);
app.patch('/orders/:id', update)
app.delete('/orders/:id', deleteOne)

async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(3001, () => {
            console.log("DevServer 3001");
        });
    } catch (error) {
        console.log(error);
    }
}
startApp();
