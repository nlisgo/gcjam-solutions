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

### Counting Sheep

<!-- problem-start: qualifying:counting-sheep -->

```
cat ./qualifying/counting-sheep/sample.in | docker run -i -v $(pwd):/app -w /app/qualifying/counting-sheep node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test qualifying/counting-sheep.test.js
```

<!-- problem-end: qualifying:counting-sheep -->

### Revenge of the Pancakes

<!-- problem-start: qualifying:revenge-of-the-pancakes -->

```
cat ./qualifying/revenge-of-the-pancakes/sample.in | docker run -i -v $(pwd):/app -w /app/qualifying/revenge-of-the-pancakes node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test qualifying/revenge-of-the-pancakes.test.js
```

<!-- problem-end: qualifying:revenge-of-the-pancakes -->

<!-- stage-end: qualifying -->
