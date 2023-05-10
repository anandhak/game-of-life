
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

1. Please enter the number of rows of the 2d matrix in the first line.

2. Please enter the number of columns of the 2d matrix in the second line.

3. Please enter the character you want to be represent as alive.

4. Please enter the character you want to be represent as dead.

5. Please enter the elements consisting of Only alive and dead characters.

6. Please enter the number of generations you want to pass.

The generations variable represents the number of generations (ticks) to run the simulation.

-----
Feedback 1
-----
Code/Design Feedback by @anandhak.

Easy to download and execute the code, with the strucutre and README. (Can be improveded to make it also accept input etc)

At a higher level functions and class names are clear, code is simple enough to understand, however methods are long and nested and should be improved further.

The logic seems to be a bit off from whats expected. Its an infinite grid, do not assume the edge the cells will die. Try using this from the simulation and verify your output https://playgameoflife.com/ . 3rd tick your cell die off the edge, 4th tick is calculated wrong. 5th onwards is fine. But yeah the overall logic needs to be corrected.

It would be better if you could demonstrate correctness of your code with some basic Unit testing. (or even automated end to end testing, even if for only a couple of scenarios).

Improve code design , as a quick way to give you an idea of better code (not necessarily design) you can refer to the links below https://developerhandbook.stakater.com/content/architecture/object-calisthenics.html https://williamdurand.fr/2013/06/03/object-calisthenics/ https://bgasparotto.com/object-calisthenics

Try to refactor the code above to follow the object calisthenics challenge outlines above. This is only a suggestion. You can improve the code design however you see fit.

-----
Feedback 2
-----
* For the first item of feedback - I still do not see any option to be able to run the code and give it different inputs I want to try. This make is harder for me to validate the correctness of the code.

* It now better that I see tests and can run the tests and try it out with other inputs, but I feel the quality of what is getting tested needs to prove. The Unit Spec around Cell class is not adding much value, although techinically it has been properly implemented and testing all the public methods. The more useful test would have been around Grid Spec or Game of life spec, but they are barely testing any of the cases and are not sufficient.

* The main issue with the assumption of use of limited Size grid in modelling the universe is still not what is expected from in the problem. The grid should be infinite with no boundaries...otherwise that changes the output of what we see in comparison with what i can see in https://playgameoflife.com/  . Some cell that reproduce outside of the grid..changes the outcomes which is not expected.
(By the way, irrespective of the logic above, I think there is still and issue with  output that is printed, I havent bothered validating it, you can check)

* The nested looping, use of indexed arrays etc in the grid.js still do not contribute to a fleixble and extendable design, and is very strongly coupled to the 2D data strucutre. This needs to improve. It also thus does showcase any of the suggestion made in object calisthenics, or for that matter even generally good practices in JS code. (Code is syntatically clean and with good variable names but does not contribute to a better strucutre or design). 

 
