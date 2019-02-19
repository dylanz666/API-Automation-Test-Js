/**Created by Dylan*/
module.exports = (function buildApiPathObject(paths, dirPath) {
    fs.readdirSync(dirPath).forEach(function (file) {
        if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
            buildApiPathObject(paths, path.join(dirPath, file));
        } else {
            let fileName = path.basename(file, '.js');
            let requireFile = require(path.join(dirPath, file));
            if (file && !(fileName in paths) && (path.extname(file) == '.js') && fileName != 'index') {
                paths[fileName] = requireFile;
            }
        }
    });
    return paths;
})({}, __dirname);