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

module.exports = {
	solve,
	solveInputs,
};
