/**
 * Accepts an array of lines and organises into separate cases.
 */
const splitInput = input => {
    const inputs = [];
    for (let i = 2; i <= input.length; i += 2) {
        inputs.push(input[i].split(' ').map(Number));
    }

    return inputs;
};

/**
 * Accepts a single input case and returns the result as a string.
 */
const solve = input => {
    // Get rid of adjacent duplicates and if resultant array has no duplicates it is possible.
    const removeAdjacentDuplicates = [input[0]];
    for (let i = 1; i < input.length; i ++) {
        if (input[i] !== input[i - 1]) {
            removeAdjacentDuplicates.push(input[i]);
        }
    }

    const removeAllDuplicates = [...new Set(removeAdjacentDuplicates)];

    if (removeAllDuplicates.length < removeAdjacentDuplicates.length) {
        return 'IMPOSSIBLE';
    }

    return removeAllDuplicates.join(' ');
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
