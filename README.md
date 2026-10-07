# React Practice

Daily practice to strengthen my React concepts. Each day has a separate folder containing its React project and a `tasks.txt` file with that day’s questions.

## Folder Structure

```text
react-practice/
├── Day-01/
│   ├── tasks.txt
│   ├── src/
│   └── package.json
├── Day-02/
├── Day-03/
└── README.md
```


## How to Run

Install Node.js and npm before starting.

Open a terminal in the `react-practice` folder and run:

```bash
cd Day-01
npm install
npm run dev
```

Open the local URL shown in the terminal.

For another day, replace `Day-01` with that day’s folder name. Each day has its own dependencies, so run `npm install` inside that folder before starting it.

To stop the development server, press `Ctrl+C`.

## Production Build

From inside a day’s folder:

```bash
npm run build
npm run preview
```