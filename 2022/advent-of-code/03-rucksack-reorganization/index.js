/**
 * Accepts an array of lines and organises into separate cases.
 */
const splitInput = input => [input];

/**
 * Accepts a single input case and returns the result as a string.
 */
const solve = input => {
    let total = 0;
    input.forEach(i => {
        const [shared] = sharedItems(i.substring(0, i.length / 2), i.substring(i.length / 2));
        if (shared) {
            total += letterPriority(shared);
        }
    });

    return total;
};

const letterPriority = letter => 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(letter) + 1;

const sharedItems = (...args) => [...new Set(args[0].split(''))].filter(value => {
    let shared = true;
    args.slice(1).forEach(arg => {
        if (shared === true && !arg.includes(value)) {
            shared = false;
        } 
    });

    return shared;
});

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
    letterPriority,
    sharedItems,
};
