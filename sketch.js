t = 0
t2 = 0
t3 = 0

function setup() {
	createCanvas(window.innerWidth, window.innerHeight)
	background(0)
	setFrameRate(60)
}

function draw() {
	// background(0)
	noStroke()
	x = map(noise(t), 0, 1, 0, width)
	y = map(noise(t2), 0, 1, 0, height)
	r = map(noise(t), 0, 1, 0, 255)
	g = map(noise(t2), 0, 1, 0, 255)
	b = map(noise(t3), 0, 1, 0, 255)
	alpha = map(noise(t), 0, 1, 10, 100)
	fill(r, g, b, alpha)
	ellipse(x, y, 20, 20)
	// rect(random(x), y, 40, 40)
	t+=0.01
	t2+=0.001
	t3+=0.1
}

function windowResized() {
  // resizeCanvas(windowWidth, windowHeight)
  // background(0)
}