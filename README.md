# Saga Mood Ring Gallery

Saga Mood Ring Gallery is an image carousel that does not rely on any pre-built carousel functionality. It allows users to scroll back and forth between 5 images in a continuous loop, add tags to a particular image, and see all tags associated with an image displayed beneath it. 

## Built With
* React
* React Redux
* Node.js
* Express
* PostgreSQL
* Material-UI

## Getting Started

### Prerequisites
* Node.js
* nodemon
* PostgreSQL

### Installing
Steps to get the development environment running.

1. Fork and clone repository.
2. Make a PostgreSQL database called `saga_weekend`. Set up database tables via instructions in `database.sql` in repository. 
3. Inside the project folder, in the terminal run `npm install` and `npm run server`.
4. Open a new terminal window and start the application by running `npm run client`.

## Screenshots
<img src="wireframes/main-view.png" width="600">

### Completed Features
- [x] Client-side view that displays a single image at a time, using data from database.
- [x] Each image has ability to cycle through to the next/previous image.
- [x] Allow users to assign tags to each image and save this information in the database. 
- [x] Utilize Sagas for API requests to server

### Next Steps
- [ ] Allow users to delete tags from an image.
- [ ] Give each tag associated to an image a different color
- [ ] Implement a form to add new tags and/or images

## Authors
Rachel Schoenmann

## Acknowledgements
* Prime Digital Academy
* My entire cohort!
