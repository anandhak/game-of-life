import {Grid} from './grid'
import {it, describe, expect, beforeEach, afterEach} from 'vitest'
import Cell from '../Cell/cell';


describe('Grid class', () => {
  let game;
  const alive = 'X';
  const dead = '-';
  const myUniverse = [
    [dead,alive,dead],
    [dead,dead,alive],
    [alive,alive,alive],
    [dead,dead,dead]
  ];

  beforeEach(() => {
    game = new Grid(myUniverse, alive, dead);
  });

  afterEach(() => {
    game = null;
  });

  describe('constructor', () => {
    it('should initialize universe with dead cells', () => {
      //check notebook
    });
  });

    it('should update universeState properties', () => {
      game.reInitialize();
      expect(game.universeState.minRow).toBe(Math.pow(2,12));
      expect(game.universeState.maxRow).toBe(-(Math.pow(2,12)));
      expect(game.universeState.minCol).toBe(Math.pow(2,12));
      expect(game.universeState.maxCol).toBe(-(Math.pow(2,12)));
    });
  });

  describe('#countNeighbour()', () => {
    it('should count all alive neighbours diagonally, above and below', () => {
      
    });
  });
