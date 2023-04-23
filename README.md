
# Game of Life App

The Game of Life App simulates the evolution of cells in a two-dimensional orthogonal grid. The initial state of the cells is defined by a pattern of X (alive cells) and - (dead cells) characters, and then the application runs through the following rules:

1. Any live cell with fewer than two live neighbors dies, as if by loneliness.

2. Any live cell with more than three live neighbors dies, as if by overcrowding.

3. Any live cell with two or three live neighbors lives, unchanged, to the next generation.

4. Any dead cell with exactly three live neighbors comes to life.

The app generates the state of the system in the next tick, which is one run of the application of all the rules. The rules are continue to be applied repeatedly to create further generations.


## How to Use
1. Clone this repository to your local machine.

2. Open the terminal and navigate to the directory where the repository was cloned.

3. Run the following command: npm run start

4. Press Enter to run the command and see the result.

5. Run the following commands to run test case : npm run test


## Input
The universe variable represents the initial state of the cells in the universe. It is a 2D array where each element is a character representing an alive or dead cell. The alive variable is a string representing an alive cell, and the dead variable is a string representing a dead cell.

1. Please enter the number of rows of the 2d matrix in the first line
2. Please enter the number of columns of the 2d matrix in the second line
3. Please enter the elements consisting of Only alive and dead characters
4. Please enter the character you want to be represent as alive
5. Please enter the character you want to be represent as dead
6. Please enter the number of generations you want to pass.

The generations variable represents the number of generations (ticks) to run the simulation.