const data1 = require('./data1.json');
const fs = require("fs");

const DollarsToEuro = 0.86;

for(let i = 0; i < data1.data.length; i++) {
    data1.data[i].Prices["Price"] *= DollarsToEuro;
    data1.data[i].Prices["Retail Price"] *= DollarsToEuro;
    data1.data[i].Prices["Wholesale Price"] *= DollarsToEuro;
    data1.data[i].Currency = "Euro";
}

console.log(fs.readFileSync("data1.json", "utf8"));
console.log(data1.data);

