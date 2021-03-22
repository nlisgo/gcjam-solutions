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

Number.prototype.toCase = () => this.valueOf()+1;

const solve = input => {
    let A = input.split('');
    let B = [];
    A.forEach((v, k) => {
        if (v == '4') {
            A[k] -= '1';
            B.push('1');
        }
        else {
            B.push('0');
        }
    });

    return [A.join(''), B.join('').replace(/^0+/, '')].join(' ');
}
