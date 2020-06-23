import { onPython, expandPython } from './python.js';

let food = { x: 0, y: 0 }
const expansionRate = 1;

export function update() {
    if (onPython(food)) {
        expandPython(expansionRate);
        food = { x: 20, y: 10 };
    }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}