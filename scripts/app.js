// ? Tetris

// / Create score variable and score box to show the result.
// / Create level box
// / How blocks are dropping down - setTimeout? 1s are chanching on 0, bottom 0s are changing on 1. setTimeout in setTimeout.
// / How to detect collision with bottom row? fuctionn to check if is possible to move down.
// / How to stop (freeze) the piece when it is on the bottom? function check if it is bottom line?
// / how to detect freezed pices and stop moving the block.
// / How to connect left/right moves to the keybord?
// / How to detect collision with a wall, and to stop block to run out of the grid. functions canMoveRight? canMoveLeft?
// * How to make the row to disappear? How to find that all cells of a row are filled in?

// * Create one block - use matrix.
// * Create array with seven different shapes of blocks - 'tetriminos'
// * Create array with seven different colours. Will choose them randomly.
// * Random block appears on a top

// * ROTATION
// * How to connect rotation to the keybord?
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
  let gameSpeed = 300

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
    [0, 0, 0, 0, 0, 0, 2, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 2, 0, 0],
  ]

  function createNewGrid() {
    let gridInnerText = ''
    for (let y = 0; y < gridRows; y++) {
      for (let x = 0; x < gridColumns; x++) {
        if (playField[y][x] === 1) {
          // if on a playingField there are 1s, they will be coloured in blue. adding class movingCell.
          gridInnerText += '<div class="cell movingCell"></div>'
        } else if (playField[y][x] === 2) {
          // if on a playingField there are 2s, they will be coloured in yellow. adding class freezedCell.
          gridInnerText += '<div class="cell freezedCell"></div>'
        } else {
          gridInnerText += '<div class="cell"></div>'
        }
      }
    }
    grid.innerHTML = gridInnerText
  }
  createNewGrid()

  // * ---> MOVE BLOCK, MOVE FUNCTION, FREEZE FUNCTION <--- * //
  // we need a function to check if block can move down
  function canMoveDown() {
    for (let y = gridRows - 1; y >= 0; y--) {
      for (let x = 0; x < gridColumns; x++) {
        if (playField[y][x] === 1) {
          if (y === gridRows - 1 || playField[y + 1][x] === 2) {
            return false
          }
        }
      }
    }
    return true
  }

  function checkLines() {
    let removeRow = true
    for (let y = 0; y < gridRows; y++) {
      for (let x = 0; x < gridColumns; x++) {
        if (playField[y][x] !== 2) {
          removeRow = false
        }
      }
      if (removeRow) {
        // if a row has only 2s we can remove row with index y.
        playField.splice(y, 1)
        // we have to add new row.
        playField.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      // we have to change removeRow to true, because checking next row should start from true.
      removeRow = true
    }
  }

  function freezeBlock() {
    for (let y = gridRows - 1; y >= 0; y--) {
      for (let x = 0; x < gridColumns; x++) {
        if (playField[y][x] === 1) {
          // block freezed and changed color to yellow
          playField[y][x] = 2
        }
      }
    }
    checkLines()
    // When block freezed, we need to call new one.
    playField[0] = [0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
    playField[1] = [0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
  }

  function moveBlockDown() {
    if (canMoveDown()) {
      //if we start checking from top to bottom - firs 1 is changing on 0, when we are checking new row we are cganging the same 1 on 0, creating a bug. We need to check from bottom to top. Remove, define, add new position.
      for (let y = gridRows - 1; y >= 0; y--) {
        for (let x = 0; x < gridColumns; x++) {
          if (playField[y][x] === 1) {
            playField[y + 1][x] = 1
            playField[y][x] = 0
          }
        }
      }
    } else {
      // if block can`t go domn, we have to freeze it.
      freezeBlock()
    }
  }

  // * ---> KEY CONTROL, FUNCTIONS <--- * //
  // * // MOVE LEFT ***********************
  function canMoveLeft() {
    for (let y = gridRows - 1; y >= 0; y--) {
      for (let x = 0; x < gridColumns; x++) {
        if (playField[y][x] === 1) {
          // if block already moving on x===0, block can`t move left
          if (x === 0 || playField[y][x - 1] === 2) {
            return false
          }
        }
      }
    }
    return true
  }
  function moveBlockLeft() {
    // Check if it is possible to move left - true or false
    if (canMoveLeft()) {
      for (let y = gridRows - 1; y >= 0; y--) {
        for (let x = 0; x < gridColumns; x++) {
          if (playField[y][x] === 1) {
            playField[y][x - 1] = 1
            playField[y][x] = 0
          }
        }
      }
    }
  }
  // * // MOVE RIGHT ***********************
  function canMoveRight() {
    for (let y = gridRows - 1; y >= 0; y--) {
      for (let x = 0; x < gridColumns; x++) {
        if (playField[y][x] === 1) {
          // if block already moving on x===gridColumn -1, block can`t move left
          if (x === gridColumns - 1 || playField[y][x + 1] === 2) {
            return false
          }
        }
      }
    }
    return true
  }
  function moveBlockRight() {
    // Check if it is possible to move right - true or false
    if (canMoveRight()) {
      for (let y = gridRows - 1; y >= 0; y--) {
        for (let x = gridColumns - 1; x >= 0; x--) {
          if (playField[y][x] === 1) {
            playField[y][x + 1] = 1
            playField[y][x] = 0
          }
        }
      }
    }
  }
  function handleKeyUp(event) {
    const key = event.keyCode
    if (key === 37) {
      // Move left
      moveBlockLeft()
      console.log('LEFT')
    } else if (key === 39) {
      // Move right
      moveBlockRight()
      console.log('RIGHT')
    } else if (key === 40) {
      // Move down - adding function moveBlockDown.
      moveBlockDown()
      console.log('DOWN')
    }
  }
  document.addEventListener('keyup', handleKeyUp)

  // * ---> START GAME FUNCTION <--- * //
  // If we will call functions moveBlockDown and creatGrid, our block will move.
  //Function startGame with setTimeout will move block down every gameSpead.
  function startGame() {
    moveBlockDown()
    createNewGrid()
    // startGame() - is not working, block immediately felling down on the bottom. we neen to add delay - setTimeout. We have to add another timer to move it down, because now block is moving only once.
    setTimeout(startGame, gameSpeed)
  }
  setTimeout(startGame, gameSpeed)

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
}
window.addEventListener('DOMContentLoaded', init)
