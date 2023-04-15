/**
 * Accepts an array of lines and organises into separate cases.
 */
const splitInput = input => {
    const inputs = [];
    for (let i = 1; i < input.length; i += 2) {
        inputs.push([...input[i].split(' ').map(Number), input[i + 1].split(' ').map(Number)]);
    }

    return inputs;
};

/**
 * Accepts a single input case and returns the result as a string.
 */
const solve = (M, R, N, X) => {
    // Ends of freeway are not lit.
    if (X[0] > R || X[X.length - 1] + R < M) {
        return 'IMPOSSIBLE';
    }

    // Check if any lights more than double R apart.
    for (let i = 1; i < X.length; i++) {
        if (X[i] - X[i - 1] > 2*R) {
            return 'IMPOSSIBLE';
        }
    }

    return X.length;
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
