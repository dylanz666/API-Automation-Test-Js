/**Created by Dylan*/
module.exports = function () {
    let sqlObject = {};
    let dbTablePath = path.join(__dirname);
    fs.readdirSync(dbTablePath).forEach(function (f) {
        if (f !== 'index.js' && path.extname(f) === '.js') {
            let fileName = path.basename(f, '.js');
            let dbTableObj = require(path.join(dbTablePath, f));
            for (let sqlName in dbTableObj) {
                if (fileName && fileName.length && !(fileName in sqlObject) && dbTableObj) {
                    sqlObject[sqlName] = dbTableObj[sqlName];
                }
            }
        }
    });
    return sqlObject;
}();