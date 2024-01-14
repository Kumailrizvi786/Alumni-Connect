const mongoose = require("mongoose")

const AdminSchema = new mongoose.Schema({
    adminName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }

})

var Admin = mongoose.model("Admin",AdminSchema)
module.exports ={Admin}