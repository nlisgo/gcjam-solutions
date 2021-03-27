Number.prototype.toCase = function () {
    return this.valueOf()+1;
};

const solve = (len, cost) => {
	if (!possible(len, cost)) {
		return ['IMPOSSIBLE'];
	}

	for (let i = 0; i < len - 1; i ++) {

	}

	return [len];
};

const solveInputs = inputs => {
	const cases = [];
	inputs.slice(1).forEach((data, i) => {
		cases.push(`Case #${i.toCase()}: ${solve(...data.split(' ').map(Number)).join(' ')}`);
	});
	return cases;
};
const performReverse = (values, i, j) => {
	if (j === i) {
		return values;
	}

	const newValues = (i > 0) ? values.slice(0, i) : [];

	for (let k = j; k >= i; k--) {
		newValues.push(values[k]);
	}

	if (j < values.length - 1) {
		for (let k = j + 1; k < values.length; k++) {
			newValues.push(values[k]);
		}
	}

	return newValues;
};

const possible = (len, cost) => Boolean(cost >= len - 1 && cost < (len + 1) * len * 0.5);

const handleStdin = () => {
	const readline = require('readline');
	
	const inputs = [];
	
	const rl = readline.createInterface({
	  input: process.stdin
	});
	
	rl.on('line', line => {
		inputs.push(line);
	}).on('close', () => {
		solveInputs(inputs).forEach(out => {
			console.log(out);
		});
	});
};

if (!Boolean(process.stdin.isTTY)) {
	handleStdin();
}

module.exports = {
	solve,
	solveInputs,
	possible,
};
