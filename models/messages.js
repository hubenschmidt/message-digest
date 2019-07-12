const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    _id: { 
        type: Schema.Types.ObjectId,
        required: true 
    },
    message: { type: String },
    // hash: { type: String }
});

const Message = mongoose.model('messages', messageSchema)

module.exports = Message;