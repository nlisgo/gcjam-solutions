/**
 * Accepts an array of lines and organises into separate cases.
 */
const splitInput = input => input;

/**
 * Accepts a single input case and returns the result as a string.
 */
const solve = (input, distinct = 4) => {
    for (let i = 0; i < input.length - distinct; i++) {
        const focus = input.substring(i, i + distinct);
        const unique = focus.split('').filter((v, i, a) => a.indexOf(v) === i).join('');
        if (unique.length === distinct) {
            return i + distinct;
        }
    }
};

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
