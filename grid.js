import Cell from './cell.js'
export default class Grid{
    universe
    alive
    dead
    #directions = [[0,1],[1,0],[1,1],[0,-1],[-1,0],[-1,-1],[1,-1],[-1,1]];
    constructor(universe, alive, dead){
        this.universe =[];
        this.alive = alive;
        this.dead = dead;
        for(let i=0;i<universe.length;i++){
            this.universe[i] = [];
            for(let j=0;j<universe[0].length;j++){
                if(universe[i][j] === alive){
                    this.universe[i][j] = new Cell(true);
                }
                else if(universe[i][j] === dead){
                    this.universe[i][j] = new Cell(false);
                }
            }
        }
    }
    //reInitailize universe for the next generation
    reInitialize(){
        for(const uni of this.universe){
            for(const cell of uni){
                cell.reInitialize();
            }
        }
    }
    countNeighbour(rows, columns){
        let count = 0;
        //counting all neighbours present diagonally, above and below
            for(const direction of this.#directions){
                let newRow = rows + direction[0];
                let newCol = columns + direction[1];
                if(newRow < 0 || newCol < 0 || newRow >= this.universe.length || newCol >= this.universe[0].length){
                    continue;
                }
                else if(this.universe[newRow][newCol].wasAlive())
                    count++;
            }
            return count;
    }

}