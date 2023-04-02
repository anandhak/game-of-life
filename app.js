//To get the total number of alive neighbours of a specific cell
function countNeighbour(universe, rows, columns){
    let count = 0;
    //counting all neighbours present diagonally, above and below
         for(let i=rows-1;i<rows+2;i++){
            for(let j=columns-1;j<columns+2;j++){
                if((i == rows && j == columns) || i < 0 || j < 0 || i >= universe.length || j >= universe[0].length) 
                    continue;
                else if(universe[i][j] == 1)
                    count++;
            }
        }
        return count;
}
//to check whether cell is alive
function isAlive(cell){
    if(cell) return true;
    else return false;
}

function gameOfLife(universe){
    let rows = universe.length;
    let columns = universe[0].length;
    //creating a temporary 2D array of size same as board with all values 0
    let ans = Array.from(Array(rows), () => new Array(columns).fill(0));
    for(let i=0;i<rows;i++){
        for(let j=0;j<columns;j++){
            let neighboursCount = countNeighbour(universe,i,j);

            if(isAlive(universe[i][j])){
                //Any live cell with fewer than two live neighbours dies, as if by loneliness.
                if(neighboursCount < 2)
                    ans[i][j] = 0;
                //Any live cell with two or three live neighbours lives, unchanged, to the next generation.
                else if(neighboursCount == 2 || neighboursCount == 3)
                    ans[i][j] = 1;
                //Any live cell with more than three live neighbours dies, as if by overcrowding
                else if(neighboursCount > 3)
                    ans[i][j] = 0;
            }
            // Any dead cell with exactly three live neighbours comes to life.
            else if(!isAlive(universe[i][j])){
                if(neighboursCount == 3)
                    ans[i][j] = 1;
            }
        }
    }
    // new generation will become the current generation
    for(let i=0;i<rows;i++){
        for(let j=0;j<columns;j++){
            universe[i][j] = ans[i][j];
        }
    }
    return;
}

function startGame(){
    let universe = [
        [0,1,0],
        [0,0,1],
        [1,1,1],
        [0,0,0]
    ];
    gameOfLife(universe);
    console.table(universe);
}
startGame();
