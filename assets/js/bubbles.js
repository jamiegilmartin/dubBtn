var Bubbles = window.Bubbles || {};

/**
 * @author jamiegilmartin@gmail.com
 * @description Bubbles object
 */
Bubbles = {
	init : function(){
		var self = this,
			date = new Date(),
			time = date.getTime();
		
		this.container = document.getElementsByClassName('container')[0];
		
		this.w = this.container.offsetWidth;//window.innerWidth;
		this.h = this.container.offsetHeight;//window.innerHeight;
		
		console.log(this.w, this.h)
		
		this.playing = true;
		this.instancesArr = [];
		
		
		
		//this.bubbles = document.getElementsByClassName('bubble');
		//for(var i=0; i < this.bubbles.length; i++){
		for(var i=0; i < 20; i++){
			var bubble = document.createElement('div');
			bubble.classList.add('bubble');
			bubble.innerHTML = 'hi';
		
			this.container.appendChild(bubble);
			this.instancesArr.push( new Bubble(bubble, i ) );
		}
		
		//console.log(document.height)
		this.animate();
	},
	animate : function( lastTime ){
		var self = this,
			date = new Date(),
			time = date.getTime(),
			timeDiff = time - lastTime;
		
		for(var i in this.instancesArr){
			//console.log(this.instancesArr[i])
			var bub = this.instancesArr[i];
			bub.x = bub.x;
			bub.y = bub.y;
			bub.scaleX = 1;
			bub.scaleY = 1;
			bub.scaleZ = 1;
			bub.translateX = 0;
			bub.translateY = 0;
			bub.translateZ = 0;
			bub.rotateX = bub.rotateX + Math.floor(Math.random()*(1+5-2))+2;
			//bub.rotateY = bub.rotateY + Math.floor(Math.random()*(1+5-2))+2;
			//bub.rotateZ = bub.rotateZ + Math.floor(Math.random()*(1+5-2))+2;
			bub.transform();
			bub.animate();
		}
		
		// request new frame
		requestAnimFrame(function(){
			if(self.playing){
				self.animate(time);
			}else{
				console.log('stopped')
			}
		});
	}
};
//onload
window.onload = function(){
	Bubbles.init();
};

//requestAnimFrame
window.requestAnimFrame = (function(callback){
	return window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.oRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	function(callback){
		window.setTimeout(callback, 1000 / 60);
	};
})();