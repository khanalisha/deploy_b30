const mongoose = require("mongoose")
const userScheme = mongoose.Schema({
    username:String,
    email: String,
    pass: String
    
})
const userModel = mongoose.model("user", userScheme)
module.exports = {
    userModel,
}