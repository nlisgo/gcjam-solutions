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
    if (this.valueOf() % 2 === 1) {
        return true;
    } else {
        return false;
    }
}

Number.prototype.toCase = function() {
    return ((this.valueOf()-1)/2)+1;
}

Number.prototype.isPrime = function () {
    const value = this.valueOf();
    for(var i=2; i<=Math.sqrt(value); i++){
        if(value%i===0){
            return false;
        }
    }
    return true;
}

Number.prototype.findPrimeFactors = function(other, toLeft = true) {
    const value = this.valueOf();
    const primes = findPrimes(Math.sqrt(value));

    for (let i=0; i<primes.length; i++) {
        if (value%primes[i]===0) {
            if ((toLeft && other%(value/primes[i])===0) || (!toLeft && other%primes[i]===0)) {
                return [value/primes[i], primes[i]];
            } else {
                return [primes[i], value/primes[i]];
            }
        }
    }
}

Array.prototype.unlockFactors = function(factor) {
    const values = this.valueOf();
    const unlock = [factor];
    for (i=0; i < values.length; i+=1) {
        unlock.push(values[i]/unlock[i]);
    }
    return unlock;
}

function solve(input) {
    const values = input.split(' ');
    const min = values.reduce(function(a, b) {
        return Math.min(a, b);
    });
    let minPos = values.indexOf(min.toString());
    if (minPos === 0) {
        // Find position of first value that isn't min
        minPos = values.indexOf(values.find(element => element > min))-1;
    }
    const leftValues = values.slice(0, minPos);
    const rightValues = values.slice(minPos+1);
    const primeFactors = min.findPrimeFactors(rightValues.length>0 ? rightValues[0] : leftValues[leftValues.length-1], rightValues.length>0 ? false : true);
    const leftFactors = leftValues.reverse().unlockFactors(primeFactors[0]).reverse();
    const rightFactors = rightValues.unlockFactors(primeFactors[1]);
    const factors = leftFactors.concat(rightFactors);
    const orderedFactors = [...new Set(factors)].sort((a,b) => a-b);
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const output = [];
    factors.forEach(factor => {
        output.push(alphabet[orderedFactors.indexOf(factor)]);
    });
    return output.join('');
}

function findPrimes(limit) {
    let primes = [];
    for(let i=2; i<=limit; i++) {
        if (i.isPrime()) {
            primes.push(i);
        }
    }
    return primes;
}
