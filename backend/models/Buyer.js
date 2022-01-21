const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BuyerSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
		type: String,
		required: true,
        unique: true        
	},
	email: {
		type: String,
		required: true,
        unique: true
	},
    cnumber: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    batch: {
        type: String,
        required: true
    },
	date:{
		type: Date,
		required: false
	}
});

module.exports = Buyer = mongoose.model("Buyers", BuyerSchema);