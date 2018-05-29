var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  


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

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', function(req, res){
    readMyFile('test.json').then(function (result) {
        var obj = JSON.parse(result);
        //var getId = <HTMLElement>document.getElementById("getId");
        var second_value = 101;
        let userArr =[];
        // var pname = document.getElementById("name");
        // var pmarks = document.getElementById("marks");
        obj.forEach(function (element) {
            if (element.id == second_value) {
                console.log("Name: " + element.name + "\nMarks: " + element.marks);
                // pname.innerHTML = element.name;
                // pmarks.innerHTML = element.marks;
              let objResponse =  {
                    "Name":element.name ,
                    "Marks":element.marks
                }
                userArr.push(objResponse);
            }
        });

        res.send(userArr);
    })["catch"](function (err) {
        console.log(err);
    });


  //res.send('hello world')
});

app.listen(port);

console.log('API server started on: ' + port);