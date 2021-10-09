// ? Tetris

// ? Create score variable and score box to show the result.
// ? Create level box

// * How blocks are dropping down - setTimeout? 1s are chanching on 0, bottom 0s are changing on 1.
// * How to stop (freeze) the piece when it is on the bottom? function check if it is bottom line?
// * How to detect collision with bottom row?
// *
// * Create one block - use matrix.
// * Create array with seven different shapes of blocks - 'tetriminos'
// * Create array with seven different colours. Will choose them randomly.

// * Random block appears on a top
// *
// *
// * How to make the row to disappear? How to find that all cells of a row are filled in? All 1s?
// * How the blocks placed above fall one rank, when a line is completed.
// * How to connect rotation and left/right moves to the keybord?
// * How to detect collision with a wall, and to stop block to run out of the grid.
// * How to rotate near the wall?

//? BONUS TASKS
// * Detect colision with top? While loop - drop down pieces untill some piece is higher || equal the top of the grid.
// * It is possible to complete up to four lines simultaneously with the use of the I-shaped tetrimino; this move is called a "Tetris", and is the basis of the game's title.
// * Create the way of storing high score.
// * Rotation of blocks - combination of a pair of keys
// * How to move to the next level, when playeyer accumulates special ammount of points.
// * increase the speed with each level
// * How to reset the game?

function init() {
  // * ---> GRID, FUNCTION CREATE NEW GRID <--- * //
  const score = document.querySelector('score')
  const level = document.querySelector('level')
  const grid = document.querySelector('.grid')

  const gridColumns = 10
  const gridRows = 20

  // Create a Grid width = 12, height 20 - grid should refresh. setTimeout? function to create grid.
  // playfield - contains a picture of a grid on a timebeing. Every time when we change smth it is building new grid with changes.
  let playField = [
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]

  function createNewGrid() {
    let gridInnerText = ''
    for (let y = 0; y < gridRows; y++) {
      for (let x = 0; x < gridColumns; x++) {
        if (playField[y][x] === 1) {
          // if on a playingField there are 1s, they will be coloured in blue. adding class movingCell.
          gridInnerText += '<div class="cell movingCell"></div>'
        } else {
          gridInnerText += '<div class="cell"></div>'
        }
      }
    }
    grid.innerHTML = gridInnerText
  }
  createNewGrid()
  // * ---> MOVE BLOCK, FUNCTION <--- * //
  //if we start checking from top to bottom - firs 1 is changing on 0, when we are checking new row we are cganging the same 1 on 0, creating a bug. We need to check from bottom to top. Remove, define, add new position.
  function moveBlockDown() {
    for (let y = gridRows - 1; y >= 0; y--) {
      for (let x = 0; x < gridColumns; x++) {
        if (playField[y][x] === 1) {
          playField[y + 1][x] = 1
          playField[y][x] = 0
        }
      }
    }
  }

  // * ---> STRAT GAME FUNCTION <--- * //
  // If we will call functions moveBlockDown and creatGrid, our block will move.
  //Function startGame with setTimeout will move block down every 1000 msec.
  function startGame() {
    moveBlockDown()
    createNewGrid()
    // startGame() - is not working, block immediately felling down on the bottom. we neen to add delay.
    //we have to put another timer to move it down, because without block is doing only one movement.
    setTimeout(startGame, 1000)
  }
  setTimeout(startGame, 1000)

  // function createBlock() {
  //     // for (let y = 0; y < gridRows; y++) {
  //     //   for (let x = 0; x < gridColumns; x++) {
  //     //     if (playField[y][x] === 1) {
  //     //       .className = 'blue'
  //     //     } else {
  //     //       .className = 'cell'
  //     //     }
  //     //   }
  //     // }
  //   }

  //   // createBlock()

  //   // * ---> Move block <---

  //   // function moveBlockDown() {
  //   //   for (let y = gridRows - 1; y >= 0; y--) {
  //   //     for (let x = 0; x < gridColumns; x++) {
  //   //       if (playField[y][x] === 1) {
  //   //         // console.log(y)
  //   //         // console.log(x)
  //   //         // console.log(playField[y])
  //   //         playField[y + 1][x] = 1
  //   //         playField[y][x] = 0
  //   //         // console.log(y)
  //   //         // console.log(x)
  //   //       }
  //   //     }
  //   //   }
  //   // }
  //   // moveBlockDown()
}
window.addEventListener('DOMContentLoaded', init)
