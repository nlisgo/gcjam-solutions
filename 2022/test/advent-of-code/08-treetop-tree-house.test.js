const treetopTreeHouse = require('../../advent-of-code/08-treetop-tree-house/index');
const treetopTreeHousePart2 = require('../../advent-of-code/08-treetop-tree-house/index-part2');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            treetopTreeHouse.splitInput(`30373
25512
65332
33549
35390`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                [
                    [
                        [3, 0, 3, 7, 3],
                        [2, 5, 5, 1, 2],
                        [6, 5, 3, 3, 2],
                        [3, 3, 5, 4, 9],
                        [3, 5, 3, 9, 0],
                    ],
                    [
                        [3, 2, 6, 3, 3],
                        [0, 5, 5, 3, 5],
                        [3, 5, 3, 5, 3],
                        [7, 1, 3, 4, 9],
                        [3, 2, 2, 9, 0],
                    ],
                ],
            ]
        );
    });
});

describe('isVisible', () => {
    const isVisibleRows = [
        [3, 0, 3, 7, 3],
        [2, 5, 5, 1, 2],
        [6, 5, 3, 3, 2],
        [3, 3, 5, 4, 9],
        [3, 5, 3, 9, 0],
    ];
    const isVisibleCols = [
        [3, 2, 6, 3, 3],
        [0, 5, 5, 3, 5],
        [3, 5, 3, 5, 3],
        [7, 1, 3, 4, 9],
        [3, 2, 2, 9, 0],
    ];

    test('isVisibleRows, isVisibleCols, 0, 0', () => {
        expect(treetopTreeHouse.isVisible(isVisibleRows, isVisibleCols, 0, 0)).toBe(true);
    });

    test('isVisibleRows, isVisibleCols, 1, 1', () => {
        expect(treetopTreeHouse.isVisible(isVisibleRows, isVisibleCols, 1, 1)).toBe(true);
    });

    test('isVisibleRows, isVisibleCols, 1, 2', () => {
        expect(treetopTreeHouse.isVisible(isVisibleRows, isVisibleCols, 1, 2)).toBe(true);
    });

    test('isVisibleRows, isVisibleCols, 1, 3', () => {
        expect(treetopTreeHouse.isVisible(isVisibleRows, isVisibleCols, 1, 3)).toBe(false);
    });

    test('isVisibleRows, isVisibleCols, 2, 1', () => {
        expect(treetopTreeHouse.isVisible(isVisibleRows, isVisibleCols, 2, 1)).toBe(true);
    });

    test('isVisibleRows, isVisibleCols, 2, 2', () => {
        expect(treetopTreeHouse.isVisible(isVisibleRows, isVisibleCols, 2, 2)).toBe(false);
    });

    test('isVisibleRows, isVisibleCols, 2, 3', () => {
        expect(treetopTreeHouse.isVisible(isVisibleRows, isVisibleCols, 2, 3)).toBe(true);
    });

    test('isVisibleRows, isVisibleCols, 3, 1', () => {
        expect(treetopTreeHouse.isVisible(isVisibleRows, isVisibleCols, 3, 1)).toBe(false);
    });

    test('isVisibleRows, isVisibleCols, 3, 2', () => {
        expect(treetopTreeHouse.isVisible(isVisibleRows, isVisibleCols, 3, 2)).toBe(true);
    });

    test('isVisibleRows, isVisibleCols, 3, 3', () => {
        expect(treetopTreeHouse.isVisible(isVisibleRows, isVisibleCols, 3, 3)).toBe(false);
    });

    test('isVisibleRows, isVisibleCols, 4, 4', () => {
        expect(treetopTreeHouse.isVisible(isVisibleRows, isVisibleCols, 4, 4)).toBe(true);
    });
});

