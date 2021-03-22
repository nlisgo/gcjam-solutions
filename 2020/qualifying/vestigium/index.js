const solve = rows => {
    const cols = [];
    let r = 0;
    let c = 0;
    for (let j = 0; j < rows.length; j++) {
        const col = [];
        for (let k = 0; k < rows.length; k++) {
            col.push(rows[k][j]);
        }
        cols.push(col);
    }
    const k = calculateTrace(rows);
    for (let j = 0; j < rows.length; j++) {
        r += duplicateFound(rows[j]) ? 1 : 0;
        c += duplicateFound(cols[j]) ? 1 : 0;
    }
    return [k, r, c];
};

const calculateTrace = latinSquares => {
    let trace = 0;
    for (let i = 0; i < latinSquares.length; i++) {
        trace += Number.parseInt(latinSquares[i][i]);
    }
    return trace;
};

const duplicateFound = values => values.length > values.filter((v, i, a) => a.indexOf(v) === i).length;

if (!Boolean(process.stdin.isTTY)) {
	const readline = require('readline');

    let inputs = [];

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
    });

    rl.on('line', line => {
        inputs.push(line);
    }).on('close', () => {
        let x = 0;
        inputs = inputs.slice(1);
        inputs.forEach((data, i) => {
            if (Number.parseInt(data) == data) {
                x++;
                const rows = [];
                for (let j = 1; j <= inputs[i]; j++) {
                    rows.push(inputs[i+j].split(' '));
                }
                console.log(`Case #${x}: ${solve(rows).join(' ')}`);
            }
        });
    });
} else {
	module.exports = solve;
}
