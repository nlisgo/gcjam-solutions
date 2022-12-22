const rucksackReorganization = require('../../advent-of-code/03-rucksack-reorganization/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            rucksackReorganization.splitInput(`vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                [
                    'vJrwpWtwJgWrhcsFMMfFFhFp',
                    'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
                    'PmmdzqPrVvPwwTWBwg',
                    'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
                    'ttgJtRGJQctTZtZT',
                    'CrZsJsPPZsGzwwsLwLmpwMDw',
                ],
            ]
        );
    });
});

describe('letterPriority', () => {
    test('p', () => {
        expect(rucksackReorganization.letterPriority('p')).toBe(16);
    });

    test('L', () => {
        expect(rucksackReorganization.letterPriority('L')).toBe(38);
    });

    test('P', () => {
        expect(rucksackReorganization.letterPriority('P')).toBe(42);
    });

    test('v', () => {
        expect(rucksackReorganization.letterPriority('v')).toBe(22);
    });

    test('t', () => {
        expect(rucksackReorganization.letterPriority('t')).toBe(20);
    });

    test('s', () => {
        expect(rucksackReorganization.letterPriority('s')).toBe(19);
    });
});

describe('sharedItems', () => {
    test("'vJrwpWtwJgWr', 'hcsFMMfFFhFp'", () => {
        expect(rucksackReorganization.sharedItems('vJrwpWtwJgWr', 'hcsFMMfFFhFp')).toStrictEqual(['p']);
    });

    test("'jqHRNqRjqzjGDLGL', 'rsFMfFZSrLrFZsSL'", () => {
        expect(rucksackReorganization.sharedItems('jqHRNqRjqzjGDLGL', 'rsFMfFZSrLrFZsSL')).toStrictEqual(['L']);
    });

    test("'PmmdzqPrV', 'vPwwTWBwg'", () => {
        expect(rucksackReorganization.sharedItems('PmmdzqPrV', 'vPwwTWBwg')).toStrictEqual(['P']);
    });

    test("'wMqvLMZHhHMvwLH', 'jbvcjnnSBnvTQFn'", () => {
        expect(rucksackReorganization.sharedItems('wMqvLMZHhHMvwLH', 'jbvcjnnSBnvTQFn')).toStrictEqual(['v']);
    });

    test("'ttgJtRGJ', 'QctTZtZT'", () => {
        expect(rucksackReorganization.sharedItems('ttgJtRGJ', 'QctTZtZT')).toStrictEqual(['t']);
    });

    test("'CrZsJsPPZsGz', 'wwsLwLmpwMDw'", () => {
        expect(rucksackReorganization.sharedItems('CrZsJsPPZsGz', 'wwsLwLmpwMDw')).toStrictEqual(['s']);
    });

    test("'vJrwpWtwJgWrhcsFMMfFFhFp', 'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL', 'PmmdzqPrVvPwwTWBwg'", () => {
        expect(rucksackReorganization.sharedItems('vJrwpWtwJgWrhcsFMMfFFhFp', 'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL', 'PmmdzqPrVvPwwTWBwg')).toStrictEqual(['r']);
    });

    test("'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn', 'ttgJtRGJQctTZtZT', 'CrZsJsPPZsGzwwsLwLmpwMDw'", () => {
        expect(rucksackReorganization.sharedItems('wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn', 'ttgJtRGJQctTZtZT', 'CrZsJsPPZsGzwwsLwLmpwMDw')).toStrictEqual(['Z']);
    });
});

describe('solve', () => {
    test("['vJrwpWtwJgWrhcsFMMfFFhFp','jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL','PmmdzqPrVvPwwTWBwg','wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn','ttgJtRGJQctTZtZT','CrZsJsPPZsGzwwsLwLmpwMDw']", () => {
        expect(rucksackReorganization.solve([
            'vJrwpWtwJgWrhcsFMMfFFhFp',
            'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
            'PmmdzqPrVvPwwTWBwg',
            'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
            'ttgJtRGJQctTZtZT',
            'CrZsJsPPZsGzwwsLwLmpwMDw',
        ])).toBe(157);
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            rucksackReorganization.solveInputs(`vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: 157',
            ]
        );
    });
});
