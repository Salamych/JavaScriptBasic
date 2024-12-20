window.addEventListener('load', function(){

	let faq = document.querySelector('.faq');

	faq.addEventListener('click', function(e){
		if(e.target.classList.contains('ask')){
			toogleItem(e.target);
		}
	});

	function toogleItem(ask){
		
		let answer = ask.nextElementSibling; // ask.parentNode.querySelector('.asnwer')

		if(answer.classList.contains('open')){
			if('animate' in answer){
				let animate = answer.animate([
					{ opacity: 1, transform: 'translateX(0)' }, 
					{ opacity: 0, transform: 'translateX(100px)' }
				], 
					{ duration: 500 }
				);

				animate.addEventListener('finish', function(){
					answer.classList.remove('open');
				});
			}
			else{
				answer.classList.remove('open');
			}
		}
		else{
			answer.classList.add('open');
		}
	}

});


/*
	open: addClass, d: block, anim
	close: addClass, anim
			anim.onend = d: none
*/