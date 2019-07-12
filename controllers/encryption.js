'use strict';

const crypto = require('crypto');

// const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY // Must be 256 bits (32 characters)
const ENCRYPTION_KEY = 'kxnFEzHfg?5MW&y_#vS?Bt7SfNyHnZCC'
const IV_LENGTH = 16; // For AES, this is always 16

module.exports = {

encrypt: function(message) {
        let iv = crypto.randomBytes(IV_LENGTH);
        let hash = crypto.createHmac('sha256', Buffer.from(ENCRYPTION_KEY), iv)
            .update(message)
            .digest('hex');
        return iv.toString('hex') + ':' + hash.toString('hex');
    },

    decrypt: function(hash){
        
    }
}




// function decrypt(text) {
//     let textParts = text.split(':');
//     let iv = Buffer.from(textParts.shift(), 'hex');
//     let encryptedText = Buffer.from(textParts.join(':'), 'hex');
//     let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
//     let decrypted = decipher.update(encryptedText);
//     decrypted = Buffer.concat([decrypted, decipher.final()]);

//     return decrypted.toString();
// }
// console.log(decrypt('b40071765045b730d4211436dfa5530a:4d8ee54b6de49bfe8c122106b22046b3601f8a3d0466542dc220aae6f559fa68'))

