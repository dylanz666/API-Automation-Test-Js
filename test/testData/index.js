/**Created by Dylan*/
const dirPath = path.join(__dirname, env);
module.exports = (function buildTestDataObject(data, dirPath) {
    fs.readdirSync(dirPath).forEach(function (file) {
        if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
            buildTestDataObject(data, path.join(dirPath, file));
        } else {
            let fileName = path.basename(file, '.js');
            let requireFile = require(path.join(dirPath, file));
            if (file && !(fileName in data) && (path.extname(file) == '.js') && fileName != 'index') {
                data[fileName] = requireFile;
            }
        }
    });
    return data;
})({}, dirPath);