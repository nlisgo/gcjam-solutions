const rainbowSort = require('../../round-a/rainbow-sort/index');

describe('splitInput', () => {
    test.only('sample.in', () => {
        expect(
            rainbowSort.splitInput(`2
4
3 8 8 2
5
3 8 2 2 8`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                [3, 8, 8, 2],
                [3, 8, 2, 2, 8],
            ]
        );
    });
});

describe('solve', () => {
    test('[3, 8, 8, 2]', () => {
        expect(rainbowSort.solve([3, 8, 8, 2])).toBe('3 8 2');
    });

    test('[3, 8, 2, 2, 8]', () => {
        expect(rainbowSort.solve([3, 8, 2, 2, 8])).toBe('IMPOSSIBLE');
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            rainbowSort.solveInputs(`2
4
3 8 8 2
5
3 8 2 2 8`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: 3 8 2',
                'Case #2: IMPOSSIBLE',
            ]
        );
    });
});
