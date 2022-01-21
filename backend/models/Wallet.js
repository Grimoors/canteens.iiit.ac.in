const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const WalletSchema= new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    uid: {
        type: String,
        required: true,
        unique: true
    },
    balance: {
        type: Number,
        required: true,
    }
});

module.exports = Wallet = mongoose.model("Wallet",WalletSchema);