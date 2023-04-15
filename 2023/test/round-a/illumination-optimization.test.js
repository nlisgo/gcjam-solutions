const illuminationOptimization = require('../../round-a/illumination-optimization/index');

describe('splitInput', () => {
    test.only('sample.in', () => {
        expect(
            illuminationOptimization.splitInput(`3
10 3 3
2 7 9
10 2 3
2 7 9
10 2 4
2 3 7 9`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                [10, 3, 3, [2, 7, 9]],
                [10, 2, 3, [2, 7, 9]],
                [10, 2, 4, [2, 3, 7, 9]],
            ]
        );
    });
});

describe('solve', () => {
    test('[10, 3, 3, [2, 7, 9]]', () => {
        expect(illuminationOptimization.solve(10, 3, 3, [2, 7, 9])).toBe(2);
    });

    test.only('[10, 2, 3, [2, 7, 9]]', () => {
        expect(illuminationOptimization.solve('two')).toBe('IMPOSSIBLE');
    });

    test('[10, 2, 4, [2, 3, 7, 9]]', () => {
        expect(illuminationOptimization.solve([10, 2, 4, [2, 3, 7, 9]])).toBe(3);
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            illuminationOptimization.solveInputs(`3
10 3 3
2 7 9
10 2 3
2 7 9
10 2 4
2 3 7 9`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: 2',
                'Case #2: IMPOSSIBLE',
                'Case #3: 3',
            ]
        );
    });
});
