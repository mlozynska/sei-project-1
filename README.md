# Project-1 Tetris

![](/assets/images/Tetris.png)
You can find the deployed version [here] (https://mlozynska.github.io/sei-project-1/)

Overview
The first solo project of the Software Engineering Immersive course at GA London was to build a game, only using vanilla JavaScript, CSS & HTML. I had a choice to pick from 10 different games. My shortlist was – Tetris, Snake and Battleships. Finally, I decided to choose Tetris because it is my favourite game from my childhood. I expected to face a lot of challenges with this game.

Timeframe
7 days

Brief
Render a game in the browser.
Be built on a grid: don’t use HTML Canvas for this.
Design logic for winning and visually display which player won.
Include separate HTML / CSS /JavaScript files.
Use JavaScript for DOM manipulation.

Technologies used
HTML5
CSS3
JavaScript (ES6)
Version control tools (Git/GitHub)
Google Fonts

Controls
Press the start button to start the game.
← to move left and → to move right.
↓ to drop tetrimino down and ↑ to rotate tetriminos.

Approach

To have a better understanding of the logic of the game, I decided to start with researching the game's rules. I found a lot of information about the game and its different variations. I spent half a day of the project playing games and reading about the rules mostly on Tetris – NES Gameplay – Youtube and Tetris – Wikipedia.
I’ve decided to start with writing pseudocode, it helped me to break down the game into smaller problems.

My next step was to set up the grid.

After that I created the first active block and function which is adding and moving active blocks on the grid.

When the tetromino is moving down before each step we have to check if the block can move, if there is a collision we need to freeze the tetromino.

After that I created functions to rotate the active block and remove full lines, which took me some time.

Wins
Managed to build a working browser rendered Tetris game with Tetrimino rotation function and speed increases overtime.
Game stops if a Tetrimino fills the highest row of the game board.
Removing lines – once a line has been made, the blocks above have to all shift down a row to fill the space and also need to add a new line on top of a grid and increase player’s the score. For this, I had to loop through all grid rows to check if there are rows where all cells === 2.

Challenges
Rotation of the Tetriminos was the largest challenge for me, each one rotates around a specific point of the axis. Also, some blocks, particularly the long bar, create problems when turning next to the walls of the game board. I used the map method to rotate the block 90° to the right.

For example, if a block has three rows and three columns, every time after 90° rotation the first row will become the last column, second row will be the middle column, and the last row will be the right column.

Collision detection. Dealing with collision detection has been also challenging for me. It took me some time to understand that for collision checking I need to loop not through the grid, but through the Tetrimino. And if y+1 or x+1 === undefined or === 2 means that there is a collision with sides of a grid or other blocks.

Key learnings
How important it is to spend plenty of time planning before starting to code and to write detailed pseudocode.
JavaScript fundamentals, how to write JS logic to make everything work. Tetris is extremely heavy on logic.
First use of event listeners and DOM.

Future Features
Pause the game
Scoreboard for different players. (using localStorage)

![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Tetris

![tetris](https://media.git.generalassemb.ly/user/15120/files/daf26380-fec9-11e8-8acf-fa36d83d819c)

Tetris is a puzzle game where the player has to fit different shaped blocks (called Tetriminos) together so that they make a complete line across the playing board. Once a line is achieved it is removed from the game board and the player's score is increased.

The player can move the Tetriminos left and right and rotate them clockwise in 90º increments.

The aim of the game is to get as many points as possible before the game board is filled with Tetriminos.

## Resources

- [Tetris - NES Gameplay - Youtube](https://www.youtube.com/watch?v=CvUK-YWYcaE)
- [Tetris - Wikipedia](https://en.wikipedia.org/wiki/Tetris)

## Requirements

- The game should stop if a Tetrimino fills the highest row of the game board
- The player should be able to rotate each Tetrimino about its own axis
- If a line is completed it should be removed and the pieces above should take its place

## Suggested enhancements

- Responsive design
- Speed increases over time
- Persistent leaderboard using `localStorage`

## Challenges

By far the larges challenge here is the rotation of the Tetriminos. Each one rotates around a specific point on its axis. Also some Tetriminos, particularly the long bar, create problems issues when turning next to the walls of the game board. Furthermore, once a line has been made, the blocks above have to all shift down a row to fill the space, which requires a good amount of recursion.

## Tips

- Make sure you spend plenty of time planning _before_ you start coding
- Make sure you understand all of the rules of the game
- Make a checklist of all the features you want to add to the game
- Keep It Stupid Simple
- Refactor your code as you go
- Make sure you have a good idea of what your MVP is and only add extra features once you have achieved it
- Do just enough styling to get started, then once you have your MVP polish up the styling before moving on
