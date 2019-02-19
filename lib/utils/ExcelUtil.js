/**Created by Dylan*/
const xlsx = require('node-xlsx').default;

class ExcelUtil {
    static async buildExcelFile(data, filePath) {
        let buffer = xlsx.build(data);
        fs.writeFileSync(filePath, buffer, function (error) {
            if (error) throw error;
        });
        console.log('Success to build Excel file.');
    }

    static buildUniqueFile(filePath) {
        //get buffer
        let buffer = fs.readFileSync(filePath);
        //buffer to string and to json
        let json = JSON.stringify(buffer);
        let parsedJson = JSON.parse(json);
        //add 3 random number to make batch file content unique
        parsedJson.data.push(randomUtil.getRandomDigit(3));
        parsedJson.data.push(randomUtil.getRandomDigit(3));
        parsedJson.data.push(randomUtil.getRandomDigit(3));
        //json to buffer
        let handledBuffer = new Buffer(parsedJson);
        //write file with new content
        fs.writeFileSync(filePath, handledBuffer);
    }

    static async getDataFromExcelFile(filePath) {
        let obj = xlsx.parse(filePath);
        console.log(JSON.stringify(obj));
        return JSON.stringify(obj);
    }
}

module.exports = ExcelUtil;