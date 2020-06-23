import { getInputDirection } from "./input.js";

export const pythonSpeed = 5;
let newSegments = 0;
const pythonBody = [
    { x: 11, y: 11 }
];

export function update() {
    addSegments();
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

export function expandPython(amount) {
    newSegments += amount;
}

export function onPython(position, { ignoreHead = false } = {}) {
    return pythonBody.some((segment, index) => {
        if (ignoreHead && index === 0) {
            return false;
        }
        return equalPositions(segment, position);
    });
}

export function getPythonHead() {
    return pythonBody[0];
}

export function pythonIntersection() {
    return onPython(pythonBody[0], { ignoreHead: true })
}

function equalPositions(pos1, pos2) {
    return (
        pos1.x === pos2.x && pos1.y === pos2.y
    );
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        pythonBody.push({ ...pythonBody[pythonBody.length - 1] });
    }

    newSegments = 0;
}