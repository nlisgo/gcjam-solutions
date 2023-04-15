const rainbowSort = require('../../round-a/rainbow-sort/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            rainbowSort.splitInput(`3
one
two
three`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'one',
                'two',
                'three',
            ]
        );
    });
});

describe('solve', () => {
    test('one', () => {
        expect(rainbowSort.solve('one')).toBe('one');
    });

    test('two', () => {
        expect(rainbowSort.solve('two')).toBe('two');
    });

    test('three', () => {
        expect(rainbowSort.solve('three')).toBe('three');
    });

    test('four', () => {
        expect(rainbowSort.solve('four')).toBe('four');
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            rainbowSort.solveInputs(`3
one
two
three`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: one',
                'Case #2: two',
                'Case #3: three',
            ]
        );
    });
});
