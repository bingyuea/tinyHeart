var anemoneObj = function(){
	this.rootx = [];
	this.headx = [];
	this.heady = [];
	this.amp = [];
	this.alpha = 0;
}
anemoneObj.prototype.num = 50;
anemoneObj.prototype.init = function(){
	for(i = 0;i < this.num;i++){
		this.rootx[i] = i*20 + Math.random()*16;
		this.headx[i] = this.rootx[i];
		this.heady[i] = canHeight-250+Math.random() * 50;
		//this.y[i] = 200 +Math.random()*50;
		this.amp[i] = Math.random()* 50 +50;
	}
}
anemoneObj.prototype.draw = function(){
	this.alpha += deltaTime*0.0008;
	var l = Math.sin(this.alpha);
	con2.save();
	con2.lineWidth = 20;
	con2.lineCap = "round";
	con2.strokeStyle = "#3b154e";
	con2.globalAlpha = 0.6;
	for(i = 0;i< this.num; i++){
		con2.beginPath();
		con2.moveTo(this.rootx[i],canHeight);
		this.headx[i] = this.rootx[i] +l*this.amp[i];
		con2.quadraticCurveTo(this.rootx[i],canHeight-100,this.headx[i],this.heady[i]);
		con2.stroke();
	}
	con2.restore();
}