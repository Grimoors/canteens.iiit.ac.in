const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const VendorSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
	mname: {
        type: String,
        required: true
    },
    name: {
		type: String,
		required: true,
        unique: true        
	},
	memail: {
		type: String,
		required: true,
        unique: true
	},
    cnumber: {
        type: String,
        required: true
    },
    copentime: {
        type: String,
        required: true
    },
    cclosetime: {
        type: String,
        required: true
    },
	date:{
		type: Date,
		required: false
	}
});

module.exports = Vendor = mongoose.model("vendor", VendorSchema);