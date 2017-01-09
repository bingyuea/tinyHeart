var fruitObj =function(){
	this.alive = [];//boolean
	this.x = [];
	this.y = [];
	this.l = [];//定义果实的大小
	this.speed = [];
	this.fruitType = [];//果实颜色类型
	this.orange = new Image();
	this.blue = new Image();
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function(){
	for(i=0;i<this.num;i++){
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.speed[i] = Math.random()*0.017 +0.003;//定义一个速度[0.03 0.02)
		this.born(i);
		this.fruitType[i] = "";
	}
	this.orange.src = "./src/fruit.png";
	this.blue.src = "./src/blue.png";
	//console.log("init");
}
fruitObj.prototype.draw = function(){
	for(var i=0;i<this.num;i++){
		if(this.alive[i]){
			if(this.fruitType[i] == "blue"){
				var pic = this.blue;
			}else{
				var pic = this.orange;
			}
			if(this.l[i] < 14){
			this.l[i] += this.speed[i]*deltaTime;
			}
			else{
				this.y[i] -= this.speed[i]*7*deltaTime;
			}
			//console.log(pic);
			con2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);	
			if(this.y[i] < 10){
				this.alive[i] = false;
			}  
		}	
	}	
}
fruitObj.prototype.born = function(i){
	//这里缺少果实重复判断
	anemoneID = Math.floor(Math.random()*anemone.num);
	this.x[i] = anemone.x[anemoneID];
	this.y[i] =	canHeight - anemone.y[anemoneID];
	this.l[i] = 0;
	this.alive[i] = true;
	var ran = Math.random();
	if( ran < 0.3){
		 this.fruitType[i] = "blue";
	}else{
		this.fruitType[i] = "orange";
	}
	//console.log(this.fruitType[i])
}
fruitObj.prototype.dead = function(i){
	this.alive[i] = false;
}
function fruitMonitor(){
	var num = 0;
	for(var i=0;i<fruit.num;i++){
		if(fruit.alive[i]) num++;
	}
	if(num < 15){
		sendFruit();
		return;
	}
}
function sendFruit(){
	for(var i= 0;i < fruit.num; i++){
		if(!fruit.alive[i]){
			fruit.born(i);
			return;
		}
	}
}