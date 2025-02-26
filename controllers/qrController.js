const QRCode = require("qrcode");
const QrCodeModel = require("../models/QrCode");
const user = require("../models/usermodel");

exports.getHomePage = async (req, res) => {

    var data = await QrCodeModel.find().populate('userID');

    console.log(data);
    

    res.render("index", {data,qrImage: null});
        
    
}

exports.generateQRCode = async (req, res) => {
    try {
        

        var userData = await user.create(req.body);

        var userID = userData.id;
        var Deletedata = "https://qrcodenodejs.onrender.com/delete/"+userData.id;
        

        // Generate QR Code as a Data URL
        const qrImage = await QRCode.toDataURL(Deletedata);

        // Save QR Code to MongoDB
        const qrCode = new QrCodeModel({ qrImage , userID });
        await qrCode.save();

        res.redirect("/");

    } catch (error) {
        res.status(500).send("Server Error");
    }
};

exports.DeleteQrCode = async (req, res) => {
    var id = req.params.id;
    await user.findByIdAndDelete(id);
    res.status(200).json({
        status:"delete"
    })
}