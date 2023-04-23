import Grid from './Grid/grid.js'
export default class GameOfLife{
    #universe
    #condition = {
        aliveCondition : [2,3],
        deadCondition : [0,1,2,4,5,6,7,8]
    }

    #gameOfLife(myGame){
        const {minRow, maxRow, minCol, maxCol} = myGame.universeState
        for(let i=minRow; i<=maxRow; i++){
            for(let j=minCol; j<=maxCol; j++){
                let neighboursCount = myGame.countNeighbour(i,j);
                if(myGame.universe[i][j].wasAlive()){
                    if(!this.#checkCellCondition(this.#condition.aliveCondition, neighboursCount)){
                        myGame.universe[i][j].setDead();
                    }
                }
                else {
                    if(!this.#checkCellCondition(this.#condition.deadCondition, neighboursCount)){
                        myGame.universe[i][j].setAlive();
                    }
                }
            }
        }
        // new generation will become the current generation
        const row = this.#universe.length;
        const col = this.#universe[0].length;
        const { startRow, startCol } = myGame.calculateInsertIndex(row, col);

        for(let i=startRow; i<startRow+row; i++){
            for(let j=startCol; j<startCol+col; j++){
                this.#universe[i-startRow][j-startCol] = myGame.universe[i][j].isAlive() ? myGame.universeState.alive : myGame.universeState.dead;
            }
        }
        console.table(this.#universe);
        myGame.reInitialize();
        return;
    }
    //This function returns true if neighbourCounts Satisfy
    #checkCellCondition(neighbourCondition, neighboursCount){
        let flag = false;
        for(const condition of neighbourCondition){
            if(condition === neighboursCount){
                flag = true;
                break;
            }
        }
        return flag;
    }
    getUniverse(){
        return this.#universe;
    }
    //First Generation creation
    #tick(myGame){
        try {
            this.#gameOfLife(myGame);
        } catch (error) {
            console.error("game has stopped");
            console.error(error.message);
        }
    }
    letUsPlay(universe, alive, dead, generations){
        this.#universe = universe;
        const myGame = new Grid(universe, alive, dead);
        for(let i=1;i<=generations;i++){
            console.log("generation ",i);
            this.#tick(myGame);
        }
    }
}
