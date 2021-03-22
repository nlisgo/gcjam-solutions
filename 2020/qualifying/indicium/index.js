Number.prototype.toCase = function () {
    return this.valueOf()+1;
};

const solve = input => {
	const trace = possibleTrace(input[0], input[1]);
	if (trace.length === 0) {
		return 'IMPOSSIBLE';
	}
	const latinSquare = latinSquareOutput(prepareLatinSquare(trace));
	return ['POSSIBLE', ...latinSquare].join('\n');
};

const possibleTrace = (N, K) => {
	if (K === N + 1 || K === N*N-1 || (N === 3 && (K % N > 0))) {
		return [];
	}

	if (K % N === 0) {
		return Array(N).fill(K / N);
	}

	let b = Number.parseInt(K / N);
	let r = K % N;
	if (r === 1) {
		b -= 1;
		r += N;
	}
	const trace = Array(N).fill(b);

	return traceAddRemainder(trace, r);
};

const traceAddRemainder = (trace, remainder) => {
	let r = remainder;
	while (r > 0) {
		for (let i = trace.length - 1; i > 1; i--) {
			trace[i] += 1;
			r--;
			if (r === 0) {
				return trace;
			}
			if (i === 2) {
				i = trace.length - 1;
			}
		}
	}
	return trace;
};

const latinSquareOutput = latinSquare => {
	const output = [];
	for (let i = 0; i < latinSquare.length; i++) {
		output.push(latinSquare[i].join(' '));
	}

	return output;
};

const latinSquareTrace = trace => {
	const latinSquare = [];
	for (let i = 0; i < trace.length; i++) {
		const possibles = range(1, trace.length);	
		latinSquare.push(Array(trace.length).fill(possibles));
	}

	for (let i = 0; i < trace.length; i++) {

		latinSquare[i][i] = [trace[i]];
	}
	return cleanupLatinSquare(latinSquare);
};

const cleanupLatinSquare = (latinSquare) => {
	for (let i = 0; i < latinSquare.length; i++) {
		for (let j = 0; j < latinSquare.length; j++) {
			if (latinSquare[i][j].length === 1) {
				for (let k = 0; k < latinSquare.length; k++) {
					if (latinSquare[i][k].length > 1) {
						latinSquare[i][k] = [...latinSquare[i][k]].filter(el => el !== latinSquare[i][j][0]);
					}
					if (latinSquare[k][j].length > 1) {
						latinSquare[k][j] = [...latinSquare[k][j]].filter(el => el !== latinSquare[i][j][0]);
					}
				}
			}
		}
	}
	return latinSquare;
};

const prepareLatinSquare = trace => {
	let latinSquare = latinSquareTrace(trace);

	for (let i = 0; i < latinSquare.length; i++) {
		for (let j = 0; j < latinSquare.length; j++) {
			if (latinSquare[i][j].length > 1) {
				latinSquare[i][j] = chooseNumber(latinSquare, i, j);
				latinSquare = cleanupLatinSquare(latinSquare);
			}
		}
	}

	return latinSquare;
};

const range = (start, end) => {
    return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
};

const chooseNumber = (latinSquare, row, col) => {
	// Rather than choosing the first value, look for value unique to row, then unique to column, if none found then favour the number most available.
	let filterValues = latinSquare[row][col];
	for (let i = 0; i < latinSquare.length; i++) {
		if (i !== col) {
			filterValues = filterValues.filter(el => !latinSquare[row][i].includes(el));
		}
	}
	for (let i = 0; i < latinSquare.length; i++) {
		if (i !== row) {
			filterValues = filterValues.filter(el => !latinSquare[i][col].includes(el));
		}
	}
	if (filterValues.length === 1) {
		return filterValues;
	}

	return [latinSquare[row][col][0]];
};

if (!Boolean(process.stdin.isTTY)) {
	const readline = require('readline');
	
	let inputs = [];
	
	const rl = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout,
	  terminal: false
	});
	
	rl.on('line', line => {
		inputs.push(line);
	}).on('close', () => {
		inputs.slice(1).forEach((data, i) => console.log(`Case #${i.toCase()}: ${solve(data.split(' ').map(Number))}`));
	});
} else {
	module.exports = solve;
}
