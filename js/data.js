var dataObj = function(){
	this.fruitNum = 0;
	this.double = 1;
	this.score = 0;
	this.gameOver = false;
	this.alpha = 0;
}
// dataObj.prototype.reset = function(){
// 	this.fruitNum = 0;
// 	this.double = 1;
// }
dataObj.prototype.draw = function(){
	var w = can1.width;
	var h = can1.height;

	con1.save();
	con1.shadowBlur = 10;
	con1.shadowColor = "white";
	con1.fillStyle = "white";
	//con1.fillText("num" + this.fruitNum, w*0.5,h-50);
	//con1.fillText("double" + this.double, w*0.5,h-80);
	con1.fillText("SCORE: " + this.score, w*0.5,h-80);

	if(this.gameOver){
		this.alpha += deltaTime*0.0005;
		if(this.alpha > 1){
			this.alpha = 1;
		}
		con1.fillStyle = "rgba(255,255,255,"+this.alpha+")"
		con1.fillText("GAMEOVER", w*0.5,h*0.5);
	}
	con1.restore();
}
dataObj.prototype.addScore = function(){
	this.score += this.fruitNum*100*this.double;
	this.fruitNum = 0;
	this.double = 1;
}