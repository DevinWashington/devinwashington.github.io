function setup() {
    const canvas = createCanvas(600, 400); // Smaller canvas size
    canvas.parent('canvasContainer'); // Attach canvas to the container
    background(255); // White background
}

function draw() {
    if (mouseIsPressed) {
        stroke(0); // Black color
        strokeWeight(4); // Thickness of the line
        line(mouseX, mouseY, pmouseX, pmouseY); // Draw line following the mouse
    }
}

function windowResized() {
    resizeCanvas(600, 400); // Maintain smaller canvas size on resize
    background(255); // Reset background on resize
}
        function clearCanvas() {
            const canvas = document.querySelector('canvas');
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        function saveCanvas() {
            const canvas = document.querySelector('canvas');
            const link = document.createElement('a');
            link.download = 'drawing.png';
            link.href = canvas.toDataURL();
            link.click();
        }