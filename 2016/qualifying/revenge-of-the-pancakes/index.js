/**
 * Accepts an array of lines and organises into separate cases.
 */
const splitInput = input => input.slice(1);

/**
 * Accepts a single input case and returns the result as a string.
 */
const solve = input => {
    let co = 0;
    let curr = input;
    let swap = '+';
    let swapPos = 0;
    while (curr.indexOf('-') >= 0) {
        co++;
        swap = curr.charAt(0) === '-' ? '+' : '-';
        swapPos = curr.indexOf(swap);
        curr = (swapPos >= 0) ? swap.repeat(swapPos) + curr.substr(swapPos) : swap.repeat(curr.length);
    }
    return co;
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
