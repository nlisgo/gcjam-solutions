const reversort = require('../../qualifying/reversort-engineering/index');

describe('solve', () => {
    test('one', () => {
        expect(reversort.solve('one')).toBe('one');
    });
    
    test('two', () => {
        expect(reversort.solve('two')).toBe('two');
    });
    
    test('three', () => {
        expect(reversort.solve('three')).toBe('three');
    });
    
    test('four', () => {
        expect(reversort.solve('four')).toBe('four');
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            reversort.solveInputs(`3
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
