export const pythonSpeed = 2;
const pythonBody = [
    { x: 10, y: 11 },
    { x: 11, y: 11 },
    { x: 12, y: 11 }
];

export function update() {
    for (let i = pythonBody.length - 2; i >= 0; i--) {
        pythonBody[i + 1] = { ...pythonBody[i] };
    }

    pythonBody[0].x += 0;
    pythonBody[0].y += 1;
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