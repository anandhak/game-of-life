
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

3. Run the following command: node gameOfLife.js

4. Press Enter to run the command and see the result.


## Input
The universe variable represents the initial state of the cells in the universe. It is a 2D array where each element is a character representing an alive or dead cell. The alive variable is a string representing an alive cell, and the dead variable is a string representing a dead cell.

The aliveConditionArray variable is an array of integers that represents the number of live neighbors required for a live cell to remain alive in the next state. The deadConditionArray variable is an array of integers that represents the number of live neighbors required for a dead cell to come to life in the next state.

The generations variable represents the number of generations (ticks) to run the simulation.

----------
Code/Design Feedback by @anandhak. 

- Easy to download and execute the code, with the strucutre and README. (Can be improveded to make it also accept input etc)
- At a higher level functions and class names are clear, code is simple enough to understand, however methods are long and nested and should be improved further.
- The logic seems to be a bit off from whats expected. Its an infinite grid, do not assume the edge the cells will die. Try using this from the simulation and verify your output https://playgameoflife.com/  . 3rd tick your cell die off the edge, 4th tick is calculated wrong. 5th onwards is fine. But yeah the overall logic needs to be corrected.
- It would be better if you could demonstrate correctness of your code with some basic Unit testing. (or even automated end to end testing, even if for only a couple of scenarios).

- Improve code design , as a quick way to give you an idea of better code (not necessarily design) you can refer to the links below
https://developerhandbook.stakater.com/content/architecture/object-calisthenics.html
https://williamdurand.fr/2013/06/03/object-calisthenics/
https://bgasparotto.com/object-calisthenics

Try to refactor the code above to follow the object calisthenics challenge outlines above. This is only a suggestion. You can improve the code design however you see fit. 
- 

