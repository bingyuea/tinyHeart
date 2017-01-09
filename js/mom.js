var momObj = function(){
	this.x;
	this.y;
	this.angle;
	this.bigEye = new Image();
	this.bigBody = new Image();
	this.bigTail = new Image();
}
momObj.prototype.init = function(){
	this.x = canWidth*0.5;
	this.y = 0.5*canHeight;
	this.angle = 0;
	this.bigEye.src = "./src/bigEye0.png";
	this.bigBody.src = "./src/bigSwim0.png";
	this.bigTail.src = "./src/bigTail0.png";
}
momObj.prototype.draw = function(){
	//console.log(-this.bigEye.width*0.5);
	//lerp x,y追寻ratio
	this.x = lerpDistance(mx,this.x,0.99);
	this.y = lerpDistance(my,this.y,0.99);
	//delta angle
	//Math.atan2(y,x)
	var deltaY = my - this.y;
	var deltaX = mx - this.x;
	var beta = Math.atan2(deltaY,deltaX) + Math.PI;
	//lerp angle
	this.angle = lerpAngle(beta,this.angle,0.6);
	con1.save();
	con1.translate(this.x,this.y);//这是
	//console.log(this.angle);
	con1.rotate(this.angle);
	con1.drawImage(this.bigTail, -this.bigTail.width * 0.5 + 30, -this.bigTail.height * 0.5);
	con1.drawImage(this.bigBody, -this.bigBody.width * 0.5, -this.bigBody.height * 0.5);
	con1.drawImage(this.bigEye,-this.bigEye.width*0.5,-this.bigEye.height*0.5);
	con1.restore();
}