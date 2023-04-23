import {Grid} from './grid.js'
import {it, describe, expect, beforeEach, afterEach} from 'vitest'

describe('Grid Class', () => {
    let grid;
    const alive = 'X';
    const dead = '-';
    const myUniverse = [
      [dead,alive,dead],
      [dead,dead,alive],
      [alive,alive,alive],
      [dead,dead,dead]
    ];

    beforeEach('', () => {
      grid = new Grid(myUniverse, alive, dead);
    });

    afterEach('', () => {
      grid = null;
    })

    it('should return the neighbour of alive neighbours', () => {
      let count = grid.countNeighbour(1,1);
      expect(count).toBe(5);

    });
   
})
