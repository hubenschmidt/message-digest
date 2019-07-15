'use strict';

const crypto = require('crypto');
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY
const IV_LENGTH = 16;

module.exports = {
    hash: function(message) {
            let iv = crypto.randomBytes(IV_LENGTH);
            let hash = crypto.createHash('sha256', Buffer.from(SECRET_KEY), iv)
                .update(message)
                .digest('hex');
            return iv.toString('hex') + ':' + hash.toString('hex');
        }
    }

