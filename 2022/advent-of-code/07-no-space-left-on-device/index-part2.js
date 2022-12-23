/**
 * Accepts an array of lines and organises into separate cases.
 */
const splitInput = input => {
    let currDir = ['/'];
    const dirs = [currDir];
    const files = [];

    for (let i = 2; i < input.length; i++) {
        const line = input[i].split(' ');

        if (line[0] === Number(line[0]).toString()) {
            files.push(currDir.join('') + line[0]);
        } else if (line[0] === '$' && line[1] === 'cd') {
            if (line[2] !== '..') {
                currDir = [...currDir, line[2] + '/'];
                dirs.push(currDir);
            } else {
                currDir = currDir.slice(0, -1);
            }
        }
    }

    return [[dirs, files]];
};

const filesByDirectory = (dirs, files) => {
    return dirs.map(dir => {
        const d = dir.join('');
        return files.filter(f => f.startsWith(d)).map(f => Number(f.substring(f.lastIndexOf('/')+1)));
    });
};

/**
 * Accepts a single input case and returns the result as a string.
 */
const solve = ([dirs, files]) => {
    const dirsBySize = filesByDirectory(dirs, files).map(d => d.reduce((partialSum, a) => partialSum + a, 0)).sort((a, b) => a - b);
    const total = Math.max(...dirsBySize);
    const spaceToFreeUp = total - 40000000;

    for (let i = 0; i < dirsBySize.length; i++) {
        if (dirsBySize[i] >= spaceToFreeUp) {
            return dirsBySize[i];
        }
    }
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
    filesByDirectory,
};
