const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    _id: { 
        type: String
    },
    _id_t: { 
        type: Array 
    },
    message: { 
        type: String 
    },
});

const Message = mongoose.model('messages', messageSchema)

module.exports = Message;