Number.prototype.toCase = function () {
    return this.valueOf()+1;
};

const solve = input => {
	return input;
};

if (!Boolean(process.stdin.isTTY)) {
	const readline = require('readline');
	
	let inputs = [];
	
	const rl = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout,
	  terminal: false
	});
	
	rl.on('line', line => {
		inputs.push(line);
	}).on('close', () => {
		inputs.slice(1).forEach((data, i) => console.log(`Case #${i.toCase()}: ${solve(data)}`));
	});
} else {
	module.exports = solve;
}
