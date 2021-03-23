## Prerequisites

- [Docker Desktop](https://docs.docker.com/get-docker/)

## Testing

### Setup

```
docker run -v $(pwd):/app -w /app/test node npm install
```

### Run all tests

```
docker run -it -v $(pwd):/app -w /app/test node npm test
```

## Qualifying

### Indicium

```
cat ./qualifying/indicium/sample.in | docker run -i -v $(pwd):/app -w /app/qualifying/indicium node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test qualifying/indicium.test.js
```

### Nesting Depth

```
cat ./qualifying/nesting-depth/sample.in | docker run -i -v $(pwd):/app -w /app/qualifying/nesting-depth node node index.js

cat ./qualifying/nesting-depth/sample-complex.in | docker run -i -v $(pwd):/app -w /app/qualifying/nesting-depth node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test qualifying/nesting-depth.test.js
```

### Parenting Partnering Returns

```
cat ./qualifying/parenting-partnering-returns/sample.in | docker run -i -v $(pwd):/app -w /app/qualifying/parenting-partnering-returns node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test qualifying/parenting-partnering-returns.test.js
```

### Vestigium

```
cat ./qualifying/vestigium/sample.in | docker run -i -v $(pwd):/app -w /app/qualifying/vestigium node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test qualifying/vestigium.test.js
```

## 1C

### Overexcited Fan

```
cat ./1C/overexcited-fan/sample.in | docker run -i -v $(pwd):/app -w /app/1C/overexcited-fan node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test 1C/overexcited-fan.test.js
```
