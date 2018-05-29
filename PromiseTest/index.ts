import * as fs from 'file-system';
import { Promise } from 'es6-promise';

 

 function readMyFile(fileName: String): Promise<any> {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

var btnClick = () => {
    readMyFile('test.json').then((result) => {
        var obj = JSON.parse(result);
        //var getId = <HTMLElement>document.getElementById("getId");
        var second_value = 101;
        // var pname = document.getElementById("name");
        // var pmarks = document.getElementById("marks");
        obj.forEach(element => {
            if (element.id == second_value) {
                console.log("Name: " + element.name + "\nMarks: " + element.marks);
                // pname.innerHTML = element.name;
                // pmarks.innerHTML = element.marks;
            }
        });
    }).catch((err) => {
        console.log(err);
    })
}


