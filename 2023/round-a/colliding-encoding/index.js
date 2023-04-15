/**
 * Accepts an array of lines and organises into separate cases.
 */
const splitInput = input => {
    const inputs = [];
    for (let i = 1; i < input.length; i++) {
        const prepareInput = [
            input[i].split(' ').map(Number),
        ];
        const strings = [];
        for (let j = 0; j < Number(input[i + 1]); j++) {
            strings.push(input[j + i + 2]);
        }

        prepareInput.push(strings);
        inputs.push(prepareInput);

        i += strings.length + 1;
    }

    return inputs;
};

const encodeWord = (word, encoding) => {
    return 0;
};

/**
 * Accepts a single input case and returns the result as a string.
 */
const solve = input => {
    return input;
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
    encodeWord,
	splitInput,
	solve,
	solveInputs,
};
