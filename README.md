#效果图
![效果图](https://github.com/bingyuea/tinyHeart/blob/master/tinyHearts.gif)
==
##一阶段（建立游戏基本框架）  
###1.建立两个画布，重合在一起  
     document.getElementById("canvas").getContext("2d");  
     a.画布用作背景,海葵  
     b.画布用作鱼  
     （requestAnimaFrame(gameloop);//比setInterval更科学）  
###2.利用canvas绘制背景  
     drawImage(img,x,y,width,height)  
###3.利用类来绘制海葵  
     在main初始化函数里声明海葵这个类  
     定义一个类  
     定义海葵数量属性  
     定义海葵初始化函数属性  
          在初始化函数里定义位置x和高度  
     beginPath,moveTo,lineTo,stroke,strokeStyle,lineWidth,lineCap，save，restore（样式只在其中起作用）globalAlpha  
          把公共样式提取到for循环外面  
###4.果实绘制  
     同样的方法创建一个类
     包含果实数量  
     果实初始化属性  
          在初始化里定义图片  
     果实绘画  
          find an anemone;grow;fly up  
     果实出生  
          找到那可海葵  
          定义果实坐标  
      果实上浮  
          使用deltatime保证过渡贞平滑  
          通过食物大小判断食物该有的位置，大于某个值停止生长，并位置上升  
     控制食物数量  
###5.绘制大鱼  
      定义位置  
      定义初始化  
      定义画    
###6.大鱼移动  
     定义鼠标坐标  
     进行鼠标移动监测  
###7.大鱼吃食物  
     碰撞检测，碰撞让果实dead  
###8.解决食物太大  
     deltaTime  
##二阶段（游戏内容优化）  
###1.鱼尾巴游动    
###2.鱼眨眼睛    
     取余%，取余下的数  
###3.大鱼和小鱼的碰撞  
###4.大鱼动画  
###5.游戏分值计算  
###6.游戏优化  
     gameover  
###7.游戏特效  
     吃食特效  
###8.海葵摆动  
##question
1. offSetX || layerX
	1. offSetX 和 layerX都是取得鼠标坐标点，相对于父框边框  
	```
	if(e.offSetX || e.layerX){
				mx = e.offSetX == undefined ? e.layerX : e.offSetX;
				my = e.offSetY == undefined ? e.layerY : e.offsetY;
				//console.log(mx);
	}
	```
2. lastTime = Date.now();  
	可以直接得出当前时间并转化为毫秒 == var now = new Date();console.log(now.getTime())
 
