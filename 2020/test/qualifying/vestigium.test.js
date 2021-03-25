const vestigium = require('../../qualifying/vestigium/index');

describe('solve', () => {
    test('[[1, 2, 3, 4], [2, 1, 4, 3], [3, 4, 1, 2], [4, 3, 2, 1]]', () => {
        // The following latin square should have a trace of 4, 0 rows with duplicates and 0 columns with duplicates.
        // Trace (1 + 1 + 1 + 1)
        // Rows with duplicates: none
        // Columns with duplicates: none
        // 1 2 3 4
        // 2 1 4 3
        // 3 4 1 2
        // 4 3 2 1
        expect(vestigium.solve([[1, 2, 3, 4], [2, 1, 4, 3], [3, 4, 1, 2], [4, 3, 2, 1]])).toEqual([4, 0, 0]);
    });

    test('[[2, 2, 2, 2], [2, 3, 2, 3], [2, 2, 2, 3], [2, 2, 2, 2]]', () => {
        // The following latin square should have a trace of 9, 4 rows with duplicates and 4 columns with duplicates.
        // Trace (2 + 3 + 2 + 2)
        // Rows with duplicates: 1st, 2nd, 3rd and 4th
        // Columns with duplicates: 1st, 2nd, 3rd and 4th
        // 2 2 2 2
        // 2 3 2 3
        // 2 2 2 3
        // 2 2 2 2
        expect(vestigium.solve([[2, 2, 2, 2], [2, 3, 2, 3], [2, 2, 2, 3], [2, 2, 2, 2]])).toEqual([9, 4, 4]);
    });

    test('[[2, 1, 3], [1, 3, 2], [1, 2, 3]]', () => {
        // The following latin square should have a trace of 8, 0 rows with duplicates and 2 columns with duplicates.
        // Trace (2 + 3 + 3)
        // Rows with duplicates: none
        // Columns with duplicates: 1st, 2nd and 3rd
        // 2 1 3
        // 1 3 2
        // 1 2 3
        expect(vestigium.solve([[2, 1, 3], [1, 3, 2], [1, 2, 3]])).toEqual([8, 0, 2]);
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            vestigium.solveInputs(`3
4
1 2 3 4
2 1 4 3
3 4 1 2
4 3 2 1
4
2 2 2 2
2 3 2 3
2 2 2 3
2 2 2 2
3
2 1 3
1 3 2
1 2 3`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: 4 0 0',
                'Case #2: 9 4 4',
                'Case #3: 8 0 2',
            ]
        );
    });
});
