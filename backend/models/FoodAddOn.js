const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const FoodAddOnSchema= new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: image,
        required: false
    },
    price: {
        type: Number,
        required:true
    },
    rating: {
        type: Number,
        required: false,
        default: 0
    },
    nonVeg:{
        type: Boolean,
        required:true,
        default: false
    },
    tags:{
        type: Array,
        required: false
    }
});