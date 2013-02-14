var Bubble = window.Bubble || {};

/**
 * @author jamiegilmartin@gmail.com
 * @description Bubbles object
 */
Bubble = function( element, i ){
	this.element = element;
	
	//Math.floor(Math.random()*(1+High-Low))+Low;
	this.x = this.element.offsetWidth*i;//Math.floor(Math.random()*(1+Bubbles.w-10))+10;
	this.y = 200;//Math.floor(Math.random()*(1+Bubbles.h-10))+10;
	this.r = 0;
	this.h = 0;
	this.w = 0;
	this.vx = 1;
	this.vy = 1;
	this.ax = 0.2;
	this.ay = 0.4;
	
	this.scaleX = 1;
	this.scaleY = 1;
	this.scaleZ = 1;
	this.translateX = 0;
	this.translateY = 0;
	this.translateZ = 0;
	this.rotateX = 0;
	this.rotateY = 0;
	this.rotateZ = 0;
	
	
	//TODO add color
	//this.bgR = 
	
	
	this.transform();
	this.animate();
};

Bubble.prototype.transform = function(){

	var transformString = 'scale3d('+this.scaleX+','+this.scaleY+','+this.scaleZ+') '+
		'translateX('+this.translateX+') '+
		'translateY('+this.translateY+') '+
		'translateZ('+this.translateZ+') '+
		'rotateX('+this.rotateX+'deg) '+
		'rotateY('+this.rotateY+'deg) '+
		'rotateZ('+this.rotateZ+'deg) ';

	var transform = new WebKitCSSMatrix(transformString).toString();
	
	if(this.element)
	//this.element.setAttribute('style', '-webkit-transform:'+transform);
	this.element.style.webkitTransform = transform;
};

Bubble.prototype.animate = function(){
	
	var evenOdd = ( Math.floor(Math.random()*50)+1 );
	if(evenOdd % 2 === 0){
		this.x += this.ax;
		this.y += this.ay; 
	}else{
		this.x -= this.ax;
		this.y -= this.ay; 
	}
	
	//this.y -= this.vy;
	//this.x += this.vx;
	
	this.element.style.left = this.x +'px';
	this.element.style.top = this.y +'px';
};