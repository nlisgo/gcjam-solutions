const template = require('../template/index');

describe('solve', () => {
    test('one', () => {
        expect(template.solve('one')).toBe('one');
    });
    
    test('two', () => {
        expect(template.solve('two')).toBe('two');
    });
    
    test('three', () => {
        expect(template.solve('three')).toBe('three');
    });
    
    test('four', () => {
        expect(template.solve('four')).toBe('four');
    });
});

describe('solveInputs', () => {
    test('[5, one, two, three, four, five]', () => {
        expect(
            template.solveInputs([
                '5',
                'one',
                'two',
                'three',
                'four',
                'five',
            ])
        )
        .toStrictEqual(
            [
                'Case #1: one',
                'Case #2: two',
                'Case #3: three',
                'Case #4: four',
                'Case #5: five',
            ]
        );
    });
});
