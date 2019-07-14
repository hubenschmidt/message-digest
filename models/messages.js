const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const messageSchema = new Schema({
    _id: {
        type: String,
    },
    _id_t: {
        type: Array
    },
    message: {
        type: String
    },
}, {
    toObject: {
        virtuals: true,
    },
    toJSON: {
        transform(doc, ret) {
            delete ret._id
        },
        virtuals: true,
    },
    id: false,
    versionKey: false,
});

messageSchema
    .virtual('digest')
    .get(function () {
        return this._id;
    });

const Message = mongoose.model('messages', messageSchema)

module.exports = Message;