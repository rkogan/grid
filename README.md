# Clickable Grid

This application renders a clickable grid of tiles.

## Demo Link

Open [https://rkogan.github.io/grid/](https://rkogan.github.io/grid/) to view the app.

## Initial Requirements

- Divide a browser viewport into a 50x50 grid, with a static space for a header
- A user will click n cells in the grid,
those n cells should define a [minimum bounding box](https://en.wikipedia.org/wiki/Minimum_bounding_box), and should color red all of the cells inside that bounding box (including the cells along the boundary)
- If a click is within the current bounding box it should not update the selection
- The grid and bounding box should automatically update (be liquid) when the browser window is resized
- There should be an input that allows the user to change the grid's height and width dimensions to that value
- When a user hits the space bar, it should clear the grid
- When a user changes the grid dimensions, it should clear the grid

## Setup

Clone this repo, then go to the project directory and run:

### `npm install`

## Running the Application Locally

To start the application, run:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Running Tests

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
