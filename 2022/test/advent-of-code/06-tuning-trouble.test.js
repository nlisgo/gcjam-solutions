const tuningTrouble = require('../../advent-of-code/06-tuning-trouble/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            tuningTrouble.splitInput(`bvwbjplbgvbhsrlpgdmjqwftvncz
nppdvjthqldpwncqszvftbrmjlhg
nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg
zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'bvwbjplbgvbhsrlpgdmjqwftvncz',
                'nppdvjthqldpwncqszvftbrmjlhg',
                'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg',
                'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw',
            ]
        );
    });
});

describe('solve', () => {
    test('bvwbjplbgvbhsrlpgdmjqwftvncz', () => {
        expect(tuningTrouble.solve('bvwbjplbgvbhsrlpgdmjqwftvncz')).toBe(5);
    });

    test('nppdvjthqldpwncqszvftbrmjlhg', () => {
        expect(tuningTrouble.solve('nppdvjthqldpwncqszvftbrmjlhg')).toBe(6);
    });

    test('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', () => {
        expect(tuningTrouble.solve('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).toBe(10);
    });

    test('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', () => {
        expect(tuningTrouble.solve('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).toBe(11);
    });

    test("'mjqjpqmgbljsphdztnvjfqwrcgsmlb', 14", () => {
        expect(tuningTrouble.solve('mjqjpqmgbljsphdztnvjfqwrcgsmlb', 14)).toBe(19);
    });

    test("'bvwbjplbgvbhsrlpgdmjqwftvncz', 14", () => {
        expect(tuningTrouble.solve('bvwbjplbgvbhsrlpgdmjqwftvncz', 14)).toBe(23);
    });

    test("'nppdvjthqldpwncqszvftbrmjlhg', 14", () => {
        expect(tuningTrouble.solve('nppdvjthqldpwncqszvftbrmjlhg', 14)).toBe(23);
    });

    test("'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 14", () => {
        expect(tuningTrouble.solve('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 14)).toBe(29);
    });

    test("'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 14", () => {
        expect(tuningTrouble.solve('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 14)).toBe(26);
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            tuningTrouble.solveInputs(`bvwbjplbgvbhsrlpgdmjqwftvncz
nppdvjthqldpwncqszvftbrmjlhg
nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg
zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: 5',
                'Case #2: 6',
                'Case #3: 10',
                'Case #4: 11',
            ]
        );
    });
});
