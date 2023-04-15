const asciiArt = require('../../round-a/ascii-art/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            asciiArt.splitInput(`3
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
        expect(asciiArt.solve('one')).toBe('one');
    });

    test('two', () => {
        expect(asciiArt.solve('two')).toBe('two');
    });

    test('three', () => {
        expect(asciiArt.solve('three')).toBe('three');
    });

    test('four', () => {
        expect(asciiArt.solve('four')).toBe('four');
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            asciiArt.solveInputs(`3
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
