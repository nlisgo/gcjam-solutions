// Given the rows of a latin square return the trace (k),
// rows with duplicates (r) and columns with duplicates (c).
const solve = rows => {
    const cols = [];
    let r = 0;
    let c = 0;
    // Prepare a columns array.
    for (let j = 0; j < rows.length; j++) {
        const col = [];
        for (let k = 0; k < rows.length; k++) {
            col.push(rows[k][j]);
        }
        cols.push(col);
    }
    // Calculate the trace.
    const k = calculateTrace(rows);
    // For each row or column detect if duplicates found.
    for (let j = 0; j < rows.length; j++) {
        r += duplicateFound(rows[j]) ? 1 : 0;
        c += duplicateFound(cols[j]) ? 1 : 0;
    }
    return [k, r, c];
};

const solveInputs = inputs => {
	const cases = [];

    let x = 0;
    // Discard the first line of inputs.
    inputs = inputs.slice(1);
    inputs.forEach((data, i) => {
        // If the line contains a single integer.
        if (Number.parseInt(data) == data) {
            x++;
            // Collect the rows of the latin square.
            const rows = [];
            for (let j = 1; j <= inputs[i]; j++) {
                rows.push(inputs[i+j].split(' '));
            }
            // Prepare output the case after passing rows to solve method above.
            cases.push(`Case #${x}: ${solve(rows).join(' ')}`);
        }
    });

	return cases;
};

// Given the rows of a latin square return the trace (k).
const calculateTrace = latinSquares => {
    let trace = 0;
    for (let i = 0; i < latinSquares.length; i++) {
        trace += Number.parseInt(latinSquares[i][i]);
    }
    return trace;
};

// Detect if a duplicate is found in an array.
const duplicateFound = values => values.length > values.filter((v, i, a) => a.indexOf(v) === i).length;

const handleStdin = () => {
	const readline = require('readline');

    let inputs = [];

    const rl = readline.createInterface({
        input: process.stdin
    });

    // Read each line into the array inputs.
    rl.on('line', line => {
        inputs.push(line);
    }).on('close', () => {
        // Prepare output.
		solveInputs(inputs).forEach(out => {
			console.log(out);
		});
    });
};

// Process stdin if detected.
if (!Boolean(process.stdin.isTTY)) {
	handleStdin();
}

module.exports = {
	solve,
	solveInputs,
};
