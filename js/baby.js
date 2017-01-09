var babyObj = function(){
	this.x;
	this.y;
	this.angle;
	this.babyEye = new Image();
	this.babyBody = new Image();
	this.babyTail = new Image();
}
babyObj.prototype.init = function(){
	this.x = canWidth*0.5 - 50;
	this.y = canHeight*0.5 +50;
	this.angle = 0;
	this.babyEye.src = "./src/babyEye0.png";
	this.babyBody.src = "./src/babyFade0.png";
	this.babyTail.src = "./src/babyTail0.png";
}
babyObj.prototype.draw = function(){
	//lerp x,y追寻ratio
	this.x = lerpDistance(mom.x,this.x,0.99);
	this.y = lerpDistance(mom.y,this.y,0.99);
	//Math.atan2(y,x)
	var deltaY = mom.y - this.y;
	var deltaX = mom.x - this.x;
	var beta = Math.atan2(deltaY,deltaX) + Math.PI;
	//lerp angle
	this.angle = lerpAngle(beta,this.angle,0.6);
	console.log(this.angle);
	con1.save();
	con1.translate(this.x,this.y);
	con1.rotate(this.angle);
	con1.drawImage(this.babyTail,-this.babyTail.width*0.5 +23,-this.babyTail.height*0.5);
	con1.drawImage(this.babyBody,-this.babyBody.width*0.5,-this.babyBody.height*0.5);
	con1.drawImage(this.babyEye,-this.babyEye.width*0.5,-this.babyEye.height*0.5);
	con1.restore();
}