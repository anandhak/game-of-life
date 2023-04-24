import Grid from './grid.js'
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

    it('should return the neighbour of alive neighbours', () => {
      grid = new Grid(myUniverse, alive, dead);
      const {startRow, startCol} = grid.calculateInsertIndex(myUniverse.length,myUniverse[0].length);
      const count = grid.countNeighbour(startRow+1, startCol+1);
      expect(count).toBe(5);

    });
   
})
