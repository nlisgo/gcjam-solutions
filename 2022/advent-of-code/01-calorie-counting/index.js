/**
 * Accepts an array of lines and organises into separate cases.
 */
const splitInput = input => {
    const groups = [];
    let group = [];
    input.forEach(i => {
        if (i === '' && group.length > 0) {
            groups.push(group);
            group = [];
        } else if (i !== '') {
            group.push(Number(i));
        }
    });

    if (group.length > 0) {
        groups.push(group);
    }

    return [groups];
};

/**
 * Accepts a single input case and returns the result as a string.
 */
const solve = input => Math.max(...input.map(i => i.reduce((partialSum, a) => partialSum + a, 0)));

/**
 * Accepts all lines of input and prepares all solutions.
 */
const solveInputs = inputs => {
	const cases = [];
	splitInput(inputs).forEach((data, i) => {
		cases.push(`Case #${i+1}: ${solve(data)}`);
	});
	return cases;
};

/**
 * If stdin is detected then pass all lines to solveInputs.
 * 
 * Send results to stdout.
 */
if (!Boolean(process.stdin.isTTY)) {
    const lines = [];
    require('readline').createInterface({
        input: process.stdin,
    }).on('line', line => {
        lines.push(line);
    }).on('close', () => {
        solveInputs(lines).forEach(line => {
            console.log(line);
        });
    });
}

/**
 * Export all functions that we want to test.
 */
module.exports = {
	splitInput,
	solve,
	solveInputs,
};
