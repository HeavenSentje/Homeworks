let removeSpecialCharacters = String.prototype.removeSpecialCharacters = function (str) {
    console.log(str.replace(/[^a-zA-Z0-9]/g, ""));
}

removeSpecialCharacters('.he?ll!o');