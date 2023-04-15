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

describe('nearestTriangularNumberBelow', () => {
    test('0.5', () => {
        expect(asciiArt.nearestTriangularNumberBelow(0.5)).toBe(0);
    });

    test('1', () => {
        expect(asciiArt.nearestTriangularNumberBelow(1)).toBe(1);
    });

    test('2', () => {
        expect(asciiArt.nearestTriangularNumberBelow(2)).toBe(1);
    });

    test('3', () => {
        expect(asciiArt.nearestTriangularNumberBelow(3)).toBe(3);
    });

    test('7', () => {
        expect(asciiArt.nearestTriangularNumberBelow(7)).toBe(6);
    });

    test('9', () => {
        expect(asciiArt.nearestTriangularNumberBelow(9)).toBe(6);
    });

    test('13', () => {
        expect(asciiArt.nearestTriangularNumberBelow(13)).toBe(10);
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
