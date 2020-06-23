let lastRenderTime = 0;
const pythonSpeed = 2;

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < (1 / pythonSpeed)) {
        return;
    }

    console.log("render");
    lastRenderTime = currentTime;

    update()
    draw()
}

window.requestAnimationFrame(main);