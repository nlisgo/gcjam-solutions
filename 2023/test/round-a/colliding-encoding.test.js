const collidingEncoding = require('../../round-a/colliding-encoding/index');

describe('splitInput', () => {
    test.only('sample.in', () => {
        expect(
            collidingEncoding.splitInput(`2
0 1 2 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
4
ABC
BC
BCD
CDE
0 1 2 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
3
CDE
DEF
EFG`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                [
                    [0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
                    ['ABC', 'BC', 'BCD', 'CDE'],
                ],
                [
                    [0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
                    ['CDE', 'DEF', 'EFG'],
                ],
            ]
        );
    });
});

describe('encodeWord', () => {
    test.only('ABC, [0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],', () => {
        expect(collidingEncoding.encodeWord('ABC', [0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3])).toBe('012');
    });
});

describe('solve', () => {
    test('[0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], [ABC, BC, BCD, CDE]', () => {
        expect(collidingEncoding.solve([0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], ['ABC', 'BC', 'BCD', 'CDE'])).toBe('NO');
    });

    test('[0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], [CDE, DEF, EFG]', () => {
        expect(collidingEncoding.solve([0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], ['CDE', 'DEF', 'EFG'])).toBe('YES');
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            collidingEncoding.solveInputs(`2
0 1 2 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
4
ABC
BC
BCD
CDE
0 1 2 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
3
CDE
DEF
EFG`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: NO',
                'Case #2: YES',
            ]
        );
    });
});
