const m = require('../models');
const safe = require('./encryption')

module.exports = {
    create: create,
    read: read
}

function create(req, res) {
    let message = req.body.message;
    let hash = safe.encrypt(message);
    let signature = hash.substr(33, 81);
    let _id_transaction = hash.substr(0, 31);

    m.Message.findByIdAndUpdate({
            _id: signature
        }, {
            $push: {
                _id_t: {
                    $each: [_id_transaction]
                }
            },
            message: message
        },
        {
            new: true,
            upsert: true,
            select: '-_id_t -message'
        }
        ,)
        .exec()
        .then(doc => res.json(doc))
        .catch(err => res.json(err))
}

function read(req, res) {
    let key = req.params.hash
    m.Message.findById({
            _id: key
        },
        'message -_id',
        function (err, doc) {
            if (!doc) {
                res.status(404).json()
            } else {
                res.json(doc);
            }
        }
    )
}