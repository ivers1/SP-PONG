const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';
ctx.fillRect(5, 100, 25, 100);
ctx.fillStyle = 'blue';
ctx.fillRect(570, 100, 25, 100);

//ctx.beginPath();
//ctx.arc(canvas.width / 2, canvas.height / 2, 10, 0, Math.PI * 2);
//ctx.fillStyle = 'black';
//ctx.fill();

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 20,
    dx: 5,
    dy: 4
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
    ctx.fillStyle = 'black';
    ctx.fill();
}

function update() {
clearRect    
drawBall();

ball.x += ball.dx;    
    
requestAnimationFrame(update); 
}

update();