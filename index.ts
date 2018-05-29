var promiseCount = 0;

function testPromise(){
    let thisPromiseCount = ++promiseCount;

    let getLog =document.getElementById("log");
    getLog.insertAdjacentHTML('beforeend', thisPromiseCount + ') Started (<samll>Sync code started</small>)<br/>');

    //We make a new promise: we promise a numeric count of this promise, starting from 1 (after waiting 3s)

    let p1 = new Promise((resolve, reject) => {
        getLog.insertAdjacentHTML('beforeend', thisPromiseCount +') Prmoise started (<small>Async code started</small>)<br/>');
        window.setTimeout(function(){
            resolve(thisPromiseCount);
        }, Math.random() * 2000+1000);
    });

    p1.then(
        function(val){
            getLog.insertAdjacentHTML('beforeend',val+ ') Promise fullfilled(<small>Async code terminated</small>)<br/>');
        }).catch((reason)=>{
            console.log('Handle rejected promise ('+ reason +') here.');
        });

        getLog.insertAdjacentHTML('beforeend',thisPromiseCount+') Promise made (<small>Sync code terminated</small>)</br>');

}

let btn1 = document.getElementById("btn");
btn1.addEventListener("click", testPromise);



