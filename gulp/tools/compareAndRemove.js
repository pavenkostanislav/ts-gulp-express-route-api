const fs = require('fs');
const retry = require('./retry');
const removeDirRecursive = require('./removeDirRecursive')
const _ = require('lodash');
const path = require('path');

function isDirectory(path) {
    return fs.lstatSync(path).isDirectory();
}

function checkAndRemoveFile(file, workingDir, referenceFiles, referenceDir) {
    const workingPath = path.join(workingDir, file);
    const referencePath = path.join(referenceDir, file);
    if (isDirectory(workingPath)) {
        return compareAndRemoveRecursive(workingPath, referencePath);
    }    

    const refIndex = referenceFiles.indexOf(file);
    if (refIndex === -1 || isDirectory(referencePath)){
        console.log('unlink ' + workingPath);
        return fs.unlinkSync(workingPath);
    }
}

function compareFiles(workingDir, referenceDir) {
    const workingFiles = fs.readdirSync(workingDir);
    const referenceFiles = fs.readdirSync(referenceDir);
    workingFiles.forEach(file => checkAndRemoveFile(file, workingDir, referenceFiles, referenceDir));
}

function compareAndRemoveRecursive(workingDir, referenceDir) {
    if (fs.existsSync(referenceDir) && isDirectory(referenceDir)) {
        compareFiles(workingDir, referenceDir);
    } else {
        console.log('removeDirRecursive ' + workingDir);
        removeDirRecursive(workingDir);
    }
}

function compareAndRemove(workingDir, referenceDir) {
    if (!fs.existsSync(workingDir)) {
        return;
    }

    compareAndRemoveRecursive(workingDir, referenceDir);
}

module.exports = compareAndRemove;
