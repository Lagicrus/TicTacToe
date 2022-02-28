# TicTacToe

This is a simple game of tic-tac-toe created in React for either 1 or 2 players

Note: This is a work in progress so the "AI" isn't that smart yet.

## Installation
* Git clone this project
* Navigate into the project folder
* Run `npm i` to install all the packages used

## Packages Used
* @emotion/react (@emotion/styled) for styling and customising how components look as one method of it
* @fontsource/roboto for the font used so its locally provided
* @mui/icons,materials,styles,system for the UI components used to make the game look nice and improve the development experience
* clsx to handle class concatenation & optional handling
* eslint for code linting
* prop-types for prop hinting and validation

## Usage
* Run `npm start` to start the game
* The game is played by clicking on the board to place a piece
* The game is won by the first player to get 3 in a row
* You can reset the game by clicking on the reset button at the top left next to the title
* Default is 1 player but you can change to 2 players by clicking on the 2 player button at the top right next to the title

OR

* Run `npm build` to build the game for production
* Then host the game with a http-server of your choice

