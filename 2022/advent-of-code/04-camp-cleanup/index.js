/**
 * Accepts an array of lines and organises into separate cases.
 */
const splitInput = input => [input.map(i => i.split(',').map(i => i.split('-').map(Number)))];

const fullyContains = ([startA, endA], [startB, endB]) => ((startA <= startB && endA >= endB) || (startB <= startA && endB >= endA));

/**
 * Accepts a single input case and returns the result as a string.
 */
const solve = input => {
    let total = 0;
    input.forEach(i => {
        if (fullyContains(...i)) {
            total++;
        }
    });
    return total;
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
    fullyContains,
};
