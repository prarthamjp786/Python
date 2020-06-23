import { pythonSpeed, update as updatePython, draw as drawPython } from './python.js';
import { update as updateFood, draw as drawFood } from './food.js';
const gameBoard = document.getElementById('game-board');

let lastRenderTime = 0;

function main(currentTime) {
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
}

function draw() {
    gameBoard.innerHTML = '';
    drawPython(gameBoard);
    drawFood(gameBoard);
}