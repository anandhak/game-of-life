import GameOfLife from './gameOfLife.js'
import fs from 'fs'

const data = fs.readFileSync("input.txt","utf-8");

const input = data.trim().split("\n");
const universe = [];
for (let i = 2; i < input.length - 3; i++) {
    universe.push(input[i].trim().split(" ").map(String));
}
const alive = input[input.length - 3].trim();
const dead = input[input.length - 2].trim();
const generations = input[input.length - 1].trim();

const game = new GameOfLife();
game.letUsPlay(universe, alive, dead, generations);
