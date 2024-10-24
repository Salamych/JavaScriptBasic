window.addEventListener('load', function(){

  new Slider('.gallery-1');
  new Slider('.gallery-2');

	// setInterval(function(){
	// 	slider1.next();
	// }, 3000);
	
});

class Slider{
	constructor(gallery){
		this.root = document.querySelector(gallery);
		this.btnPrev = this.root.querySelector('.buttons .prev');
		this.btnNext = this.root.querySelector('.buttons .next');
		this.images = this.root.querySelectorAll('.photos img');
		this.i = 0;

		this.btnNext.addEventListener('click', () => this.next());
		this.btnPrev.addEventListener('click', () => this.prev());
	}

	prev(){			
		this.images[this.i].classList.remove('showed');
		this.i--;

		if(this.i < 0){
			this.i = this.images.length - 1;
		}

		this.images[this.i].classList.add('showed');
		}
	
	next(){
		this.images[this.i].classList.remove('showed');
		this.i++;

		if(this.i >= this.images.length){
			this.i = 0;
		}

		this.images[this.i].classList.add('showed');
	}
	
}
