## Day 03 - React Practice
This folder contains Day 03 React practice tasks.

## Topics Covered
- useEffect
- useState
- Fetch API
- API Requests
- Loading State
- Array .map()
- Rendering API Data
- Chrome DevTools Network Tab

## Component
## PostList
- Uses useEffect to fetch data from an external API
- Uses useState to store the fetched posts
- Uses a separate loading state
- Displays Loading... while the API request is in progress
- Uses .map() to display the title of each post
- Uses post.id as the key for each rendered list item

## API Used
https://jsonplaceholder.typicode.com/posts
Each post returned by the API contains data such as:
userId
id
title
body

For this task, only the post titles are displayed.

## How to Run
Open the Day-03 folder in the terminal:
cd Day-03

Install dependencies:
npm install

Start the Vite development server:
npm run dev

Open the local URL shown in the terminal, usually:
http://localhost:5173/