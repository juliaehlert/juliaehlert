
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  text("Click to draw");
if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 50, 50); fill(255, 79, 79); noStroke()

  }

}
