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
## Round A

<!-- stage-start: round-a -->

### Collround-a:colliding-encodinging Encoding

<!-- problem-start: round-a:colliding-encoding -->

```
cat ./round-a/colliding-encoding/sample.in | docker run -i -v $(pwd):/app -w /app/round-a/colliding-encoding node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test round-a/colliding-encoding.test.js
```

<!-- problem-end: round-a:colliding-encoding -->

### Illumination Optimization

<!-- problem-start: round-a:illumination-optimization -->

```
cat ./round-a/illumination-optimization/sample.in | docker run -i -v $(pwd):/app -w /app/round-a/illumination-optimization node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test round-a/illumination-optimization.test.js
```

<!-- problem-end: round-a:illumination-optimization -->

### Rainbow Sort

<!-- problem-start: round-a:rainbow-sort -->

```
cat ./round-a/rainbow-sort/sample.in | docker run -i -v $(pwd):/app -w /app/round-a/rainbow-sort node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test round-a/rainbow-sort.test.js
```

<!-- problem-end: round-a:rainbow-sort -->

### ASCII Art

<!-- problem-start: round-a:ascii-art -->

```
cat ./round-a/ascii-art/sample.in | docker run -i -v $(pwd):/app -w /app/round-a/ascii-art node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test round-a/ascii-art.test.js
```

<!-- problem-end: round-a:ascii-art -->

<!-- stage-end: round-a -->
