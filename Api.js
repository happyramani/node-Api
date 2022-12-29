const experss = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");
const ProductDetail = require("./model/Productdetail");

mongoose.connect("mongodb+srv://Happy:Happy@cluster0.bseqczm.mongodb.net/Products?retryWrites=true&w=majority").then(()=>{
    const app = experss();
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(cors());

    app.get('/',async (req,res)=>{
        const data = await ProductDetail.find();
        res.send(data);
    });

    app.get('/:id',async (req,res)=>{
        const data = await ProductDetail.findOne({ProductInitial:req.params.id});
        res.send(data);
    });

    app.post('/',async (req,res)=>{
        const pr = new ProductDetail();
        pr.ProductInitial = req.body.ProductInitial;
        pr.ProductName = req.body.ProductName;
        pr.Productcolour = req.body.Productcolour;
        const data = await pr.save();
        res.send(data);
    });

    app.put('/:id',async (req,res)=>{
        const data = await ProductDetail.findOne({ProductInitial:req.params.id});
        data.ProductName = req.body.ProductName;
        data.Productcolour = req.body.Productcolour;

        await data.save();
        res.send(data);
    });

    app.delete('/:id',async (req,res)=>{
        const data = await ProductDetail.deleteOne({ProductInitial:req.params.id});
        res.send(data);
    });

    app.listen(1090,()=>{
        console.log("Server started at @ 1090");
    })
});

