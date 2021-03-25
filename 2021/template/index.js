Number.prototype.toCase = function () {
    return this.valueOf()+1;
};

const solve = input => {
	return input;
};

const solveInputs = inputs => {
	const cases = [];
	inputs.slice(1).forEach((data, i) => {
		cases.push(`Case #${i.toCase()}: ${solve(data)}`);
	});
	return cases;
};

if (!Boolean(process.stdin.isTTY)) {
	const readline = require('readline');
	
	const inputs = [];
	
	const rl = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout,
	  terminal: false
	});
	
	rl.on('line', line => {
		inputs.push(line);
	}).on('close', () => {
		solveInputs(inputs).forEach(out => {
			console.log(out);
		});
	});
} else {
	module.exports = {
		solve,
		solveInputs,
	};
}
