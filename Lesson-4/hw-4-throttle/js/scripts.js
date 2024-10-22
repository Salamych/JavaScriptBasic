window.addEventListener('load', function(){
	

	let menu = document.querySelector('.menu');
	let links = document.querySelectorAll('a');
	let btn = document.querySelector('.btn-up');
	let visible = {
		show: function(){btn.classList.remove('btn-up_hide')},
		hide: function(){btn.classList.add('btn-up_hide')}
	};
	
	let lastRun = -Infinity;
	let isWaiting = false;
	let timeInterval = 100;

	window.addEventListener('scroll', function(e){
		
		if((Date.now() - lastRun) >= timeInterval){
			lastRun = Date.now();
			isWaiting = false;
		}

		if(!isWaiting){
			onScroll();
			isWaiting = true;
		}
					
	});

	btn.addEventListener('click', function(){
		window.scrollTo({top: 0, behavior:'smooth'});
	});

	menu.addEventListener('click', function(e){
		let el = e.target;
		
		if(el.classList.contains('menu__link')){
			e.preventDefault();
			scrollToTarget(el.hash);
		}
	});
	
	if(location.hash !== ''){
		scrollToTarget(location.hash);
	}

	function scrollToTarget(id){
		let target = document.querySelector(id);

		if(target !== null){
			let pos = target.offsetTop - 70;

			window.scrollTo({
				top: pos,
				behavior:'smooth'
			});
		}
	}

	function onScroll(){
		let scrollY = window.scrollY;
		scrollY > window.innerHeight ? visible.show() : visible.hide();
		
		for(let i = links.length-1; i >= 0; i--){
			let el = links[i];
			let target = document.querySelector(el.hash);

			if((scrollY + window.innerHeight/2) > target.offsetTop){
				menu.querySelector('.menu__link-active').classList.remove('menu__link-active');
				el.classList.add('menu__link-active');
				break;
			}
		}
	}

	
});


/**********************Variant 2 */
/*
let lastRun = -Infinity;

window.addEventListener('scroll', function(e){
		let current = Date.now();

		if(current > lastRun + 100){
			onScroll();
			lastRun = current;
		}	
	});

*/