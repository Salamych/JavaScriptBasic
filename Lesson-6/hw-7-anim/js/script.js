window.addEventListener('load', function(){

  let root = document.querySelector('.gallery-1');
	console.log(root);
	let btnPrev = root.querySelector('.buttons .prev');
	let btnNext = root.querySelector('.buttons .next');
	let images = root.querySelectorAll('.photos img');

	let i = 0;


	btnNext.addEventListener('click', function(){

		let hideImg = images[i];
			
		i++;

		if(i >= images.length){
			i = 0;
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
		
		let animateShow = images[i].animate(
			[
				{transform: 'translateX(0)'},	
			],
			500
		);
		animateShow.addEventListener('finish', function(){	
			images[i].classList.add('showed');	
		});
		
		
		
	});

	btnPrev.addEventListener('click', function(){
		
		let hideImg = images[i];
			
		i--;
		if(i < 0){
			i = images.length - 1;
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
		
		let animateShow = images[i].animate(
			[
				{transform: 'translateX(100%)'},
				{transform: 'translateX(0)'},	
			],
			500
		);
		animateShow.addEventListener('finish', function(){	
			images[i].classList.add('showed');	
		});
		
		
	});

	
});

