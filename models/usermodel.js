const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("user", userschema);