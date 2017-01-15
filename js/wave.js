var waveObj = function(){
	this.x = [];
	this.y = [];
	this.alive = [];
	this.r = [];
}
waveObj.prototype.num = 10;
waveObj.prototype.init = function(){
	for(var i = 0;i<this.num;i++){
		this.alive[i] = false;
		this.r[i] = 0;
	}
}
waveObj.prototype.draw = function(){
	con1.save();
	con1.lineWidth = 2;
	con1.shadowBlur = 10;
	con1.shadowColor = "white";
	for(var i=0;i<this.num;i++){
		if(this.alive[i]){
			//draw
			this.r[i]+=deltaTime*0.04;
			if(this.r[i] > 50){
				this.alive[i] = false;
				break;
			}
			var alpha =1 -this.r[i]/50;//这是反比关系
			con1.beginPath();
			con1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
			con1.closePath();
			con1.strokeStyle = "rgba(255,255,255,"+alpha+")";
			con1.stroke();
		}
	}
	con1.restore();
}
waveObj.prototype.born = function(x,y){
	for(var i=0;i<this.num;i++){
		if(!this.alive[i]){
			//bron
			this.alive[i] = true;
			this.r[i] = 10;
			this.x[i] = x;
			this.y[i] = y;
			return;
		}
	}
}