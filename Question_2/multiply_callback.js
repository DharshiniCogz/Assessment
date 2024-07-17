let arr2 = [];

function multiply(arr, num, callback) {
    for(let i=0; i< num; i++) {
        arr2[i] = arr[i] * 2;
    }
    callback(arr2);
}

function print(multiply){
    console.log(multiply);
}

let arr = [4,2,9,6,1,5,0];

let calc = multiply(arr, arr.length, print);