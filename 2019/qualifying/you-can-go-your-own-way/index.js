const readline = require('readline');

let inputs = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function (line) {
    inputs.push(line);
}).on('close', () => {
    inputs.slice(1).forEach((data, i) => {
        if (i.isOdd()) {
            console.log(`Case #${i.toCase()}: ${solve(inputs[i], data)}`);
        }
    });
});

Number.prototype.isOdd = function() {
    if (this.valueOf() % 2 === 1) {
        return true;
    } else {
        return false;
    }
}

Number.prototype.toCase = function() {
    return ((this.valueOf()-1)/2)+1;
}

function solve(dimension, input) {
    const path = input.split('');
    const len = input.length;
    const first = path[0];
    const last = path[len-1];
    if (first !== last) {
        return last.repeat(len/2) + first.repeat(len/2);
    } else {
        const search = (last === 'S') ? 'EE' : 'SS';
        const pos = input.lastIndexOf(search);
        const tail = input.substr(pos+1);
        const x = dimension - tail.split('E').length;
        const y = dimension - tail.split('S').length;
        if (first === 'S') {
            return 'E'.repeat(x) + 'S'.repeat(dimension-1) + 'E'.repeat(dimension-x-1);
        } else {
            return 'S'.repeat(y) + 'E'.repeat(dimension-1) + 'S'.repeat(dimension-y-1);
        }
    }
}
