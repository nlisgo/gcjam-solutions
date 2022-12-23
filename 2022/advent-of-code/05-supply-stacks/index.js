/**
 * Accepts an array of lines and organises into separate cases.
 */
const splitInput = input => {
    const [stackCount, stackHeight] = stackDimensions(input);
    const stacks = [];
    for (let i = 0; i < stackCount; i++) {
        const stack = [];
        for (let j = 0; j < stackHeight; j++) {
            const crate = input[stackHeight - j - 1].substring(4*i+1, 4*i+2);
            if (crate.trim() === '') {
                break;
            }
            stack.push(crate);
        }
        stacks.push(stack.reverse());
    }

    const moves = [];
    for (let i = stackHeight + 2; i < input.length; i++) {
        moves.push(input[i].split(' ').filter(i => i === Number(i).toString()).map(Number));
    }

    return [[stacks, moves]];
};

const stackDimensions = input => {
    let stackCount = 0;
    let stackHeight = 0;

    for (let i = 0; i < input.length; i++) {
        const inspect = input[i].substring(1, 2);

        if (inspect === Number(inspect).toString()) {
            stackHeight = i;
            stackCount = input[i].split('   ').length;
            break;
        }
    }

    return [stackCount, stackHeight];
};

/**
 * Accepts a single input case and returns the result as a string.
 */
const solve = input => {
    [stacks, moves] = input;
    for (let i = 0; i < moves.length; i++) {
        stacks = applyMove(stacks, moves[i]);
    }
    return stacks.map(s => s[0]).join('');
};

const applyMove = (stacks, move) => {
    stacks[move[2] - 1].unshift(...stacks[move[1] - 1].splice(0, move[0]).reverse());
    return stacks;
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
    stackDimensions,
    applyMove,
};
