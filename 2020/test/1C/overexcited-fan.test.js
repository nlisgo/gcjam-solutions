const solve = require('../../1C/overexcited-fan/index');

test('3 0 SNSS', () => {
    expect(solve(...'3 0 SNSS'.split(' '))).toBe('IMPOSSIBLE');
});

test('2 10 NSNNSN', () => {
    expect(solve(...'2 10 NSNNSN'.split(' '))).toBe('IMPOSSIBLE');
});

test('0 1 S', () => {
    expect(solve(...'0 1 S'.split(' '))).toBe(1);
});

test('2 7 SSSSSSSS', () => {
    expect(solve(...'2 7 SSSSSSSS'.split(' '))).toBe(5);
});

test('3 2 SSSW', () => {
    expect(solve(...'3 2 SSSW'.split(' '))).toBe(4);
});

test('4 0 NESW', () => {
    expect(solve(...'4 0 NESW'.split(' '))).toBe(4);
});

test('0 0 NESW', () => {
    expect(solve(...'0 0 NESW'.split(' '))).toBe(0);
});
