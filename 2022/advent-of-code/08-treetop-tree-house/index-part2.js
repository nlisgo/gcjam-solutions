/**
 * Accepts an array of lines and organises into separate cases.
 */
const splitInput = input => {
    const rows = input.map(i => i.split('').map(Number));
    const cols = [];

    for (let i = 0; i < input.length; i++) {
        const col = [];
        for (let j = 0; j < rows.length; j++) {
            col.push(rows[j][i]);
        }
        cols.push(col);
    }

    return [[rows, cols]];
};

const isVisible = (rows, cols, row, col) => scenicScore(rows, cols, row, col, true) === 0;

const scenicScore = (rows, cols, row, col, mustBeHidden = false) => {
    if (
        row === 0 ||
        row === rows.length - 1 ||
        col === 0 ||
        col === cols.length - 1
    ) {
        return 0;
    }

    const height = rows[row][col];
    const left = rows[row].slice(0, col).reverse();
    const up = cols[col].slice(0, row).reverse();
    const right = rows[row].slice(col + 1);
    const down = cols[col].slice(row + 1);
    const minMax = Math.min(...[left, up, right, down].map(d => Math.max(...d)));

    if (mustBeHidden && minMax < height) {
        return 0;
    }

    return [left, up, right, down].map(d => {
        let s = 0;
        for (let i = 0; i < d.length; i++) {
            s++;
            if (d[i] >= height) {
                break;
            }
        }
        return s;
    }).reduce((a, b) => a * b, 1);
};

/**
 * Accepts a single input case and returns the result as a string.
 */
const solve = ([rows, cols]) => {
    const scenicScores = [];

    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < cols.length; j++) {
            scenicScores.push(scenicScore(rows, cols, i, j));
        }
    }

    return Math.max(...scenicScores);
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
    isVisible,
    scenicScore,
};
