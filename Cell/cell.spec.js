import Cell from './cell.js';
import {it, describe, expect} from 'vitest'

describe('Cell Class', () => {
    describe('Cell constructor()',() => {
        it('should create a new cell with state when making a new cell', () => {
            const cell = new Cell(true);
            expect(cell.isAlive()).toEqual(true);
            expect(cell.isDead()).toEqual(false);
        });
    });
    
    describe('isAlive()', () => {
        it('should return true if the cell is alive', () => {
            const cell = new Cell(true);
            expect(cell.isAlive()).toEqual(true);
        });
        it('should return false if the cell is dead', () => {
            const cell = new Cell(false);
            expect(cell.isAlive()).toEqual(false);
        });
    });
    
    describe('isDead()', () => {
        it('should return true if the cell is dead', () => {
            const cell = new Cell(false);
            expect(cell.isDead()).toEqual(true);
        });
        it('should return false if the cell is alive', () => {
            const cell = new Cell(true);
            expect(cell.isDead()).toEqual(false);
        });
    });
    
    describe('wasAlive()', () => {
        it('should return true if the cell was alive', () => {
            const cell = new Cell(true);
            cell.setDead();
            expect(cell.wasAlive()).toEqual(true);
        });
        it('should return false if the cell was dead', () => {
            const cell = new Cell(false);
            cell.setAlive();
            expect(cell.wasAlive()).toEqual(false);
        });
    });
    
    describe('wasDead()', () => {
        it('should return true if the cell was dead', () => {
            const cell = new Cell(false);
            cell.setAlive();
            expect(cell.wasDead()).toEqual(true);
        });
        it('should return false if the cell was alive', () => {
            const cell = new Cell(true);
            cell.setDead();
            expect(cell.wasDead()).toEqual(false);
        });
    });
    
    describe('setAlive()', () => {
        it('should set a dead cell current state to alive and update previous state', () => {
            const cell = new Cell(false);
            cell.setAlive();
            expect(cell.isAlive()).toBe(true);
            expect(cell.wasAlive()).toBe(false);
        });
    });
    
    describe('setDead()', () => {
        it('should set the current state to dead and update the previous state', () => {
          const cell = new Cell(true);
          cell.setDead();
          expect(cell.isDead()).toBe(true);
          expect(cell.wasDead()).toBe(false);
        });
    });
    
    describe('reInitialize method', () => {
      it('should update the previous state to match the current state', () => {
        const cell = new Cell(true);
        cell.setDead();
        expect(cell.wasAlive()).toBe(true);
        cell.reInitialize();
        expect(cell.wasAlive()).toBe(false);
      });
    });
})

