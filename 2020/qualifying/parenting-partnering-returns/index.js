const solve = activities => {
    const unorderedActivities = [...activities];
    activities.sort(compare);
    let output = 'J'.repeat(activities.length);
    let lastActivity = -1;
    for (let i = 0; i < activities.length; i++) {
        const index = activities[i][2];
        if (lastActivity < 0 || activities[i][0] >= activities[lastActivity][1]) {
            output = output.substring(0, index) + 'C' + output.substring(index + 1);
            lastActivity = i;
        }
    }
    const indices = [];
    for(let i = 0; i < output.length; i++) {
        if (output[i] === 'J') indices.push(i);
    }
    if (indices.length > 1) {
        const jActivities = [];
        for (let i = 0; i < indices.length; i++) {
            jActivities.push(unorderedActivities[indices[i]]);
        }
        jActivities.sort(compare);
        for (let i = 1; i < jActivities.length; i++) {
            if (jActivities[i][0] < jActivities[i-1][1]) {
                return 'IMPOSSIBLE';
            }
        }
    }
    return output;
};

const compare = (a, b) => {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
};

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
                const activities = [];
                for (let j = 1; j <= inputs[i]; j++) {
                    const item = inputs[i+j] + ' ' + (j-1);
                    activities.push(item.split(' ').map(Number));
                }
                console.log(`Case #${x}: ${solve(activities)}`);
            }
        });
    });
}

module.exports = solve;
