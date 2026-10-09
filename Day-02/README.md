# Day 02 - React Practice

This folder contains Day 02 React practice tasks.

## Topics Covered

- Conditional Rendering
- `useState`
- Props
- Event Handling
- Controlled Inputs
- Array `.filter()`
- Array `.map()`
- Parent-Child Communication
- Callback Props

## Components

### 1. LoginStatus

- Uses `useState`
- Login/Logout toggle
- Displays different messages based on login state

### 2. ProductCard

- Receives `name` and `price` through props
- Displays product details
- Uses event handling for Add to Cart
- Displays `Added to cart!` after clicking the button

### 3. UserSearch

- Contains a predefined array of users
- Uses `useState` to store search text
- Uses `.filter()` to find matching users
- Uses `.map()` to display filtered users

### 4. MessageApp and MessageForm

- Demonstrates parent-child communication
- Parent passes a callback function to the child through props
- Child sends the entered message back to the parent
- Parent updates its state and displays the received message

## How to Run

```bash
cd Day-02

Install dependencies:
npm install

Start the Vite development server:
npm run dev

Open the local URL shown in the terminal, usually:
http://localhost:5173/
```