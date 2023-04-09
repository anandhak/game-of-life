import Grid from './grid.js'

class GameOfLife{
    #myGame
    constructor(universe,alive,dead){
        this.#myGame = new Grid(universe,alive,dead);
        
    }
    #gameOfLife(aliveNeighbourCondition,deadNeighbourCondition){
        let rows = this.#myGame.universe.length;
        let columns = this.#myGame.universe[0].length;
        //creating a temporary 2D array for storing the state of new Universe
        let ans = [];
        for(let i=0;i<rows;i++){
            ans[i] = [];
            for(let j=0;j<columns;j++){
                let neighboursCount =this.#myGame.countNeighbour(i,j);
                // If cell is Alive
                if(this.#myGame.universe[i][j].wasAlive()){

                    if(!this.#checkCellCondition(aliveNeighbourCondition,neighboursCount)){
                        this.#myGame.universe[i][j].setDead();
                    }

                    ans[i][j] = this.#myGame.universe[i][j].isAlive()?this.#myGame.alive:this.#myGame.dead;
                }
                // Any dead cell with exactly three live neighbours comes to life.
                else if(this.#myGame.universe[i][j].wasDead()){

                    if(!this.#checkCellCondition(deadNeighbourCondition,neighboursCount)){
                        this.#myGame.universe[i][j].setAlive();
                    }
                    
                    ans[i][j] = this.#myGame.universe[i][j].isDead()?this.#myGame.dead:this.#myGame.alive;
                }
            }

        }
        // new generation will become the current generation
        console.table(ans);
        this.#myGame.reInitialize();
        return;
    }
    //This function returns true if neighbourCounts Satisfy
    #checkCellCondition(neighbourCondition,neighboursCount){
        let flag = false;
        for(const condition of neighbourCondition){
            if(condition === neighboursCount){
                flag = true;
                break;
            }
        }
        return flag;
    }
    //First Generation creation
    tick(aliveNeighbourCondition,deadNeighbourCondition){
        try {
            this.#gameOfLife(aliveNeighbourCondition,deadNeighbourCondition);
        } catch (error) {
            console.error("game has stopped");
            console.error(error.message);
        }
    }
}

function letUsPlay(){
    let universe = [['-','x','-'],['-','-','x'],['x','x','x'],['-','-','-']];
    let alive = 'x';
    let dead = '-';
    //conditions where the cell will bbe alive in the next state if it is alive
    let aliveConditionArray = [2,3];
    //condition where the cell will be dead in the next state if it is dead
    let deadConditionArray = [0,1,2,4,5,6,7,8];
    let game = new GameOfLife(universe,alive,dead);
    let generations = 10;
    while(generations--){
        game.tick(aliveConditionArray,deadConditionArray);
    }
}
letUsPlay();