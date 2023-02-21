var cvs = document.getElementById("snake");
var ctx = cvs.getContext("2d");

/* Creating a unit */
const box = 32;

/* Load image */
const ground = new Image();
ground.src = "img/ground3.png";

const foodImg = new Image();
foodImg.src = "img/food2.png";

/* Creating image */
let snake = [];

snake[0] = {
    x: 9*box,
    y: 10*box,
}

/* Creating food */
let food = {
    x: Math.floor(Math.random()*17+1)*box,
    y: Math.floor(Math.random()*15+3)*box,
}

let score = 0;

function draw() {
    ctx.drawImage(ground, 0, 0);

    /* Draw of our snake */
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i == 0 ? "green" : "brown";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);

        ctx.strokeStyle = "yellow";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

let game = setInterval(draw, 500);