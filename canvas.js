const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';
ctx.fillRect(5, 100, 25, 100);
ctx.fillStyle = 'blue';
ctx.fillRect(570, 100, 25, 100);

ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, 10, 0, Math.PI * 2);
ctx.fillStyle = 'black';
ctx.fill();