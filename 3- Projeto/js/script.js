var canvas = document.getElementById('snake');
var context = canvas.getContext('2d');
var box = 32;
const snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = 'right';
var food = {
    x: Math.floor(Math.random()* 15 + 1) * box,
    y: Math.floor(Math.random()* 15 + 1) * box
}

function criarBG() {
    context.fillStyle = 'lightgreen';
    context.fillRect(0, 0, 16 * box, 16 * box);
}

const criarSnake = ()=>{
    for (let i = 0; i < snake.length; i++) {
        context.fillStyle = 'green';
        context.fillRect(snake[i].x, snake[i].y, box, box);
        
    }
}

const update = (event) => {
    if(event.keyCode == 37 && direction != 'right') direction = 'left';
    if(event.keyCode == 38 && direction != 'down') direction = 'up';
    if(event.keyCode == 39 && direction != 'left') direction = 'right';
    if(event.keyCode == 40 && direction != 'up') direction = 'down';
}
document.addEventListener('keydown', update);

const drawfood = () =>{
    context.fillStyle = 'red';
    context.fillRect(food.x, food.y, box, box);
}


const iniciarGame=() =>{

    // Direçoes
    if(snake[0].x > 15 * box && direction == 'right') snake[0].x = 0;
    if(snake[0].x < 0 * box && direction == 'left') snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == 'down') snake[0].y = 0;
    if(snake[0].y < 0 * box && direction == 'up') snake[0].y = 16 * box;

    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(game);
            alert('Game Over :(');
        }
    }

    criarBG();
    criarSnake();
    drawfood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == 'right') snakeX += box;
    if(direction == 'left') snakeX -= box;
    if(direction == 'up') snakeY -= box;
    if(direction == 'down') snakeY += box;

    if(snakeX != food.x || snakeY != food.y){
        snake.pop();
    }
    else{
        food.x = Math.floor(Math.random()* 15 + 1) * box;
        food.y = Math.floor(Math.random()* 15 + 1) * box;
    }

    

    let newHead ={
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead)
}

let game = setInterval(iniciarGame, 100);
