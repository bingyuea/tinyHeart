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
var data;
var babyTail = [];
var babyEye = [];
var babyBody = [];

var momTail = [];
var momEye = [];
var momBodyOra = [];
var momBodyBlue = [];

var wave;
var helo;
var dust;
var dustPic = [];
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
	//尾巴
	for(var i= 0; i<8; i++){
		babyTail[i] = new Image();
		babyTail[i].src = "./src/babyTail"+i+".png";
	}
	//眼睛
	for(var i= 0; i<2; i++){
		babyEye[i] = new Image();
		babyEye[i].src = "./src/babyEye"+i+".png";
	}
	//身体
	for(var i= 0; i<20; i++){
		babyBody[i] = new Image();
		babyBody[i].src = "./src/babyFade"+i+".png";
	}
	//大鱼
	for(var i= 0; i<8; i++){
		momTail[i] = new Image();
		momTail[i].src = "./src/bigTail"+i+".png";
	}

	for(var i= 0; i<2; i++){
		momEye[i] = new Image();
		momEye[i].src = "./src/bigEye"+i+".png";
	}

	data = new dataObj();
	//大鱼身体
	for(var i= 0; i<8; i++){
		momBodyOra[i] = new Image();
		momBodyBlue[i] = new Image();
		momBodyOra[i].src = "./src/bigSwim"+i+".png";
		momBodyBlue[i].src = "./src/bigSwimBlue"+i+".png";
	}
	con1.font = "30px Verdana";
	con1.textAlign = "center";

	wave =new waveObj();
	wave.init();

	helo = new heloObj();
	helo.init();
	dust = new dustObj();
	dust.init();
	for(var i=0;i<7;i++){
		dustPic[i] = new Image();
		dustPic.src = "./src/dust"+i+".png";
	}
	
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
	momBabyCollision();
	baby.draw();

	data.draw();
	wave.draw();
	helo.draw();
	dust.draw();
}
function onMouseMove(e){
	//这里什么意思
	if(!data.gameOver){
		if(e.offSetX || e.layerX){
			mx = e.offSetX == undefined ? e.layerX : e.offSetX;
			my = e.offSetY == undefined ? e.layerY : e.offsetY;
			//console.log(mx);
		}
	}
}