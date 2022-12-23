/**
 * Accepts an array of lines and organises into separate cases.
 */
const splitInput = input => [input.map(i => i.split(' ')).map(([dir, dist]) => [['L', 'R'].includes(dir) ? 'x' : 'y', dist * (['U', 'R'].includes(dir) ? 1 : -1)])];

const headSteps = (...steps) => {
    const trail = [[0, 0]];

    for (let i = 0; i < steps.length; i++) {
        [dir, dist] = steps[i];
        let lastPos = trail.slice(-1)[0];
        if (dist > 0) {
            for (let j = 0; j < dist; j++) {
                lastPos = dir === 'x' ? [lastPos[0] + 1, lastPos[1]] : [lastPos[0], lastPos[1] + 1];
                trail.push(lastPos);
            }
        } else {
            for (let j = 0; j > dist; j--) {
                lastPos = dir === 'x' ? [lastPos[0] - 1, lastPos[1]] : [lastPos[0], lastPos[1] - 1]
                trail.push(lastPos);
            }
        }
    }

    return trail;
};

const tailStep = (tailPos, headNewPos) => {
    if (
        headNewPos[0] >= tailPos[0] - 1 &&
        headNewPos[0] <= tailPos[0] + 1 &&
        headNewPos[1] >= tailPos[1] - 1 &&
        headNewPos[1] <= tailPos[1] + 1
    ) {
        return tailPos;
    }

    if (
        headNewPos[0] < tailPos[0] - 1
    ) {
        return [headNewPos[0] + 1, headNewPos[1]];
    }

    if (
        headNewPos[0] > tailPos[0] + 1
    ) {
        return [headNewPos[0] - 1, headNewPos[1]];
    }

    if (
        headNewPos[1] < tailPos[1] - 1
    ) {
        return [headNewPos[0], headNewPos[1] + 1];
    }

    if (
        headNewPos[1] > tailPos[1] + 1
    ) {
        return [headNewPos[0], headNewPos[1] - 1];
    }
};

const tailSteps = (start, headTrail) => {
    const tail = [start];
    for (let i = 0; i < headTrail.length; i++) {
        tail.push(tailStep(tail.slice(-1)[0], headTrail[i]));
    }

    return tail;
}; 

/**
 * Accepts a single input case and returns the result as a string.
 */
const solve = input => Array.from(new Set(tailSteps([0, 0], headSteps(...input)).map(JSON.stringify))).map(JSON.parse).length;

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
    headSteps,
    tailStep,
    tailSteps,
};
