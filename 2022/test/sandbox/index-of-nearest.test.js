const indexOfNearest = require('../../sandbox/index-of-nearest/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            indexOfNearest.splitInput(`3
4 0 spanner
spanner spanner wrench hammer
4 3 spanner
spanner spanner wrench hammer
7 3 pliers
hammer screwdriver pliers wrench spanner pliers pliers`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                [0, 'spanner', ['spanner', 'spanner', 'wrench', 'hammer']],
                [3, 'spanner', ['spanner', 'spanner', 'wrench', 'hammer']],
                [3, 'pliers', ['hammer', 'screwdriver', 'pliers', 'wrench', 'spanner', 'pliers', 'pliers']],
            ]
        );
    });
});

describe('solve', () => {
    test("[0, 'spanner', ['spanner', 'spanner', 'wrench', 'hammer']]", () => {
        expect(indexOfNearest.solve([0, 'spanner', ['spanner', 'spanner', 'wrench', 'hammer']])).toBe(0);
    });

    test("[3, 'spanner', ['spanner', 'spanner', 'wrench', 'hammer']]", () => {
        expect(indexOfNearest.solve([3, 'spanner', ['spanner', 'spanner', 'wrench', 'hammer']])).toBe(1);
    });

    test("[3, 'pliers', ['hammer', 'screwdriver', 'pliers', 'wrench', 'spanner', 'pliers', 'pliers']]", () => {
        expect(indexOfNearest.solve([3, 'pliers', ['hammer', 'screwdriver', 'pliers', 'wrench', 'spanner', 'pliers', 'pliers']])).toBe(2);
    });

    test("[4, 'pliers', ['hammer', 'screwdriver', 'pliers', 'wrench', 'spanner', 'pliers', 'pliers']]", () => {
        expect(indexOfNearest.solve([4, 'pliers', ['hammer', 'screwdriver', 'pliers', 'wrench', 'spanner', 'pliers', 'pliers']])).toBe(5);
    });

    test("[0, 'drill', ['spanner', 'spanner', 'wrench', 'hammer']]", () => {
        expect(indexOfNearest.solve([0, 'drill', ['spanner', 'spanner', 'wrench', 'hammer']])).toBe(-1);
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            indexOfNearest.solveInputs(`3
4 0 spanner
spanner spanner wrench hammer
4 3 spanner
spanner spanner wrench hammer
7 3 pliers
hammer screwdriver pliers wrench spanner pliers pliers`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: 0',
                'Case #2: 1',
                'Case #3: 2',
            ]
        );
    });
});
