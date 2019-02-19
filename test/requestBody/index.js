/**Created by Dylan*/
const dirPath = path.join(__dirname, env);
module.exports = (function buildRequestBodyObject(requestbody, dirPath) {
    fs.readdirSync(dirPath).forEach(function (file) {
        if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
            buildRequestBodyObject(requestbody, path.join(dirPath, file));
        } else {
            let fileName = path.basename(file, '.json');
            let requireFile = require(path.join(dirPath, file));
            if (file && !(fileName in requestbody) && (path.extname(file) == '.json') && fileName != 'index') {
                requestbody[fileName] = requireFile;
            }
        }
    });
    return requestbody;
})({}, dirPath);