const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const Product = require("./productSchema");
require('./mongoose_con');

const port = process.env.port || 5000;
const app = express();

app.use(cors());
app.use(express.json());

const db = mongoose.connection;

db.once("open",() => {
    console.log("DB Connected");
})

app.get("/:_id",(req,res)=>{
    Product.findOne(req.body,(err,data)=>{
        if(err)
            res.status(500).send(err);
        else
            res.status(201).send(data);
    })
})

app.post("/product",(req,res) => {
    Product.create(req.body,(err,data)=>{
        if(err)
            res.status(500).send(err);
        else
            res.status(201).send(data);
    });
})

app.listen(port,()=>{
    console.log(`Listening at http://localhost:${port}`);
})