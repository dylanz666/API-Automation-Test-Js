/**Created by Dylan*/
const crypto = require('crypto');

class DesUtil {
    static aes256EcbEncrypt(text, key) {
        let cip = crypto.createCipher('aes-256-ecb', key);
        let encryptedText = cip.update(text, 'utf8', 'hex');
        encryptedText += cip.final('hex');
        return encryptedText;
    }

    static aes256EcbDecrypt(text, key) {
        let decipher = crypto.createDecipher('aes-256-ecb', key);
        let dec = decipher.update(text, 'hex', 'utf8');
        dec += decipher.final('utf8');
        return dec;
    }

    static base64Encode(text) {
        let buffer = new Buffer(text);
        return buffer.toString('base64');
    }

    static base64Decode(text) {
        let buffer = new Buffer(text, 'base64');
        return buffer.toString();
    }
}

module.exports = DesUtil;