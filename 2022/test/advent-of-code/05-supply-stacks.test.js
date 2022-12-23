const supplyStacks = require('../../advent-of-code/05-supply-stacks/index');
const supplyStacksPart2 = require('../../advent-of-code/05-supply-stacks/index-part2');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            supplyStacks.splitInput(`    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                [
                    [
                        ['N', 'Z'],
                        ['D', 'C', 'M'],
                        ['P'],
                    ],
                    [
                        [1, 2, 1],
                        [3, 1, 3],
                        [2, 2, 1],
                        [1, 1, 2],
                    ],
                ],
            ]
        );
    });
});

describe('stackDimensions', () => {
    test('sample.in', () => {
        expect(
            supplyStacks.stackDimensions(`    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`.split(/\r?\n/))
        )
        .toStrictEqual([3, 3]);
    });
});

describe('solve', () => {
    test("[[['N', 'Z'], ['D', 'C', 'M'], ['P']], [[1, 2, 1], [3, 1, 3], [2, 2, 1], [1, 1, 2]]]", () => {
        expect(supplyStacks.solve([[['N', 'Z'], ['D', 'C', 'M'], ['P']], [[1, 2, 1], [3, 1, 3], [2, 2, 1], [1, 1, 2]]])).toBe('CMZ');
    });
});

describe('applyMove', () => {
    test("[['N', 'Z'], ['D', 'C', 'M'], ['P']], [1, 2, 1]", () => {
        expect(supplyStacks.applyMove([['N', 'Z'], ['D', 'C', 'M'], ['P']], [1, 2, 1])).toStrictEqual([['D', 'N', 'Z'], ['C', 'M'], ['P']]);
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            supplyStacks.solveInputs(`    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: CMZ',
            ]
        );
    });
});

describe('solveInputs - part 2', () => {
    test('sample.in', () => {
        expect(
            supplyStacksPart2.solveInputs(`    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: MCD',
            ]
        );
    });
});
