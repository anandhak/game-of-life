import Cell from '../Cell/cell.js'
export default class Grid{
    universe
    universeState = {
        alive: "",
        dead: "",
        minRow: Math.pow(2,12),
        maxRow: 0,
        minCol: Math.pow(2,12),
        maxCol: 0
    }
    constructor(universe, alive, dead){
        this.#initializeUniverse();
        this.universeState.alive = alive;
        this.universeState.dead = dead;
        const row = universe.length;
        const col = universe[0].length;
        const { startRow, startCol } = this.calculateInsertIndex(row, col);

        for(let i=startRow; i<startRow+row; i++){
            for(let j=startCol; j<startCol+col; j++){
                if(universe[i-startRow][j-startCol] === alive){
                    this.universe[i][j] = new Cell(true);
                    this.universeState.minRow = Math.min(this.universeState.minRow, i-1);
                    this.universeState.maxRow = Math.max(this.universeState.maxRow, i+1);
                    this.universeState.minCol = Math.min(this.universeState.minCol, j-1);
                    this.universeState.maxCol = Math.max(this.universeState.maxCol, j+1);
                }
            }
        }
    }
    //INF universe with dead cells
    #initializeUniverse() {
        //Maximum size that could be allocated on my system
        const size = Math.pow(2,12);
        this.universe = Array(size);
        for(let i=0; i<size; i++) {
            this.universe[i] = Array(size);
            for(let j=0; j<size; j++) {
                this.universe[i][j] = new Cell(false);
            };
        }
    }
    //Insertion point of input array in universe 
    calculateInsertIndex(row, col) {
        const startRow = Math.floor((Math.pow(2,12)/2) - (row/2));
        const startCol = Math.floor((Math.pow(2,12)/2) - (col/2));
        return {
            startRow,
            startCol
        }
    }
    //reInitailize universe for the next generation
    reInitialize(){
        const {minRow, maxRow, minCol, maxCol} = this.universeState;
        for(let i=minRow; i<=maxRow; i++){
            for(let j=minCol; j<=maxCol; j++){
                this.universe[i][j].reInitialize();
                if(this.universe[i][j].isAlive()) {
                    this.universeState.minRow = Math.min(this.universeState.minRow, i-1);
                    this.universeState.maxRow = Math.max(this.universeState.maxRow, i+1);
                    this.universeState.minCol = Math.min(this.universeState.minCol, j-1);
                    this.universeState.maxCol = Math.max(this.universeState.maxCol, j+1);
                }
            }
        }
    }
    //counting all live neighbours present diagonally, above and below
    countNeighbour(rows, columns){
        let count = 0;
        const directions = [[0,1],[1,0],[1,1],[0,-1],[-1,0],[-1,-1],[1,-1],[-1,1]];
            for(const direction of directions){
                let newRow = rows + direction[0];
                let newCol = columns + direction[1];
                if(newRow < 0 || newCol < 0 || newRow >= this.universe.length || newCol >= this.universe[0].length || this.universe[newRow][newCol].wasDead()){
                    continue;
                }
                count++;
            }
        return count;
    }

}