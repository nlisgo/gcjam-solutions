const readline = require('readline');

let inputs = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});

rl.on('line', function (line) {
    inputs.push(line);
}).on('close', () => {
    inputs.slice(1).forEach((data, i) => {
        if (i.isOdd()) {
            [N] = inputs[i].split(' ');
            console.log(`Case #${i.toCase()}: ${solve(data)}`);
        }
    });
});

Number.prototype.isOdd = function() {
    return (this.valueOf() % 2 === 1);
}

Number.prototype.toCase = function() {
    return ((this.valueOf()-1)/2)+1;
}

function euclidGcd(a, b) {
    return (b === 0n) ? a : euclidGcd(b, a % b);
}

Array.prototype.unlockFactors = function(factor) {
    const values = this.valueOf();
    const unlock = [factor];
    for (let i = 0; i < values.length; i += 1) {
        unlock.push(values[i] / unlock[i]);
    }
    return unlock;
}

function solve(input) {
    const values = input.split(' ').map(e => BigInt(e));
    let minDiff = 0n;
    let minDiffPos = 0;
    for (i = 1; i < values.length; i++) {
        let diff = values[i] - values[i-1];
        diff = diff < 0n ? diff * -1n : diff;
        if (minDiff === 0n || (diff > 0n && diff < minDiff)) {
            minDiffPos = i-1;
            minDiff = diff;
        }
    }
    const leftValues = values.slice(0, minDiffPos);
    const rightValues = values.slice(minDiffPos+1);
    const gcd = euclidGcd(values[minDiffPos], rightValues[0]);
    const leftFactors = leftValues.reverse().unlockFactors(values[minDiffPos] / gcd).reverse();
    const rightFactors = rightValues.unlockFactors(gcd);
    const allFactors = leftFactors.concat(rightFactors);
    const orderedFactors = [...new Set(allFactors)].sort((a, b) => (a > b) ? 1 : (b > a) ? -1 : 0);
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return allFactors.map(factor => alphabet[orderedFactors.indexOf(factor)]).join('');
}
