window.addEventListener('load', function(){

	new Slider('.gallery-1');
	
});

class Slider{
	constructor(gallery, time = 1000){
		this.root = document.querySelector(gallery);
		this.btnPrev = this.root.querySelector('.buttons .prev');
		this.btnNext = this.root.querySelector('.buttons .next');
		this.images = this.root.querySelectorAll('.photos img');
		this.i = 0;
		this.animated = false;

		this.btnNext.addEventListener('click', () => this.next());
		this.btnPrev.addEventListener('click', () => this.prev());

		this.leftAnim = [
			{transform: 'rotate(0)', scale: 1, opacity: 1 },
			{transform: 'rotate(5.565deg)', scale: 0.8, opacity: 0.8 },	
			{transform: 'rotate(11.25deg)', scale: 0.6, opacity: 0.6 },	
			{transform: 'rotate(22.5deg)', scale: 0.4, opacity: 0.4 },	
			{transform: 'rotate(33.75deg)', scale: 0.2, opacity: 0.2 },	
			{transform: 'rotate(45deg)', scale: 0, opacity: 0 },
		];

		this.rightAnim = [
			{transform: 'rotate(0)', scale: 1, opacity: 1 },
			{transform: 'rotate(-5.565deg)', scale: 0.8, opacity: 0.8 },	
			{transform: 'rotate(-11.25deg)', scale: 0.6, opacity: 0.6 },	
			{transform: 'rotate(-22.5deg)', scale: 0.4, opacity: 0.4 },	
			{transform: 'rotate(-33.75deg)', scale: 0.2, opacity: 0.2 },	
			{transform: 'rotate(-45deg)', scale: 0, opacity: 0 },
		];

		this.modTime = time;
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
		let btnPos = isNext ? this.rightAnim : this.leftAnim;

		let animateHide = hideImg.animate(btnPos,	this.modTime
		);
		
		animateHide.addEventListener('finish', function(){	
			hideImg.classList.remove('showed');	
			this.animated = false;
		});
		
		let animateShow = showImg.animate(btnPos,
			{
				direction: 'reverse',
				duration: this.modTime,
				delay: this.modTime
			}
		);
		animateShow.addEventListener('finish', () => {	
			showImg.classList.add('showed');	
			this.animated = false;
		});
	}
}


