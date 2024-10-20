var pPoint = document.querySelector('.pPoint')

var pCount=0;
let canvas = document.querySelector('.canvas');
console.log(canvas);
let ctx = canvas.getContext('2d');
console.log(ctx);
let snake = [{x:8,y:3}];
let food = {x:5,y:5};
let dx=1,dy=0;
function drawFood(){
	ctx.fillStyle="red";
	ctx.fillRect(food.x*20,food.y*20,20,20);
}
drawFood();
function drawSnake(snakeEI){
	snake.forEach(segment=>{
		ctx.fillStyle="orange";
		ctx.fillRect(segment.x*20,segment.y*20,20,20);
	})
}
drawSnake(snake);
function moveSnake(){
	let head ={x:snake[0].x+dx, y:snake[0].y+dy};
	// .unshift()-> massive utga nemne
	// .top()-> massive utga hasna
	snake.unshift(head);
	if(head.x==food.x && head.y==food.y){
		food ={ 
			x:Math.floor(Math.random()*20),
			y:Math.floor(Math.random()*20)
		};
		pCount++;
		console.log(pPoint)
		pPoint.innerText="Player:"+pCount;
	}else{
		snake.pop();
	}
	if(head.y==20 || head.x==20 || head.y<0 || head.x<0){
		alert("Game over");
		snake = [{x:10,y:10}];
		pPoint.innerText="Player:0";
		pCount=0;
	}
	ctx.clearRect(0,0,canvas.width, canvas.height);
	drawFood();
	drawSnake(snake);
}

setInterval(moveSnake,300);
// click, keydown
//. -> object
document.addEventListener('keydown',(e)=>{
	console.log(e.key);
	if(e.key=="s"){
		if(dy!==-1){
			dx=0;
			dy=1;
		}
	}else if(e.key=="w"){
		if(dy!==1){
			dx=0;
			dy=-1;
		}
	}else if(e.key=="a"){
		if(dy!==1){
			dx=-1;
			dy=0;
		}
	}else if(e.key=="d"){
		if(dy!==-1){
			dx=1;
			dy=0;
		}
	}
});

