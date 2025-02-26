const mongoose = require("mongoose");

const QrCodeSchema = new mongoose.Schema({
    qrImage: { type: String },
    userID:{type:mongoose.Schema.Types.ObjectId, ref: 'user'},
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("QrCode", QrCodeSchema);