# gcjam

My solutions for Google Code Jam organised by year and stage.

## Bolierplate

See: https://github.com/nlisgo/gcjam

## Create starting code for new problem

Clone this repo and navigate to the repo folder locally:
```
git clone git@github.com:nlisgo/gcjam-solutions.git
cd gcjam-solutions
```

Install dependencies:

```
docker run -it -v $(pwd):/app -w /app node npm install
```

Ensure create script is working:

```
docker run -it -v $(pwd):/app -w /app node npx gcjam-create --help
```

> Usage: create [-h] [-V] [-r] [-st "Stage Title"] [-pt "Problem Title"] [-pv "problemVariable"] year stage problem

### Example

```
docker run -it -v $(pwd):/app -w /app node npx gcjam-create -r -st "Qualification" -pt "Problem Title" -pv "problemTitle" 2022 qualifying problem-name
```

If this is the first time setting up for the 2022 folder then the folder should have been create with boiler plate code.

See the README in the 2022 folder.
