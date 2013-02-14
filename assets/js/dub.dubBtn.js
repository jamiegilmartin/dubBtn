var  Dub = window.Dub || {};

/**
 * @author jamiegilmartin@gmail.com
 * @description Bubbles object
 */
Dub.dubBtn = function( element ){
	var self = this;
	this.element = element;
	this.mainList = this.element.getElementsByClassName('main')[0];
	
	this.element.addEventListener('click',function(e){
		console.log(this);
		self.mainList.classList.toggle('showList');
		this.classList.toggle('dubBtnOn');
	},false);
};

//onload
window.onload = function(){
	var dubBtn = document.getElementsByClassName('dubBtn')[0];
	new Dub.dubBtn( dubBtn )
};