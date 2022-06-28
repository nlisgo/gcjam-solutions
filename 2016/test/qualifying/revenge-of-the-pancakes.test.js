const revengeOfThePancakes = require('../../qualifying/revenge-of-the-pancakes/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            revengeOfThePancakes.splitInput(`5
-
-+
+-
+++
--+-`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                '-',
                '-+',
                '+-',
                '+++',
                '--+-',
            ]
        );
    });
});

describe('solve', () => {
    test('-', () => {
        expect(revengeOfThePancakes.solve('-')).toBe(1);
    });

    test('-+', () => {
        expect(revengeOfThePancakes.solve('-+')).toBe(1);
    });

    test('+-', () => {
        expect(revengeOfThePancakes.solve('+-')).toBe(2);
    });

    test('+++', () => {
        expect(revengeOfThePancakes.solve('+++')).toBe(0);
    });

    test('--+-', () => {
        expect(revengeOfThePancakes.solve('--+-')).toBe(3);
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            revengeOfThePancakes.solveInputs(`5
-
-+
+-
+++
--+-`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: 1',
                'Case #2: 1',
                'Case #3: 2',
                'Case #4: 0',
                'Case #5: 3',
            ]
        );
    });
});
