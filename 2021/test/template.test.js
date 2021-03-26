const { solve, solveInputs } = require('../template/index');

describe('solve', () => {
    test('one', () => {
        expect(solve('one')).toBe('one');
    });
    
    test('two', () => {
        expect(solve('two')).toBe('two');
    });
    
    test('three', () => {
        expect(solve('three')).toBe('three');
    });
    
    test('four', () => {
        expect(solve('four')).toBe('four');
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            solveInputs(`3
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
