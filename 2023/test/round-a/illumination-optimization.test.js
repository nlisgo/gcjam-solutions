const illuminationOptimization = require('../../round-a/illumination-optimization/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            illuminationOptimization.splitInput(`3
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
        expect(illuminationOptimization.solve('one')).toBe('one');
    });

    test('two', () => {
        expect(illuminationOptimization.solve('two')).toBe('two');
    });

    test('three', () => {
        expect(illuminationOptimization.solve('three')).toBe('three');
    });

    test('four', () => {
        expect(illuminationOptimization.solve('four')).toBe('four');
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            illuminationOptimization.solveInputs(`3
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
