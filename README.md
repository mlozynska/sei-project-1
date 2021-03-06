# Project-1 Tetris

![](/assets/images/Tetris.png)
You can find the deployed version [here](https://mlozynska.github.io/sei-project-1/)

## Overview

The first solo project of the Software Engineering Immersive course at GA London was to build a game, only using vanilla JavaScript, CSS & HTML. I had a choice to pick from 10 different games. My shortlist was – Tetris, Snake and Battleships. Finally, I decided to choose Tetris because it is my favourite game from my childhood. I expected to face a lot of challenges with this game.

## Timeframe

7 days

## Brief

- Render a game in the browser.
- Be built on a grid: don’t use HTML Canvas for this.
- Design logic for winning and visually display which player won.
- Include separate HTML / CSS /JavaScript files.
- Use JavaScript for DOM manipulation.

## Technologies used

- HTML5
- CSS3
- JavaScript (ES6)
- Version control tools (Git/GitHub)
- Google Fonts

## Controls

- Press the start button to start the game.
- ← to move left and → to move right.
- ↓ to drop tetrimino down and ↑ to rotate tetriminos.

## Approach

To have a better understanding of the logic of the game, I decided to start with researching the game's rules. I found a lot of information about the game and its different variations. I spent half a day of the project playing games and reading about the rules mostly on [Tetris – NES Gameplay – Youtube](https://www.youtube.com/watch?v=CvUK-YWYcaE) and [Tetris – Wikipedia](https://en.wikipedia.org/wiki/Tetris).
I’ve decided to start with writing pseudocode, it helped me to break down the game into smaller problems.

![](/assets/images/Pseudocode.png)

My next step was to set up the grid.

![](/assets/images/Grid.png)

![](/assets/images/Playfield.png)

After that I created the first active block and function which is adding and moving active blocks on the grid.

![](/assets/images/ActiveBlock.png)

![](/assets/images/AddActiveBlock.png)

When the tetromino is moving down before each step we have to check if the block can move, if there is a collision we need to freeze the tetromino.

![](/assets/images/CantBlockMove.png)

![](/assets/images/FreezeBlock.png)

After that I created functions to rotate the active block and remove full lines, which took me some time.

## Wins

- Managed to build a working browser rendered Tetris game with Tetrimino rotation function and speed increases overtime.
- Game stops if a Tetrimino fills the highest row of the game board.
- Removing lines – once a line has been made, the blocks above have to all shift down a row to fill the space and also need to add a new line on top of a grid and increase player’s the score. For this, I had to loop through all grid rows to check if there are rows where all cells === 2.

  ![](/assets/images/Winns.png)

## Challenges

- Rotation of the Tetriminos was the largest challenge for me, each one rotates around a specific point of the axis. Also, some blocks, particularly the long bar, create problems when turning next to the walls of the game board. I used the map method to rotate the block 90° to the right.

![](/assets/images/Challenges.png)

For example, if a block has three rows and three columns, every time after 90° rotation the first row will become the last column, second row will be the middle column, and the last row will be the right column.

![](/assets/images/rotation.png)

- Collision detection. Dealing with collision detection has been also challenging for me. It took me some time to understand that for collision checking I need to loop not through the grid, but through the Tetrimino. And if y+1 or x+1 === undefined or === 2 means that there is a collision with sides of a grid or other blocks.

![](/assets/images/collision.png)

## Key learnings

- How important it is to spend plenty of time planning before starting to code and to write detailed pseudocode.
- JavaScript fundamentals, how to write JS logic to make everything work. Tetris is extremely heavy on logic.
- First use of event listeners and DOM.

## Future Features

- Pause the game
- Scoreboard for different players. (using localStorage)
