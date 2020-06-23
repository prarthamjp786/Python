import { pythonSpeed, update as updatePython, draw as drawPython, getPythonHead, pythonIntersection } from './python.js';
import { update as updateFood, draw as drawFood } from './food.js';
import { outsideGrid } from './grid.js';

const gameBoard = document.getElementById('game-board');

let lastRenderTime = 0;
let gameOver = false;

function main(currentTime) {
    if (gameOver) {
        if (confirm('You lost, Press OK to restart.')) {
            window.location = '/';
        }
        return
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < (1 / pythonSpeed)) {
        return;
    }

    lastRenderTime = currentTime;

    update()
    draw()
}

window.requestAnimationFrame(main);

function update() {
    updatePython();
    updateFood();
    checkDeath();
}

function draw() {
    gameBoard.innerHTML = '';
    drawPython(gameBoard);
    drawFood(gameBoard);
}

function checkDeath() {
    gameOver = outsideGrid(getPythonHead()) || pythonIntersection()
}