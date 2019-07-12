const m = require('../models');
const safe = require('./encryption')
 // the query will return immedately after the first match.
        //It is significantly faster to use find() + limit() because findOne()
        // will always read + return the document if it exists. find()
        // just returns a cursor (or not) and only reads the data
        // if you iterate through the cursor.

module.exports = {
        findOneByHash: async function(req, res, hash) {
            return new Promise((resolve, reject) => {
                let message = req.params.message;
                // let hash = safe.encrypt(message);
                //find by hash:signature substring
                m.Message.find({hash: hash.substr(17,81)}).limit(1),
                (err, data) => {
                    if (err) reject(err);
                    resolve(data);
                };
            })
        },

        create: async function(req, res) {
            let message = req.params.message;
            let hash = safe.encrypt(message);
            let exists = await findOneByHash(hash);
            if (exists){
                //update mongoDB by hash:signature
                m.Message.findOneAndUpdate({hash: hash.substr(17,81)})
                    .then(result => res.json(result))
            } else {
                //add to mongoDB
                const message = {
                    _id: hash,
                    message: message
                };
            };
        }
    }


