/**
 * Accepts an array of lines and organises into separate cases.
 */
const splitInput = input => {
    const cases = [];
    for (let i = 1; i < input.length; i += 2) {
        [_, start, needle] = input[i].split(' ').map(j => !isNaN(j) ? Number(j) : j);
        cases.push([start, needle, input[i + 1].split(' ')]);
    }

    return cases;
};

/**
 * Accepts a single input case and returns the result as a string.
 */
const solve = input => {
    [start, needle, haystack] = input;

    let nearestPos = -1;
    let offset = 0;

    while (nearestPos < 0) {
        if (haystack[start - offset] === undefined && haystack[start + offset] === undefined) {
            break;
        }

        if (haystack[start - offset] !== undefined && haystack[start - offset] === needle) {
            nearestPos = start - offset;
        } else if (haystack[start + offset] !== undefined && haystack[start + offset] === needle) {
            nearestPos = start + offset;
        }

        offset++;
    }

    return nearestPos;
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
