/**
 * Accepts an array of lines and organises into separate cases.
 */
const splitInput = input => [input.map(i => i.split(' '))];

/**
 * Accepts a single input case and returns the result as a string.
 */
const solve = input => {
    let total = 0;
    input.forEach(([opp, me]) => {
        if (me === 'X') {
            total += 1;
        } else if (me === 'Y') {
            total += 2;
        } else {
            total += 3;
        }

        total += winLoseDrawScore(opp, me);
    });

    return total;
};

const winLoseDrawScore = (opp, me) => {
    if (
        (opp === 'A' && me === 'Y') ||
        (opp === 'B' && me === 'Z') ||
        (opp === 'C' && me === 'X')
    ) {
        return 6;
    } else if (
        (opp === 'A' && me === 'X') ||
        (opp === 'B' && me === 'Y') ||
        (opp === 'C' && me === 'Z')
    ) {
        return 3;
    }

    return 0;
}

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
    winLoseDrawScore,
};
