var anemoneObj = function(){
	this.x = [];
	this.y = [];
}
anemoneObj.prototype.num = 50;
anemoneObj.prototype.init = function(){
	for(i = 0;i < this.num;i++){
		this.x[i] = i*20 + Math.random()*16;
		this.y[i] = 200 +Math.random()*50;
	}
}
anemoneObj.prototype.draw = function(){
	con2.save();
	con2.lineWidth = 20;
	con2.lineCap = "round";
	con2.strokeStyle = "#3b154e";
	con2.globalAlpha = 0.6;
	for(i = 0;i< this.num; i++){
		con2.beginPath();
		con2.moveTo(this.x[i],canHeight);
		con2.lineTo(this.x[i],canHeight-this.y[i]);
		con2.stroke();
	}
	con2.restore();
}