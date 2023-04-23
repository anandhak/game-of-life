export default class Cell {
    #currState
    #preState
    constructor(state){
        this.#currState = state;
        this.#preState = state;
    }
    isAlive(){
        return this.#currState?true:false;
    }
    isDead(){
        return !this.#currState?true:false;
    }
    wasAlive(){
        return this.#preState?true:false;
    }
    wasDead(){
        return !this.#preState?true:false;
    }
    setAlive(){
        this.#preState = this.#currState;
        this.#currState = true;
    }
    setDead(){
        this.#preState = this.#currState;
        this.#currState = false;
    }
    //rereInitializing the cell for the new generation
    reInitialize(){
        this.#preState = this.#currState;
    }
}
