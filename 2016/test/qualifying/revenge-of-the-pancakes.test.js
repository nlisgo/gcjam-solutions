const revengeOfThePancakes = require('../../qualifying/revenge-of-the-pancakes/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            revengeOfThePancakes.splitInput(`3
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
        expect(revengeOfThePancakes.solve('one')).toBe('one');
    });

    test('two', () => {
        expect(revengeOfThePancakes.solve('two')).toBe('two');
    });

    test('three', () => {
        expect(revengeOfThePancakes.solve('three')).toBe('three');
    });

    test('four', () => {
        expect(revengeOfThePancakes.solve('four')).toBe('four');
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            revengeOfThePancakes.solveInputs(`3
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
