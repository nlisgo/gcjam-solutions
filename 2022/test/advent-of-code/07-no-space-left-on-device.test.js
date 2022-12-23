const noSpaceLeftOnDevice = require('../../advent-of-code/07-no-space-left-on-device/index');
const noSpaceLeftOnDevicePart2 = require('../../advent-of-code/07-no-space-left-on-device/index-part2');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            noSpaceLeftOnDevice.splitInput(`$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                [
                    [
                        ['/'],
                        ['/', 'a/'],
                        ['/', 'a/', 'e/'],
                        ['/', 'd/'],
                    ],
                    [
                        '/14848514',
                        '/8504156',
                        '/a/29116',
                        '/a/2557',
                        '/a/62596',
                        '/a/e/584',
                        '/d/4060174',
                        '/d/8033020',
                        '/d/5626152',
                        '/d/7214296',
                    ],
                ],
            ]
        );
    });
});

describe('filesByDirectory', () => {
    test("[['/'], ['/', 'a/'], ['/', 'a/', 'e/'], ['/', 'd/']], [ '/14848514', '/8504156', '/a/29116', '/a/2557', '/a/62596', '/a/e/584', '/d/4060174', '/d/8033020', '/d/5626152', '/d/7214296']", () => {
        expect(noSpaceLeftOnDevice.filesByDirectory([
            ['/'],
            ['/', 'a/'],
            ['/', 'a/', 'e/'],
            ['/', 'd/'],
        ],
        [
            '/14848514',
            '/8504156',
            '/a/29116',
            '/a/2557',
            '/a/62596',
            '/a/e/584',
            '/d/4060174',
            '/d/8033020',
            '/d/5626152',
            '/d/7214296',
        ])).toStrictEqual([
            [
                14848514,
                8504156,
                29116,
                2557,
                62596,
                584,
                4060174,
                8033020,
                5626152,
                7214296,
            ],
            [
                29116,
                2557,
                62596,
                584,
            ],
            [
                584,
            ],
            [
                4060174,
                8033020,
                5626152,
                7214296,
            ],
        ]);
    });
});

describe('solve', () => {
    test("[[['/'], ['/', 'a/'], ['/', 'a/', 'e/'], ['/', 'd/']], [ '/14848514', '/8504156', '/a/29116', '/a/2557', '/a/62596', '/a/e/584', '/d/4060174', '/d/8033020', '/d/5626152', '/d/7214296']]", () => {
        expect(noSpaceLeftOnDevice.solve([[['/'], ['/', 'a/'], ['/', 'a/', 'e/'], ['/', 'd/']], [ '/14848514', '/8504156', '/a/29116', '/a/2557', '/a/62596', '/a/e/584', '/d/4060174', '/d/8033020', '/d/5626152', '/d/7214296']])).toBe(95437);
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            noSpaceLeftOnDevice.solveInputs(`$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: 95437',
            ]
        );
    });
});

describe('solveInputs - part 2', () => {
    test('sample.in', () => {
        expect(
            noSpaceLeftOnDevicePart2.solveInputs(`$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: 24933642',
            ]
        );
    });
});
