// ? Tetris

// / Create score variable and score box to show the result.
// / Create level box
// / How blocks are dropping down - setTimeout? 1s are chanching on 0, bottom 0s are changing on 1. setTimeout in setTimeout.
// / How to detect collision with bottom row? fuctionn to check if is possible to move down.
// / How to stop (freeze) the piece when it is on the bottom? function check if it is bottom line?
// / how to detect freezed pices and stop moving the block.
// / How to connect left/right moves to the keybord?
// / How to detect collision with a wall, and to stop block to run out of the grid. functions canMoveRight? canMoveLeft?
// / How to make the row to disappear? How to find that all cells of a row are filled in?
// / Create one block - use matrix.
// / Create array with seven different shapes of blocks - 'tetriminos

// * Create array with seven different colours. Will choose them randomly.
// * Random block appears in a center on a top row

// * ROTATION
// / How to connect rotation to the keybord?
// * How to rotate near the wall?

//? BONUS TASKS
// * Detect colision with top? While loop - drop down pieces untill some piece is higher || equal the top of the grid.
// * It is possible to complete up to four lines simultaneously with the use of the I-shaped tetrimino; this move is called a "Tetris", and is the basis of the game's title.
// * Create the way of storing high score.
// * How to move to the next level, when playeyer accumulates special ammount of points.
// * increase the speed with each level
// * How to reset the game?

