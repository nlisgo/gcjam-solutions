const countingSheep = require('../../qualifying/counting-sheep/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            countingSheep.splitInput(`5
0
1
2
11
1692`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                0,
                1,
                2,
                11,
                1692,
            ]
        );
    });
});

describe('solve', () => {
    test('0', () => {
        expect(countingSheep.solve(0)).toBe('INSOMNIA');
    });

    test('1', () => {
        expect(countingSheep.solve(1)).toBe(10);
    });

    test('2', () => {
        expect(countingSheep.solve(2)).toBe(90);
    });

    test('11', () => {
        expect(countingSheep.solve(11)).toBe(110);
    });

    test('1692', () => {
        expect(countingSheep.solve(1692)).toBe(5076);
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            countingSheep.solveInputs(`5
0
1
2
11
1692`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: INSOMNIA',
                'Case #2: 10',
                'Case #3: 90',
                'Case #4: 110',
                'Case #5: 5076',
            ]
        );
    });
});
