const ropeBridge = require('../../advent-of-code/09-rope-bridge/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            ropeBridge.splitInput(`R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                [
                    ['x', 4],
                    ['y', 4],
                    ['x', -3],
                    ['y', -1],
                    ['x', 4],
                    ['y', -1],
                    ['x', -5],
                    ['x', 2],
                ],
            ]
        );
    });
});

describe('headSteps', () => {
    test("['x', 4], ['y', 4], ['x', -3], ['y', -1], ['x', 4], ['y', -1], ['x', -5], ['x', 2]", () => {
        expect(
            ropeBridge.headSteps(
                ['x', 4],
                ['y', 4],
                ['x', -3],
                ['y', -1],
                ['x', 4],
                ['y', -1],
                ['x', -5],
                ['x', 2]
            )
        )
        .toStrictEqual(
            [
                [0, 0],
                [1, 0],
                [2, 0],
                [3, 0],
                [4, 0],
                [4, 1],
                [4, 2],
                [4, 3],
                [4, 4],
                [3, 4],
                [2, 4],
                [1, 4],
                [1, 3],
                [2, 3],
                [3, 3],
                [4, 3],
                [5, 3],
                [5, 2],
                [4, 2],
                [3, 2],
                [2, 2],
                [1, 2],
                [0, 2],
                [1, 2],
                [2, 2],
            ]
        );
    });
});

describe('tailStep', () => {
    test('[0, 0], [1, 0]', () => {
        expect(ropeBridge.tailStep([0, 0], [1, 0])).toStrictEqual([0, 0]);
    });

    test('[0, 0], [2, 0]', () => {
        expect(ropeBridge.tailStep([0, 0], [2, 0])).toStrictEqual([1, 0]);
    });

    test('[1, 0], [3, 0]', () => {
        expect(ropeBridge.tailStep([1, 0], [3, 0])).toStrictEqual([2, 0]);
    });

    test('[2, 0], [4, 0]', () => {
        expect(ropeBridge.tailStep([2, 0], [4, 0])).toStrictEqual([3, 0]);
    });

    test('[3, 0], [4, 1]', () => {
        expect(ropeBridge.tailStep([3, 0], [4, 1])).toStrictEqual([3, 0]);
    });

    test('[3, 0], [4, 2]', () => {
        expect(ropeBridge.tailStep([3, 0], [4, 2])).toStrictEqual([4, 1]);
    });

    test('[4, 1], [4, 3]', () => {
        expect(ropeBridge.tailStep([4, 1], [4, 3])).toStrictEqual([4, 2]);
    });

    test('[4, 2], [4, 4]', () => {
        expect(ropeBridge.tailStep([4, 2], [4, 4])).toStrictEqual([4, 3]);
    });

    test('[4, 3], [3, 4]', () => {
        expect(ropeBridge.tailStep([4, 3], [3, 4])).toStrictEqual([4, 3]);
    });

    test('[4, 3], [2, 4]', () => {
        expect(ropeBridge.tailStep([4, 3], [2, 4])).toStrictEqual([3, 4]);
    });
});

describe('tailSteps', () => {
    test('[0, 0], [[1, 0], [2, 0], [3, 0], [4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [3, 4], [2, 4], [1, 4], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3],[5, 2],[4, 2], [3, 2], [2, 2], [1, 2], [0, 2], [1, 2], [2, 2]]', () => {
        expect(
            ropeBridge.tailSteps(
                [0, 0],
                [
                    [1, 0],
                    [2, 0],
                    [3, 0],
                    [4, 0],
                    [4, 1],
                    [4, 2],
                    [4, 3],
                    [4, 4],
                    [3, 4],
                    [2, 4],
                    [1, 4],
                    [1, 3],
                    [2, 3],
                    [3, 3],
                    [4, 3],
                    [5, 3],
                    [5, 2],
                    [4, 2],
                    [3, 2],
                    [2, 2],
                    [1, 2],
                    [0, 2],
                    [1, 2],
                    [2, 2],
                ]
            )
        )
        .toStrictEqual(
            [
                [0, 0],
                [0, 0],
                [1, 0],
                [2, 0],
                [3, 0],
                [3, 0],
                [4, 1],
                [4, 2],
                [4, 3],
                [4, 3],
                [3, 4],
                [2, 4],
                [2, 4],
                [2, 4],
                [2, 4],
                [3, 3],
                [4, 3],
                [4, 3],
                [4, 3],
                [4, 3],
                [3, 2],
                [2, 2],
                [1, 2],
                [1, 2],
                [1, 2],
            ]
        );
    });
});

describe('solve', () => {
    test("[['x', 4], ['y', 4], ['x', -3], ['y', -1], ['x', 4], ['y', -1], ['x', -5], ['x', 2]]", () => {
        expect(ropeBridge.solve([['x', 4], ['y', 4], ['x', -3], ['y', -1], ['x', 4], ['y', -1], ['x', -5], ['x', 2]])).toBe(13);
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            ropeBridge.solveInputs(`R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: 13',
            ]
        );
    });
});
