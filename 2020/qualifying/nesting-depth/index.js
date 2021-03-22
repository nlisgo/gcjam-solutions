Number.prototype.toCase = function () {
    return this.valueOf()+1;
};

const solve = input => {
    let output = '';
    for (let i = 0; i < input.length; i++) {
        const j = Number.parseInt(input[i]);
        output += '('.repeat(j)+input[i]+')'.repeat(j);
    }
    return reduceBrackets(output);
};

const reduceBrackets = input => {
    let output = input;
    while (output.indexOf(')(') > 0) {
        output = output.replace(/\)\(/g, '');
    }
    return output;
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
        inputs.slice(1).forEach((data, i) => console.log(`Case #${i.toCase()}: ${solve(data)}`));
    });
} else {
	module.exports = solve;
}
