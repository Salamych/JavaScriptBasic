window.addEventListener('load', function(){

	new Slider('.gallery-1');
	
});

class Slider{
	constructor(gallery){
		this.root = document.querySelector(gallery);
		this.btnPrev = this.root.querySelector('.buttons .prev');
		this.btnNext = this.root.querySelector('.buttons .next');
		this.images = this.root.querySelectorAll('.photos img');
		this.i = 0;
		this.animated = false;

		this.btnNext.addEventListener('click', () => this.next());
		this.btnPrev.addEventListener('click', () => this.prev());
	}

	prev(){
		if(!this.animated){		
			let imgHide = this.images[this.i];
			this.i = this.i > 0 ? this.i - 1 : this.images.length - 1;
			this.toggleSlides(imgHide, this.images[this.i], false);
		}
		}
	
	next(){
		if(!this.animated){
			let imgHide = this.images[this.i];
			this.i = this.i < this.images.length - 1 ? this.i + 1 : 0;
			this.toggleSlides(imgHide, this.images[this.i]);
		}
	}

	toggleSlides(hideImg, showImg, isNext = true){
		this.animated = true;
		let animateHide = hideImg.animate([
			{transform: isNext ? 'translateX(100%)' : 'translateX(-100%)'},
		], 500);
		animateHide.addEventListener('finish', function(){	
			hideImg.classList.remove('showed');
			this.animated = false;	
		});

		let animateShow; 
		if(isNext){
			animateShow = showImg.animate([{transform: 'translateX(0)'},], 500);
		} 
		else {
			animateShow = showImg.animate(
				[
					{transform: 'translateX(100%)'},
					{transform: 'translateX(0)'},	
				],
				500
			);
		}
		
		animateShow.addEventListener('finish', () => {	
			showImg.classList.add('showed');
			this.animated = false;		
		});
	}
	
}

/*****Before refactoring*******/

/*
prev(){		
		let hideImg = this.images[this.i]	
		this.i--;

		if(this.i < 0){
			this.i = this.images.length - 1;
		}

		let animateHide = hideImg.animate(
			[
				{transform: 'translateX(-100%)'},	
			],
			500
		);
		animateHide.addEventListener('finish', function(){	
			hideImg.classList.remove('showed');	
		});
		
		let animateShow = this.images[this.i].animate(
			[
				{transform: 'translateX(100%)'},
				{transform: 'translateX(0)'},	
			],
			500
		);
		animateShow.addEventListener('finish', () => {	
			this.images[this.i].classList.add('showed');	
		});

		
		}
	
	next(){
		let hideImg = this.images[this.i]	
		this.i++;

		if(this.i >= this.images.length){
			this.i = 0;
		}

		let animateHide = hideImg.animate(
			[
				{transform: 'translateX(100%)'},	
			],
			500
		);
		
		animateHide.addEventListener('finish', function(){	
			hideImg.classList.remove('showed');	
		});
		
		let animateShow = this.images[this.i].animate(
			[
				{transform: 'translateX(0)'},	
			],
			500
		);
		animateShow.addEventListener('finish', () => {	
			this.images[this.i].classList.add('showed');	
		});
	} 
 */

