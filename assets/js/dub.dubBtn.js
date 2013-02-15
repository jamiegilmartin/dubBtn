var  Dub = window.Dub || {};

/**
 * @author jamiegilmartin@gmail.com
 * @description Bubbles object
 */
Dub.dubBtn = function( element ){
	var self = this;
	this.element = element;
	this.btn = this.element.getElementsByClassName('btn')[0];
	this.dub = this.btn.getElementsByClassName('dub')[0];
	this.mainList = this.element.getElementsByClassName('main')[0];
	
	this.btn.addEventListener('click',function(e){
		console.log(this);
		self.mainList.classList.toggle('showList');
		self.element.classList.toggle('dubBtnOn');
		
		var html = self.dub.innerHTML === '++' ? 'dub' : '++';
		self.dub.innerHTML = html;
		
	},false);
};

//onload
window.onload = function(){
	var dubBtn = document.getElementsByClassName('dubBtn')[0];
	new Dub.dubBtn( dubBtn )
};