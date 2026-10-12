# Day 04 - React Practice

This folder contains Day 04 React practice tasks.

## Topics Covered

- `useState`
- Conditional Rendering
- Event Handling
- Toggle Functionality
- Controlled Inputs
- Character Counting
- `maxLength`
- Dynamic UI Updates

## Components

### 1. Accordion

- Uses `useState` to manage whether the accordion is open or closed
- Displays a question and answer
- Clicking the question toggles the answer visibility
- Clicking again hides the answer
- Uses a dropdown arrow to indicate open and closed state
- Uses conditional rendering with `&&`

### 2. CharacterCounter

- Uses `useState` to store the text entered by the user
- Uses a controlled textarea
- Displays the number of characters entered
- Displays the number of characters remaining
- Limits the maximum input length to 100 characters using `maxLength`

## How to Run

Open the Day-04 folder in the terminal:

```bash
cd Day-04

Install dependencies:
npm install

Start the Vite development server:
npm run dev

Open the local URL shown in the terminal, usually:
http://localhost:5173/