/**Created by Dylan*/
const randomize = require('randomatic');

class RandomUtil {
    static getRandomString(length) {
        length = (length && typeof length === 'number' && length > 0) ? length : 5;
        return randomize('Aa', length);
    }

    static getRandomDigit(length) {
        length = (length && typeof length === 'number' && length > 0) ? length : 5;
        return randomize('0', length);
    }

    static getRandomMixString(length) {
        length = (length && typeof length === 'number' && length > 0) ? length : 5;
        return randomize('Aa0', length);
    }

    static getRamdomPhone(length) {
        length = (length && typeof length === 'number' && length > 0) ? length : 10;
        return randomize('0', length);
    }

    static getRandomEmailAddress(digitLength, stringLength) {
        stringLength = (stringLength && typeof stringLength === 'number' && stringLength > 0) ? stringLength : 5;
        digitLength = (digitLength && typeof digitLength === 'number' && digitLength > 0) ? digitLength : 10;
        return `${randomize('0', digitLength)}${randomize('Aa', stringLength)}@ehealthqa.com`
    }

    static getRandomItemInGivenArray(givenArray) {
        if (givenArray && typeof givenArray === "object" && givenArray.length !== undefined && givenArray.length > 0) {
            let chars = "";
            for (let i = 0; i < givenArray.length; i++) {
                chars += i;
            }
            let randomIndex = parseInt(randomize('?', 1, {chars: chars}));
            return givenArray[randomIndex];
        }
        throw "Please input valid array!";
    }
}

module.exports = RandomUtil;