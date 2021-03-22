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
    inputs.slice(1).forEach((data, i) => {
        if (i.isOdd()) {
            [N] = inputs[i].split(' ');
            console.log(`Case #${i.toCase()}: ${solve(data)}`);
        }
    });
});

Number.prototype.isOdd = function () {
    return this.valueOf() % 2 === 1;
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

Number.prototype.findPrimeFactors = function(primes = undefined) {
    const value = this.valueOf();
    primes = primes === undefined ? findPrimes(Math.sqrt(value)) : primes;
    const primeFactors = [];

    for (let i=0; i<primes.length; i++) {
        if (value%primes[i]===0) {
            if ((value/primes[i]).isPrime()) {
                primeFactors.push(value/primes[i]);
            }
            primeFactors.push(primes[i]);
        }
    }

    return primeFactors;
}

Array.prototype.unlockFactors = function(factor) {
    const values = this.valueOf();
    const unlock = [factor];
    for (i=0; i < values.length; i+=1) {
        unlock.push(values[i]/unlock[i]);
    }
    return unlock;
}

const solve = input => {
    const values = input.split(' ');
    const diffs = [];
    let minDiff = 0;
    for (i=1; i<values.length; i++) {
        let diff = values[i]-values[i-1];
        diff = diff < 0 ? diff * -1 : diff;
        diffs.push(diff);
        if (minDiff === 0 || (diff > 0 && diff < minDiff)) {
            minDiff = diff;
        }
    }
    const minDiffPos = diffs.indexOf(minDiff);
    const minDiffPrimeFactors = minDiff.findPrimeFactors();
    const primeFactors = Number(values[minDiffPos]).findPrimeFactors(minDiffPrimeFactors);
    const leftValues = values.slice(0, minDiffPos);
    const rightValues = values.slice(minDiffPos+1);
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

const findPrimes = limit => {
    let primes = [];
    for(let i=2; i<=limit; i++) {
        if (i.isPrime()) {
            primes.push(i);
        }
    }
    return primes;
}