function init() {
  // * ---> GRID, FUNCTION CREATE NEW GRID <--- * //
  const scoreScreen = document.getElementById('scorespan')
  const levelScreen = document.getElementById('levelspan')
  const grid = document.querySelector('.grid')

  const gridColumns = 10
  const gridRows = 20
  let gameSpeed = 400
  let score = 0
  let level = 1

  // Create a Grid width = 12, height 20 - grid should refresh. setTimeout? function to create grid.
  // playfield - contains a picture of a grid for the time being. Every time when we change smth it is building new grid with changes.
  let playField = [
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
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]

  let blocks = {
    O: [
      [1, 1],
      [1, 1],
    ],
    I: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ],
    S: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
    Z: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    J: [
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    L: [
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0],
    ],
    T: [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ],
  }

  // * ---> ACTIVE BLOCK <--- * //

  let activeBlock = {
    // block coordinates
    x: 4,
    y: 0,
    // we will rotate our block inside the shape
    shape: [
      [1, 1],
      [1, 1],
    ],
  }
  function removeActiveBlock() {
    for (let y = 0; y < gridRows; y++) {
      for (let x = 0; x < gridColumns; x++) {
        if (playField[y][x] === 1) {
          playField[y][x] = 0
        }
      }
    }
  }

  function addActiveBlock() {
    // before adding new block we need to remove preveious on
    removeActiveBlock()
    // add active block to the grid before createNewGrid.
    // we have to loop through activeBlock shape
    for (let y = 0; y < activeBlock.shape.length; y++) {
      for (let x = 0; x < activeBlock.shape[y].length; x++) {
        // check if there are any 1s in ActiveBlock
        if (activeBlock.shape[y][x] === 1) {
          // coordinates of activeBlock( y=o, x=5) plus y and x (to prevent creation of whole block on one cell) = activeBlock.shape[x][y]
          playField[activeBlock.y + y][activeBlock.x + x] =
            activeBlock.shape[y][x]
        }
      }
    }
  }

  function rotateActiveBlock() {
    console.log('NOT YET!')
    // we have to save block before rotation
    const beforeRotationActiveBlock = activeBlock.shape
    activeBlock.shape = activeBlock.shape.map((row, index) =>
      activeBlock.shape.map((item) => item[index]).reverse()
    )
    // if (cantBlockMove()) {
    //   // if we can't rotate shape near the walls, we have to define shape before rotation.
    //   activeBlock.shape = beforeRotationActiveBlock
    // }
  }

  function createNewGrid() {
    let gridInnerText = ''
    const blockColours = [
      'red',
      'blue',
      'orange',
      'green',
      'lilac',
      'darkgreen',
      'pink',
    ]
    const randomColour = Math.floor(Math.random(blockColours) * 7)
    const movingCell = blockColours[randomColour]
    for (let y = 0; y < gridRows; y++) {
      for (let x = 0; x < gridColumns; x++) {
        if (playField[y][x] === 1) {
          // if on a playingField there are 1s, they will be coloured in blue. adding class movingCell.
          gridInnerText += `<div class="cell ${movingCell}"></div>`
        } else if (playField[y][x] === 2) {
          // if on a playingField there are 2s, they will be coloured in yellow. adding class freezedCell.
          gridInnerText += `<div class="cell freezedCell"></div>`
        } else {
          gridInnerText += '<div class="cell"></div>'
        }
      }
    }
    grid.innerHTML = gridInnerText
  }

  // * ---> GET BLOCK <--- * //
  // randomly choosing block
  function createBlock() {
    // possible key - one of seven
    const possibleBlockKey = ['O', 'I', 'S', 'Z', 'J', 'L', 'T']
    // random number from 0 to 6
    const randomKeyNum = Math.floor(Math.random() * 7)
    // returning one of seven blocks
    return blocks[possibleBlockKey[randomKeyNum]]
  }

  function checkLines() {
    let removeRow = true
    let filledlines = 0
    for (let y = 0; y < gridRows; y++) {
      for (let x = 0; x < gridColumns; x++) {
        if (playField[y][x] !== 2) {
          removeRow = false
        }
      }
      if (removeRow) {
        // if a row has only 2s we can remove row with index y.
        playField.splice(y, 1)
        // we have to add new row. index 0(on a top of the grid) we delete 0 and add new empty row and it is pushing everything down.
        playField.splice(0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
        // updating score
        filledlines += 1
      }
      // we have to change removeRow to true, because checking next row should start from true.
      removeRow = true
    }
    if (filledlines === 0) {
      score += 0
      // scoreScreen.innerText = score
    } else if (filledlines === 1) {
      score += 10
      // scoreScreen.innerText = score
    } else if (filledlines === 2) {
      score += 30
      // scoreScreen.innerText = score
    } else if (filledlines === 3) {
      score += 60
      // scoreScreen.innerText = score
    } else if (filledlines === 4) {
      score += 120
    }
    scoreScreen.innerText = score
    // if (score >= 20) {
    //   level += 1
    //   gameSpeed = 400
    // } else if (score >= 500) {
    //   level += 1
    //   gameSpeed = 300
    // } else if (score >= 1000) {
    //   level += 1
    //   gameSpeed = 200
    // } else if (score >= 2000) {
    //   level += 1
    //   gameSpeed = 100
    // } else if (score >= 5000) {
    //   level += 1
    //   gameSpeed = 50
    // }

    // levelScreen.innerText = level
  }

  // * // CAN BlOCK MOVE // FREEZE BLOCK // HANDLE KEYUP ***********************
  function cantBlockMove() {
    // function to check if block has any collisions(checking a block not whole grid)
    for (let y = 0; y < activeBlock.shape.length; y++) {
      for (let x = 0; x < activeBlock.shape[y].length; x++) {
        // if block's cell = 1 and row+1 - undefind, block has bottom collision
        // OR left/right undefined // OR colision with other blocks
        if (
          activeBlock.shape[y][x] &&
          (playField[activeBlock.y + y] === undefined ||
            playField[activeBlock.y + y][activeBlock.x + x] === undefined ||
            playField[activeBlock.y + y][activeBlock.x + x] === 2)
        ) {
          return true
        }
      }
    }
    return false
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
  }

  function handleKeyUp(event) {
    const key = event.keyCode
    if (key === 37) {
      console.log('LEFT')
      // Move left - take away 1 from x coordinate - move for one left
      activeBlock.x -= 1
      if (cantBlockMove()) {
        //if there is a colision we put block one step back
        activeBlock.x += 1
      }
    } else if (key === 39) {
      console.log('RIGHT')
      // Move right - add 1 to x coordinate - move for one right
      activeBlock.x += 1
      if (cantBlockMove()) {
        //if there is a colision we put block one step back
        activeBlock.x -= 1
      }
    } else if (key === 40) {
      // Move down - take away 1 from y coordinate - move for one down
      console.log('DOWN')
      activeBlock.y += 1
      if (cantBlockMove()) {
        //if there is a colision we put block one step back
        activeBlock.y -= 1
        // block freezing when it has bottom colision
        freezeBlock()
        //we need to add new activeBlock to appear on top by calling function createBlock.
        activeBlock.shape = createBlock()
        activeBlock.y = 0
      }
    } else if (key === 38) {
      console.log('ROTATE')
      rotateActiveBlock()
    }
    addActiveBlock()
    createNewGrid()
  }
  document.addEventListener('keyup', handleKeyUp)

  // * ---> START GAME FUNCTION <--- * //

  createNewGrid()
  // If we will call functions addActiveBlock and creatNewGrid, our block will move.
  //Function startGame with setTimeout will move block down every gameSpead.
  // * // * //*
  function startGame() {
    // pushing first block
    activeBlock.y += 1
    if (cantBlockMove()) {
      //if there is a colision we put block one step back
      activeBlock.y -= 1
      // block freezing when it has bottom colision
      freezeBlock()
      //we need to add new activeBlock to appear on top
      activeBlock.shape = createBlock()
      // Block is starting on top row, on 4 column
      activeBlock.y = 0
      activeBlock.x = 3
    }
    addActiveBlock()
    createNewGrid()
    // startGame() - is not working, block immediately felling down on the bottom. we neen to add delay - setTimeout. We have to add another timer to move it down, because now block is moving only once.
    setTimeout(startGame, gameSpeed)
  }
  setTimeout(startGame, gameSpeed)
}

window.addEventListener('DOMContentLoaded', init)
