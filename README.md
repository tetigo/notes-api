Notes API

A simple RESTful API to manage notes, built with Node.js and Express. Data is stored in memory, so nothing is saved permanently.

Video Screen:
part 1: https://www.loom.com/share/1b65ec647cba40c2b98580ee9dd38d20
part 2: https://www.loom.com/share/36406c7ee9c543b48f038c8258574cdb


Features

Create a note (POST /api/notes)

Get all notes (GET /api/notes)

Get a single note by ID (GET /api/notes/:id)

Update a note (PUT /api/notes/:id)

Delete a note (DELETE /api/notes/:id)

How to run

Clone the project

Install dependencies:

npm install


Start the server:

npm run dev


Use Postman or any API client to test the endpoints.

Notes

Data is stored in memory, so it will reset every time the server restarts.

This is a simple project for demonstration purposes.