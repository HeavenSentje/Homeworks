function pinCodeGenerator(length) {
	let code = '';
	for (let i = 0; i < length; i++) {
		code += Math.floor(Math.random() * 10);
	}
	return code;
}

let code = pinCodeGenerator(6);
console.log('Your random pin code is ' + code);