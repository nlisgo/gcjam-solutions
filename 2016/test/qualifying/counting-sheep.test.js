const countingSheep = require('../../qualifying/counting-sheep/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            countingSheep.splitInput(`3
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
        expect(countingSheep.solve('one')).toBe('one');
    });

    test('two', () => {
        expect(countingSheep.solve('two')).toBe('two');
    });

    test('three', () => {
        expect(countingSheep.solve('three')).toBe('three');
    });

    test('four', () => {
        expect(countingSheep.solve('four')).toBe('four');
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            countingSheep.solveInputs(`3
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
