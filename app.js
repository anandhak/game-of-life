import GameOfLife from './gameOfLife.js'
import fs from 'fs'

const data = fs.readFileSync("input.txt","utf-8");

const input = data.trim().split("\n");
const row = input[0].trim();
const cols = input[1].trim();
const alive = input[2].trim();
const dead = input[3].trim();
const universe = [];
for (let i = 4; i < input.length - 1; i++) {
    universe.push(input[i].trim().split(" ").map(String));
}

const generations = input[input.length - 1].trim();

const game = new GameOfLife();
game.letUsPlay(universe, alive, dead, generations);
