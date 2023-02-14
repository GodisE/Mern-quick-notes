const mongoose = require("mongoose")
const Schema = mongoose.Schema


const noteSchema = new Schema ({

    text: {
        type: String,
        required: true
    },
    owner : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},
{
    timestamps: true
})

const Note = mongoose.model("Note", noteSchema)

module.exports = Note