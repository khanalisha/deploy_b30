const mongoose = require("mongoose")
const NoteScheme = mongoose.Schema({
    title:String,
    body: String,
    username: String,
    userID:String,

    
})
const NoteModel = mongoose.model("note", NoteScheme)
module.exports = {
    NoteModel
}