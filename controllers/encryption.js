'use strict';

const crypto = require('crypto');
require('dotenv').config();

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY
console.log(ENCRYPTION_KEY)
const IV_LENGTH = 16;

module.exports = {
    encrypt: function(message) {
            let iv = crypto.randomBytes(IV_LENGTH);
            let hash = crypto.createHash('sha256', Buffer.from(ENCRYPTION_KEY), iv)
                .update(message)
                .digest('hex');
            return iv.toString('hex') + ':' + hash.toString('hex');
        }
    }

