const data = require('./data.json');

function uniqueCheck(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (JSON.stringify(arr[i]) === JSON.stringify(arr[j])) {
                arr.splice(j, 1);
            }
        }
    }
    console.log(arr);
}

let res = uniqueCheck(data);
console.log(res);