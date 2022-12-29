const mongoose = require("mongoose")

const schema = mongoose.Schema({
    ProductInitail:Number,
    ProductName:String,
    ProductColour:String
});

module.exports = mongoose.model("ProductDetails",schema,"ProductDetails",)


