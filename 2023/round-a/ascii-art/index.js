/**
 * Accepts an array of lines and organises into separate cases.
 */
const splitInput = input => input.slice(1).map(Number);

const nearestTriangularNumberBelow = (n) => {
    let triangularNumber = Math.floor((Math.sqrt(8 * n + 1) - 1) / 2);
    if ((triangularNumber * (triangularNumber + 1)) / 2 > n) {
        triangularNumber--;
    }
    return (triangularNumber * (triangularNumber + 1)) / 2;
}

const findTriangularNumberPosition = (T) => Math.ceil((-1 + Math.sqrt(1 + 8 * T)) / 2);

/**
 * Accepts a single input case and returns the result as a string.
 */
const solve = input => {
    const nearest = nearestTriangularNumberBelow(input / 26);
    const r = input - nearest * 26;
    const pos = findTriangularNumberPosition(nearest) + 1;
    const letterIndex = Math.ceil(r / pos);
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')[letterIndex - 1];
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
    nearestTriangularNumberBelow,
	splitInput,
	solve,
	solveInputs,
};
