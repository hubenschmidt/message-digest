const m = require('../models');
const safe = require('./encryption')

 // the query will return immedately after the first match.
        //It is significantly faster to use find() + limit() because findOne()
        // will always read + return the document if it exists. find()
        // just returns a cursor (or not) and only reads the data
        // if you iterate through the cursor.

module.exports = {
    findOneByHash: findOneByHash,
    create: create
}


// module.exports = {
        // findOneByHash: async function(req, res, hash) {
        async function findOneByHash(req, res, hash){
            // console.log('works!')
            return new Promise((resolve, reject) => {
                // let message = req.body.message;
                // let hash = safe.encrypt(message);
                // find by hash:signature substring
                // m.Message.findById({id: hash.substr(33,81)}).limit(1),
                (err, data) => {
                    if (err) reject(err);
                    resolve(data);
                };
            })
        }

        // create: async function(req, res) {
            async function create(req, res){
            let message = req.body.message;
            let hash = safe.encrypt(message);
            let signature = hash.substr(33,81);
            let _id_transaction = hash.substr(0, 31);
            // console.log(signature)

            m.Message.findById({_id: signature}, function (err, doc){
                if(!doc){

                    let document = {
                        _id: signature,
                        _id_transaction: _id_transaction,
                        message: message,
                    };

                    m.Message.create(document)
                        .then(doc => console.log(doc))
                        .catch(err => console.log(err))

                    // m.Message.findOneAndUpdate(
                    //     { _id: signature },
                    //     {
                    //         _id_transaction: id_transaction,
                    //         message: message
                    //     },
                    //     { upsert: true},
                    //     )
                    //     .then(dbModel => console.log(dbModel))
                }
            })
                // .then(dbModel
                    
             
                // .catch(err => console.log(err))


            // (err, data) => {
            //     if (err) {
            //         console.log(err)
            //     }
            //     console.log(data)
            // };

            

            // let exists = await findOneByHash(signature);
            // console.log(exists)
            // // let exists = await findOneByHash(hash);
            // if (exists){
            //     //update mongoDB by hash:signature
            //     m.Message.findOneAndUpdate({hash: hash.substr(17,81)})
            //         .then(result => res.json(result))
            // } else {
            //     //add to mongoDB
            //     const message = {
            //         _id: hash,
            //         message: message
            //     };
            // };
        }
    // }