describe('scenicScore', () => {
    const scenicScoreRows = [
        [3, 0, 3, 7, 3],
        [2, 5, 5, 1, 2],
        [6, 5, 3, 3, 2],
        [3, 3, 5, 4, 9],
        [3, 5, 3, 9, 0],
    ];
    const scenicScoreCols = [
        [3, 2, 6, 3, 3],
        [0, 5, 5, 3, 5],
        [3, 5, 3, 5, 3],
        [7, 1, 3, 4, 9],
        [3, 2, 2, 9, 0],
    ];

    test('scenicScoreRows, scenicScoreCols, 0, 0', () => {
        expect(treetopTreeHouse.scenicScore(scenicScoreRows, scenicScoreCols, 0, 0)).toBe(0);
    });

    test('scenicScoreRows, scenicScoreCols, 1, 1', () => {
        expect(treetopTreeHouse.scenicScore(scenicScoreRows, scenicScoreCols, 1, 1)).toBe(0);
    });

    test('scenicScoreRows, scenicScoreCols, 1, 2', () => {
        expect(treetopTreeHouse.scenicScore(scenicScoreRows, scenicScoreCols, 1, 2)).toBe(4);
    });

    test('scenicScoreRows, scenicScoreCols, 1, 3', () => {
        expect(treetopTreeHouse.scenicScore(scenicScoreRows, scenicScoreCols, 1, 3)).toBe(1);
    });

    test('scenicScoreRows, scenicScoreCols, 2, 1', () => {
        expect(treetopTreeHouse.scenicScore(scenicScoreRows, scenicScoreCols, 2, 1)).toBe(6);
    });

    test('scenicScoreRows, scenicScoreCols, 2, 2', () => {
        expect(treetopTreeHouse.scenicScore(scenicScoreRows, scenicScoreCols, 2, 2)).toBe(1);
    });

    test('scenicScoreRows, scenicScoreCols, 2, 3', () => {
        expect(treetopTreeHouse.scenicScore(scenicScoreRows, scenicScoreCols, 2, 3)).toBe(2);
    });

    test('scenicScoreRows, scenicScoreCols, 3, 1', () => {
        expect(treetopTreeHouse.scenicScore(scenicScoreRows, scenicScoreCols, 3, 1)).toBe(1);
    });

    test('scenicScoreRows, scenicScoreCols, 3, 2', () => {
        expect(treetopTreeHouse.scenicScore(scenicScoreRows, scenicScoreCols, 3, 2)).toBe(8);
    });

    test('scenicScoreRows, scenicScoreCols, 3, 3', () => {
        expect(treetopTreeHouse.scenicScore(scenicScoreRows, scenicScoreCols, 3, 3)).toBe(3);
    });

    test('scenicScoreRows, isVisibleCols, 4, 4', () => {
        expect(treetopTreeHouse.scenicScore(scenicScoreRows, scenicScoreCols, 4, 4)).toBe(0);
    });
});

describe('solve', () => {
    test('[[[3, 0, 3, 7, 3], [2, 5, 5, 1, 2], [6, 5, 3, 3, 2], [3, 3, 5, 4, 9], [3, 5, 3, 9, 0]], [[3, 2, 6, 3, 3], [0, 5, 5, 3, 5], [3, 5, 3, 5, 3], [7, 1, 3, 4, 9], [3, 2, 2, 9, 0]]]', () => {
        expect(treetopTreeHouse.solve([[[3, 0, 3, 7, 3], [2, 5, 5, 1, 2], [6, 5, 3, 3, 2], [3, 3, 5, 4, 9], [3, 5, 3, 9, 0]], [[3, 2, 6, 3, 3], [0, 5, 5, 3, 5], [3, 5, 3, 5, 3], [7, 1, 3, 4, 9], [3, 2, 2, 9, 0]]])).toBe(21);
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            treetopTreeHouse.solveInputs(`30373
25512
65332
33549
35390`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: 21',
            ]
        );
    });
});

describe('solveInputs - part 2', () => {
    test('sample.in', () => {
        expect(
            treetopTreeHousePart2.solveInputs(`30373
25512
65332
33549
35390`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: 8',
            ]
        );
    });
});
