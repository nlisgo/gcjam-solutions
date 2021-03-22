Number.prototype.toCase = function () {
    return this.valueOf()+1;
};

const solve = (X, Y, M) => {
	return closestPass(Number(X), Number(Y), M.split(''));
};

const closestPass = (X, Y, M) => {
	if (0 === X + Y) {
		return 0;
	}

	let newX = X;
	let newY = Y;
	for (let i = 0; i < M.length; i++) {
		switch (M[i]) {
			case 'E':
				newX += 1;
				break;
			case 'W':
				newX -= 1;
				break;
			case 'N':
				newY += 1;
				break;
			case 'S':
				newY -= 1;
				break;
			default:
		}

		if (i + 1 >= (newX < 0 ? newX * -1 : newX) + (newY < 0 ? newY * -1 : newY)) {
			return i + 1;
		}
	}
	return 'IMPOSSIBLE';
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
		inputs.slice(1).forEach((data, i) => console.log(`Case #${i.toCase()}: ${solve(...data.split(' '))}`));
	});
} else {
	module.exports = solve;
}
