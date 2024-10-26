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
			this.toggleSlides(imgHide, this.images[this.i]);
		}
	}
	
	next(){
		if(!this.animated){
			let imgHide = this.images[this.i];
			this.i = this.i < this.images.length - 1 ? this.i + 1 : 0;
			this.toggleSlides(imgHide, this.images[this.i]);
		}
	}

	toggleSlides(imgHide, showImg){
		this.animated = true;
		let animate = imgHide.animate([
			{transform: 'translateX(100%)'}
		], 500);

		animate.addEventListener('finish', () => {
			imgHide.classList.remove('showed');	
			this.animated = false;
		});

		showImg.classList.add('showed');
	}
	
}
