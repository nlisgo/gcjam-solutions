const solve = require('../../qualifying/nesting-depth/index');

test('0000', () => {
    expect(solve('0000'.split(''))).toBe('0000');
});

test('101', () => {
    expect(solve('101'.split(''))).toBe('(1)0(1)');
});

test('111000', () => {
    expect(solve('111000'.split(''))).toBe('(111)000');
});

test('1', () => {
    expect(solve('1'.split(''))).toBe('(1)');
});

test('43210', () => {
    expect(solve('43210'.split(''))).toBe('((((4)3)2)1)0');
});

test('43201', () => {
    expect(solve('43201'.split(''))).toBe('((((4)3)2))0(1)');
});

test('930420', () => {
    expect(solve('930420'.split(''))).toBe('(((((((((9))))))3)))0((((4))2))0');
});

test('312', () => {
    expect(solve('312'.split(''))).toBe('(((3))1(2))');
});
