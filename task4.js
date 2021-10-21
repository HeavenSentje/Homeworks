const vowelsCounter = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let counter = 0;
    for (letter of str) {
        if (vowels.includes(letter)) {
            counter++;
        }
    }
    return counter;
}

let result = vowelsCounter('The current directory is AD-123');
console.log(result);