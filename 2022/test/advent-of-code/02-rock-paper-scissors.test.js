const rockPaperScissors = require('../../advent-of-code/02-rock-paper-scissors/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            rockPaperScissors.splitInput(`A Y
B X
C Z`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                [['A', 'Y'], ['B', 'X'], ['C', 'Z']],
            ]
        );
    });
});

describe('solve', () => {
    test("[['A', 'Y'], ['B', 'X'], ['C', 'Z']]", () => {
        expect(rockPaperScissors.solve([['A', 'Y'], ['B', 'X'], ['C', 'Z']])).toBe(15);
    });
});

describe('winLoseDrawScore', () => {
    test("'A', 'Y'", () => {
        expect(rockPaperScissors.winLoseDrawScore('A', 'Y')).toBe(6);
    });

    test("'B', 'X'", () => {
        expect(rockPaperScissors.winLoseDrawScore('B', 'X')).toBe(0);
    });

    test("'C', 'Z'", () => {
        expect(rockPaperScissors.winLoseDrawScore('C', 'Z')).toBe(3);
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            rockPaperScissors.solveInputs(`A Y
B X
C Z`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: 15',
            ]
        );
    });
});
