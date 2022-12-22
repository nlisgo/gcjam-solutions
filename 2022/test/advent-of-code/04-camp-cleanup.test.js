const campCleanup = require('../../advent-of-code/04-camp-cleanup/index');
const campCleanupPart2 = require('../../advent-of-code/04-camp-cleanup/index-part2');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            campCleanup.splitInput(`2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                [
                    [[2, 4], [6, 8]],
                    [[2, 3], [4, 5]],
                    [[5, 7], [7, 9]],
                    [[2, 8], [3, 7]],
                    [[6, 6], [4, 6]],
                    [[2, 6], [4, 8]],
                ],
            ]
        );
    });
});

describe('fullyContains', () => {
    test('[2, 4], [6, 8]', () => {
        expect(campCleanup.fullyContains([2, 4], [6, 8])).toBe(false);
    });

    test('[2, 3], [4, 5]', () => {
        expect(campCleanup.fullyContains([2, 3], [4, 5])).toBe(false);
    });

    test('[5, 7], [7, 9]', () => {
        expect(campCleanup.fullyContains([5, 7], [7, 9])).toBe(false);
    });

    test('[2, 8], [3, 7]', () => {
        expect(campCleanup.fullyContains([2, 8], [3, 7])).toBe(true);
    });

    test('[6, 6], [4, 6]', () => {
        expect(campCleanup.fullyContains([6, 6], [4, 6])).toBe(true);
    });

    test('[2, 6], [4, 8]', () => {
        expect(campCleanup.fullyContains([2, 6], [4, 8])).toBe(false);
    });
});

describe('partiallyContains', () => {
    test('[2, 4], [6, 8]', () => {
        expect(campCleanupPart2.partiallyContains([2, 4], [6, 8])).toBe(false);
    });

    test('[2, 3], [4, 5]', () => {
        expect(campCleanupPart2.partiallyContains([2, 3], [4, 5])).toBe(false);
    });

    test('[5, 7], [7, 9]', () => {
        expect(campCleanupPart2.partiallyContains([5, 7], [7, 9])).toBe(true);
    });

    test('[2, 8], [3, 7]', () => {
        expect(campCleanupPart2.partiallyContains([2, 8], [3, 7])).toBe(true);
    });

    test('[6, 6], [4, 6]', () => {
        expect(campCleanupPart2.partiallyContains([6, 6], [4, 6])).toBe(true);
    });

    test('[2, 6], [4, 8]', () => {
        expect(campCleanupPart2.partiallyContains([2, 6], [4, 8])).toBe(true);
    });
});

describe('solve', () => {
    test('[[[2, 4], [6, 8]], [[2, 3], [4, 5]], [[5, 7], [7, 9]], [[2, 8], [3, 7]], [[6, 6], [4, 6]], [[2, 6], [4, 8]]]', () => {
        expect(campCleanup.solve([[[2, 4], [6, 8]], [[2, 3], [4, 5]], [[5, 7], [7, 9]], [[2, 8], [3, 7]], [[6, 6], [4, 6]], [[2, 6], [4, 8]]])).toBe(2);
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            campCleanup.solveInputs(`2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: 2',
            ]
        );
    });
});

describe('solveInputs - part 2', () => {
    test('sample.in', () => {
        expect(
            campCleanupPart2.solveInputs(`2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: 4',
            ]
        );
    });
});
