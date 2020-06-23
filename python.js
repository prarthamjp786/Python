import { getInputDirection } from "./input.js";

export const pythonSpeed = 2;
const pythonBody = [
    { x: 11, y: 11 }
];

export function update() {
    const inputDirection = getInputDirection();
    for (let i = pythonBody.length - 2; i >= 0; i--) {
        pythonBody[i + 1] = { ...pythonBody[i] };
    }

    pythonBody[0].x += inputDirection.x;
    pythonBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
    pythonBody.forEach(segment => {
        const pythonElement = document.createElement('div');
        pythonElement.style.gridRowStart = segment.y;
        pythonElement.style.gridColumnStart = segment.x;
        pythonElement.classList.add('python');
        gameBoard.appendChild(pythonElement);
    })
}