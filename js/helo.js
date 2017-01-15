var heloObj = function(){
	this.x = [];
	this.y = [];
	this.alive = [];
	this.r = [];
}
heloObj.prototype.num = 5;
heloObj.prototype.init =function(){
	for(var i= 0;i<this.num;i++){
		this.x[i] = 0;
		this.y[i] = 0;
		this.alive[i] = false;
		this.r[i] =0;
	}
}
heloObj.prototype.draw = function(){
	con1.save();
	con1.lineWidth = 2;
	con1.shadowBlur = 10;
	con1.shadowColor = "rgba(203,91,0,1)";
	for(var i=0;i<this.num;i++){
		if(this.alive[i]){
			//draw
			this.r[i]+=deltaTime*0.05;
			if(this.r[i] > 100){
				this.alive[i] = false;
				break;
			}
			var alpha =1 - this.r[i] / 100;//这是反比关系
			con1.beginPath();
			con1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
			con1.closePath();
			con1.strokeStyle = "rgba(203,91,0,"+alpha+")";
			con1.stroke();
		}
	}
	con1.restore();
	//console.log("draw");
}
heloObj.prototype.born = function(x,y){
	for(var i= 0;i<this.num;i++){
		if(!this.alive[i]){
			this.x[i] = x;
			this.y[i] = y;
			this.r[i] = 10;
			this.alive[i] = true;
			//console.log("?")
		}
	}
}