const validatePhoneNumber = (str) => {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let counter = 0;
    for (letter of str) {
        if (numbers.includes(letter)) {
            counter++;
        }
    }
    if (counter === 10) return true;
    else return false;
}

let result = validatePhoneNumber('123 456 7890');
console.log(result);