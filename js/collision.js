function momFruitsCollision(){
	if(!data.gameOver){
		for(var i=0;i< fruit.num;i++){
			if(fruit.alive[i]){
				var l = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
				if(l < 900 ){
					//fruit eaten
					fruit.dead(i);
					data.fruitNum++;
					mom.momBodyCount++;
					if(mom.momBodyCount > 7){
						mom.momBodyCount = 7;
					}
					if(fruit.fruitType[i] == "blue"){//blue
						data.double = 2;
					}
					wave.born(fruit.x[i],fruit.y[i]);
				}
			}
		}
	}
}
//mom bady collision
function momBabyCollision(){
	var l = calLength2(mom.x,mom.y,baby.x,baby.y);
		if(data.fruitNum > 0 && !data.gameOver){
			if(l<900){
			//baby recover
			baby.babyBodyCount = 0;
			//data =>0
			//data.reset();
			mom.momBodyCount = 0;
			//score updata
			data.addScore();
			helo.born(baby.x,baby.y);
		}
	}
}