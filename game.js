//Game where this type of Universe Exists
class GameOfLife{
    #universe
    #alive
    #dead
    constructor(universe, alive, dead){
        this.#universe =[];
        this.#alive = alive;
        this.#dead = dead;
        for(let i=0;i<universe.length;i++){
            this.#universe[i] = [];
            for(let j=0;j<universe[0].length;j++){
                if(universe[i][j] === alive){
                    this.#universe[i][j] = new Cell(true);
                }
                else if(universe[i][j] === dead){
                    this.#universe[i][j] = new Cell(false);
                }
            }
        }
    }
    //total count of neighbours of a particular cell in the 2d matrix
    #countNeighbour(rows, columns){
        let count = 0;
        //counting all neighbours present diagonally, above and below
             for(let i=rows-1;i<rows+2;i++){
                for(let j=columns-1;j<columns+2;j++){
                    if((i == rows && j == columns) || i < 0 || j < 0 || i >= this.#universe.length || j >= this.#universe[0].length) 
                        continue;
                    else if(this.#universe[i][j].isAlive())
                        count++;
                }
            }
            return count;
    }
    #gameOfLife(aliveNeighbourCondition,deadNeighbourCondition){
        let rows = this.#universe.length;
        let columns = this.#universe[0].length;
        //creating a temporary 2D array for storing the state of new Universe
        let ans = [];
        //this.#universe.map((item) => item.slice());
        for(let i=0;i<rows;i++){
            ans[i] = [];
            for(let j=0;j<columns;j++){
                let neighboursCount = this.#countNeighbour(i,j);
                // If cell is Alive
                if(this.#universe[i][j].isAlive()){
                    let flag = false;
                    for(let k=0;k<aliveNeighbourCondition.length;k++){
                        if(aliveNeighbourCondition[k] === neighboursCount){
                            flag = true;
                            break;
                        }
                    }
                    ans[i][j] = flag?this.#alive:this.#dead;
                }
                // Any dead cell with exactly three live neighbours comes to life.
                else if(!this.#universe[i][j].isAlive()){
                    let flag = false;
                    for(let k=0;k<deadNeighbourCondition.length;k++){
                        if(deadNeighbourCondition[k] === neighboursCount){
                            flag = true;
                            break;
                        }
                    }
                    ans[i][j] = !flag?this.#alive:this.#dead;
                }
            }

        }
        // new generation will become the current generation
        console.table(ans);
        return;
    }
    //method to check neighbour count is in the range and it's length should be less than equal to 8 because a cell in 2d matrix can have at max 8 neighbours
    #checkNeighbourCount(NeighbourCondition){
        try {
            if(NeighbourCondition.length > 8){
                throw new Error("Total Neighbour count can not be greater than 8");
            }
            NeighbourCondition.forEach(count => {
                if(count < 0 || count > 8){
                    throw new Error("Total Neighbour count is in range of 0 to 8");
                }
            });
        } catch (error) {
            throw new Error(error.message);
        }
    }

    startGame(aliveNeighbourCondition,deadNeighbourCondition){
        try {
            this.#checkNeighbourCount(aliveNeighbourCondition);
            this.#checkNeighbourCount(deadNeighbourCondition);
            this.#gameOfLife(aliveNeighbourCondition,deadNeighbourCondition);
            
        } catch (error) {
            console.error("Game has stopped");
            console.error(error.message);
        }

    }
}

// cell class that is a part of the universe
class Cell {
    #status
    constructor(status){
        this.#status = status;
    }
    isAlive(){
        return this.#status;
    }
}

function letUsPlay(){
    let alive = 'x';
    let dead = '-';
    let universe =  [['-','x','-'],['-','-','x'],['x','x','x'],['-','-','-']]
    //conditions where the cell will bbe alive in the next state if it is alive
    let aliveConditionArray = [2,3];
    //condition where the cell will be dead in the next state if it is dead
    let deadConditionArray = [0,1,2,4,5,6,7,8];
    let game = new GameOfLife(universe,alive,dead);
    game.startGame(aliveConditionArray,deadConditionArray);
}
letUsPlay();
