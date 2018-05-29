"use strict";
exports.__esModule = true;
var fs = require("file-system");
var es6_promise_1 = require("es6-promise");
function readMyFile(fileName) {
    return new es6_promise_1.Promise(function (resolve, reject) {
        fs.readFile(fileName, function (err, result) {
            if (err)
                reject(err);
            else
                resolve(result);
        });
    });
}
module.exports.btnClick = function () {
    readMyFile('test.json').then(function (result) {
        var obj = JSON.parse(result);
        //var getId = <HTMLElement>document.getElementById("getId");
        var second_value = 101;
        // var pname = document.getElementById("name");
        // var pmarks = document.getElementById("marks");
        obj.forEach(function (element) {
            if (element.id == second_value) {
                console.log("Name: " + element.name + "\nMarks: " + element.marks);
                // pname.innerHTML = element.name;
                // pmarks.innerHTML = element.marks;
            }
        });
    })["catch"](function (err) {
        console.log(err);
    });
};
