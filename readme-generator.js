/**
 * 该文件用于读取文件目录
 * 并写入顺序到README.md
 * 1.遍历文件夹信息
 * 2.写入到README.md
 */

var fs = require("fs");

// 异步读取整个文件夹的目录
fs.readdir('/project/FRONTEND-BASED', function (err, files) {
    if (err) {
        return console.error(err);
    }
    
    let fileList = []
    files.forEach(function(file){
        fileList.push(file)
    })
 });