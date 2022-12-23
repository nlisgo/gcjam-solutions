## Prerequisites

- [Docker Desktop]([http://](https://docs.docker.com/get-docker/))

## Testing

### Setup

```
docker run -v $(pwd):/app -w /app/test node npm install
```

### Run all tests

```
docker run -it -v $(pwd):/app -w /app/test node npm test
```

<!-- intro-end -->
## Qualification

<!-- stage-start: qualifying -->

### Punched Cards

<!-- problem-start: qualifying:punched-cards -->

```
cat ./qualifying/punched-cards/sample.in | docker run -i -v $(pwd):/app -w /app/qualifying/punched-cards node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test qualifying/punched-cards.test.js
```

<!-- problem-end: qualifying:punched-cards -->

### 3D Printing

<!-- problem-start: qualifying:3d-printing -->

```
cat ./qualifying/3d-printing/sample.in | docker run -i -v $(pwd):/app -w /app/qualifying/3d-printing node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test qualifying/3d-printing.test.js
```

<!-- problem-end: qualifying:3d-printing -->

### d1000000

<!-- problem-start: qualifying:d1000000 -->

```
cat ./qualifying/d1000000/sample.in | docker run -i -v $(pwd):/app -w /app/qualifying/d1000000 node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test qualifying/d1000000.test.js
```

<!-- problem-end: qualifying:d1000000 -->

<!-- stage-end: qualifying -->

<!-- stage-end: round-1b -->
## Round 1A

<!-- stage-start: round-1a -->

### Double or One Thing

<!-- problem-start: round-1a:double-or-one-thing -->

```
cat ./round-1a/double-or-one-thing/sample.in | docker run -i -v $(pwd):/app -w /app/round-1a/double-or-one-thing node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test round-1a/double-or-one-thing.test.js
```

<!-- problem-end: round-1a:double-or-one-thing -->

<!-- stage-end: round-1a -->
## Round 1B

<!-- stage-start: round-1b -->

### pancake-deque

<!-- problem-start: round-1b:pancake-deque -->

```
cat ./round-1b/pancake-deque/sample.in | docker run -i -v $(pwd):/app -w /app/round-1b/pancake-deque node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test round-1b/pancake-deque.test.js
```

<!-- problem-end: round-1b:pancake-deque -->
## Advent of Code

<!-- stage-start: advent-of-code -->

### 01. Calorie Counting

<!-- problem-start: advent-of-code:01-calorie-counting -->

```
cat ./advent-of-code/01-calorie-counting/sample.in | docker run -i -v $(pwd):/app -w /app/advent-of-code/01-calorie-counting node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test advent-of-code/01-calorie-counting.test.js
```

<!-- problem-end: advent-of-code:01-calorie-counting -->

### 02. Rock Paper Scissors

<!-- problem-start: advent-of-code:02-rock-paper-scissors -->

```
cat ./advent-of-code/02-rock-paper-scissors/sample.in | docker run -i -v $(pwd):/app -w /app/advent-of-code/02-rock-paper-scissors node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test advent-of-code/02-rock-paper-scissors.test.js
```

<!-- problem-end: advent-of-code:02-rock-paper-scissors -->

### 03. Rucksack Rorganization

<!-- problem-start: advent-of-code:03-rucksack-reorganization -->

```
cat ./advent-of-code/03-rucksack-reorganization/sample.in | docker run -i -v $(pwd):/app -w /app/advent-of-code/03-rucksack-reorganization node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test advent-of-code/03-rucksack-reorganization.test.js
```

<!-- problem-end: advent-of-code:03-rucksack-reorganization -->

### 04. Camp Cleanup

<!-- problem-start: advent-of-code:04-camp-cleanup -->

```
cat ./advent-of-code/04-camp-cleanup/sample.in | docker run -i -v $(pwd):/app -w /app/advent-of-code/04-camp-cleanup node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test advent-of-code/04-camp-cleanup.test.js
```

<!-- problem-end: advent-of-code:04-camp-cleanup -->

### 05. Supply Stacks

<!-- problem-start: advent-of-code:05-supply-stacks -->

```
cat ./advent-of-code/05-supply-stacks/sample.in | docker run -i -v $(pwd):/app -w /app/advent-of-code/05-supply-stacks node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test advent-of-code/05-supply-stacks.test.js
```

<!-- problem-end: advent-of-code:05-supply-stacks -->

### 06. TuningTrouble

<!-- problem-start: advent-of-code:06-tuning-trouble -->

```
cat ./advent-of-code/06-tuning-trouble/sample.in | docker run -i -v $(pwd):/app -w /app/advent-of-code/06-tuning-trouble node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test advent-of-code/06-tuning-trouble.test.js
```

<!-- problem-end: advent-of-code:06-tuning-trouble -->

### 07. No Space Left On Device

<!-- problem-start: advent-of-code:07-no-space-left-on-device -->

```
cat ./advent-of-code/07-no-space-left-on-device/sample.in | docker run -i -v $(pwd):/app -w /app/advent-of-code/07-no-space-left-on-device node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test advent-of-code/07-no-space-left-on-device.test.js
```

<!-- problem-end: advent-of-code:07-no-space-left-on-device -->

### 08. Treetop Tree House

<!-- problem-start: advent-of-code:08-treetop-tree-house -->

```
cat ./advent-of-code/08-treetop-tree-house/sample.in | docker run -i -v $(pwd):/app -w /app/advent-of-code/08-treetop-tree-house node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test advent-of-code/08-treetop-tree-house.test.js
```

<!-- problem-end: advent-of-code:08-treetop-tree-house -->

<!-- stage-end: advent-of-code -->
