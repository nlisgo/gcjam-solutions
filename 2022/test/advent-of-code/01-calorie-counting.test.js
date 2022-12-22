const calorieCounting = require('../../advent-of-code/01-calorie-counting/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            calorieCounting.splitInput(`1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                [
                    [1000, 2000, 3000],
                    [4000],
                    [5000, 6000],
                    [7000, 8000, 9000],
                    [10000],
                ],
            ]
        );
    });
});

describe('solve', () => {
    test('[1000, 2000, 3000],[4000],[5000, 6000],[7000, 8000, 9000],[10000]', () => {
        expect(calorieCounting.solve([[1000, 2000, 3000],[4000],[5000, 6000],[7000, 8000, 9000],[10000]])).toBe(24000);
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            calorieCounting.solveInputs(`1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: 24000',
            ]
        );
    });
});
