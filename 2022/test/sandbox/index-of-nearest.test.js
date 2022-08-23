const indexOfNearest = require('../../sandbox/index-of-nearest/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            indexOfNearest.splitInput(`3
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
        expect(indexOfNearest.solve('one')).toBe('one');
    });

    test('two', () => {
        expect(indexOfNearest.solve('two')).toBe('two');
    });

    test('three', () => {
        expect(indexOfNearest.solve('three')).toBe('three');
    });

    test('four', () => {
        expect(indexOfNearest.solve('four')).toBe('four');
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            indexOfNearest.solveInputs(`3
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
