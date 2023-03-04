const copydir = require('copy-dir');
const fs = require('fs');
const path = require('path');
function copyDir(from, to, options) {
    copydir(from, to, options);
}

function copyFile(from, to) {
    const buffer = fs.readFileSync(from);
    const parentPath = path.dirname(to);
    if (!fs.existsSync(parentPath)) {
        // 递归创建目录
        fs.mkdirSync(parentPath, { recursive: true })
    }
    fs.writeFileSync(to, buffer);
}
module.exports = { copyDir, copyFile }