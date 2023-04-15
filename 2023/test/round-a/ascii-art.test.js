const asciiArt = require('../../round-a/ascii-art/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            asciiArt.splitInput(`2
5
31`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                5,
                31,
            ]
        );
    });
});

describe('solve', () => {
    test('5', () => {
        expect(asciiArt.solve(5)).toBe('E');
    });

    test('31', () => {
        expect(asciiArt.solve(31)).toBe('C');
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            asciiArt.solveInputs(`2
5
31`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: E',
                'Case #2: C',
            ]
        );
    });
});
