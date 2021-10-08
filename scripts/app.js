// ? Tetris
// ? Create a Grid width = 12, height 20
// * Create one block - use matrix.
// * Create array with seven different shapes of blocks - 'tetriminos'
// * Create array with seven different colours. Will choose them randomly.
// ? Create score variable and score button to show the result.
// * Create level button

// * Random block appears on a top
// * How blocks are dropping down - setInterval? (remove - define new position - add  new position)?
// * How to stop (freeze) the piece when it is on the bottom?
// *
// *
// * How to detect collision with bottom row?
// * How to make the row to disappear? How to find that all cells of a row are filled in?
// * How the blocks placed above fall one rank, when a line is completed.
// * It is possible to complete up to four lines simultaneously with the use of the I-shaped tetrimino; this move is called a "Tetris", and is the basis of the game's title.

// * How to connect rotation and left/right moves to the keybord?
// * How to detect collision with a wall, and to stop block to run out of the grid.
// * How to rotate near the wall?

// * Detect colision with top? While loop - drop down pieces untill some piece is higher || equal the top of the grid.
// * Create the way of storing high score.
// * Rotation of blocks - combination of a pair of keys
// * How to move to the next level, when playeyer accumulates special ammount of points.
// * increase the speed with each level
// * How to reset the game?
function init() {
  // * ---> GRID <---
  const score = document.querySelector('score')
  const level = document.querySelector('level')
  const grid = document.querySelector('.grid')
  const gridWidth = 12
  const gridHeight = 20
  const cells = []
  const cellCount = gridWidth * gridHeight
  const playField = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]

  function createGrid() {
    for (let y = 0; y < gridHeight; y++) {
      for (let x = 0; x < gridWidth; x++) {
        const cell = document.createElement('div')
        cell.className = 'cell'
        grid.appendChild(cell)
        cells.push(cell)
      }
    }
  }

  // // * --->  <---

  createGrid()
}
window.addEventListener('DOMContentLoaded', init)
