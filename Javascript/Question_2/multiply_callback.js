let arr2 = [];

function multiply(arr, callback) {
    arr2 = arr.map(a => a*2);
    callback(arr2);
}

function print(multiply){
    console.log(multiply);
}

let arr = [4,2,9,6,1,5,0];

let calc = multiply(arr, print);