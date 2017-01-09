var can1;
var can2;
var con1;
var con2;
var lastTime;
var deltaTime;
var bgImage = new Image();//这是什么意思？
var canWidth;
var canHeight;
var anemone;
var fruit;
var mom;
var baby;
var mx;
var my;

window.onload = function(){
	game();
}
//document.body.onload = game;
function game(){
	init();
	lastTime = Date.now();//可以直接得出当前时间并转化为毫秒 == var now = new Date();console.log(now.getTime())
	deltaTime = 0;
	gameloop();
}
function init(){
	//获取canvas 和 context
	can1 = document.getElementById("canvas1");
	con1 = can1.getContext("2d");
	can2 = document.getElementById("canvas2");//background
	con2 = can2.getContext("2d");

	can1.addEventListener("mousemove",onMouseMove,false);
	// bgImage.src = "./src/background.jpg";
	bgImage.src = "src/background.jpg";
	canWidth = can1.width;
	canHeight = can1.height;

	anemone = new anemoneObj();
	anemone.init();

	fruit = new fruitObj();
	fruit.init();

	mom = new momObj();
	mom.init();

	baby = new babyObj();
	baby.init();

	mx = canWidth*0.5;
	my = canHeight*0.5;
};
function gameloop(){
	window.requestAnimFrame(gameloop);
	var now  = Date.now();
	//console.log(now);
 	//console.log(lastTime);
	deltaTime = now - lastTime;
	lastTime = now;
	if(deltaTime > 40){
		deltaTime = 40;
	}
	//console.log(deltaTime);
	drawBackground();
	anemone.draw();
	fruitMonitor();
	fruit.draw();
	con1.clearRect(0,0,canWidth,canHeight);
	mom.draw();
	momFruitsCollision();
	baby.draw();
}
function onMouseMove(e){
	//这里什么意思
	if(e.offSetX || e.layerX){
		mx = e.offSetX == undefined ? e.layerX : e.offSetX;
		my = e.offSetY == undefined ? e.layerY : e.offsetY;
		//console.log(mx);
	}
}