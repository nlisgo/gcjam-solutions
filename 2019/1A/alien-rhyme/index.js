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
    let count = 0;
    inputs = inputs.slice(1);
    inputs.forEach((data, i) => {
        if (Number.parseInt(data)) {
            count++;
            const words = [];
            for (j = 1; j <= inputs[i]; j++) {
                words.push(inputs[i+j]);
            }
            console.log(`Case #${count}: ${solve(words)}`);
        }
    });
});

Array.prototype.filterList = function (limit = 1) {
    const values = this.valueOf();
    const lastChars = [...values].map(value => value.substr(value.length-limit));

    for (var i = 0, single = []; i < lastChars.length; i++) {
        if (lastChars.indexOf(lastChars[i], lastChars.indexOf(lastChars[i]) + 1) === -1) {
            single.push(lastChars[i]);
        }
    };

    return values.filter(value => {
        return single.indexOf(value.substr(value.length-limit)) < 0;
    });
}

function solve(inputs) {
    const potential = inputs.filterList();
    if (potential.length === 0) {
        return 0;
    } else if ([2, 3].includes(potential.length)) {
        return 2;
    }

    return inputs.join(' ');
}
