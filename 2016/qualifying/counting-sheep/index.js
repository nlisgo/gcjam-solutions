/**
 * Accepts an array of lines and organises into separate cases.
 */
const splitInput = input => input.slice(1).map(Number);

/**
 * Accepts a single input case and returns the result as a string.
 */
const solve = input => {
    if (0 === input) {
        return 'INSOMNIA';
    }

    let co = 0;
    let curr = '';
    let str = '0123456789';
    while (str.length > 0) {
        co++;
        curr = Array.from(new Set((co * input).toString().split('')));
        curr.forEach(i => {
            str = str.replace(i, '');
        });
    }
    return co * input;
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
