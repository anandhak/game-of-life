import GameOfLife from './gameOfLife.js'
import {it, expect, describe} from 'vitest'

describe('Game', () => {
    let universe = [
        ['-', 'x', '-'],
        ['-', '-', 'x'],
        ['x', 'x', 'x'],
        ['-', '-', '-']
    ];
    let alive = 'x';
    let dead = '-';
    let generations = 1;
    it('should return the correct generation after applyting the rules', () => {
        let game = new GameOfLife();
        let trueAns = [
            ['-', '-', '-'],
            ['x', '-', 'x'],
            ['-', 'x', 'x'],
            ['-', 'x', '-'],
        ]
        game.letUsPlay(universe, alive, dead, generations);
        let ans = game.getUniverse();

        expect(ans).toEqual(trueAns);
    });
    
})