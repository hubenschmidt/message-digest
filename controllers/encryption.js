'use strict';

const crypto = require('crypto');

// const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY // Must be 256 bits (32 characters)
const ENCRYPTION_KEY = 'kxnFEzHfg?5MW&y_#vS?Bt7SfNyHnZCC'
const IV_LENGTH = 16; // For AES, this is always 16

module.exports = {

encrypt: function(message) {
        let iv = crypto.randomBytes(IV_LENGTH);
        let hash = crypto.createHash('sha256', Buffer.from(ENCRYPTION_KEY), iv)
            .update(message)
            .digest('hex');
        return iv.toString('hex') + ':' + hash.toString('hex');
    }
}

