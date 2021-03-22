const solve = require('../../qualifying/indicium/index');

test('5 19', () => {
    expect(solve([5, 19])).toBe(['POSSIBLE', '3 1 2 4 5', '1 3 5 2 2', '2 5 4 1 3', '4 2 3 5 1', '5 2 1 3 4'].join('\n'));
});
