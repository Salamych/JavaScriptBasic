window.addEventListener('load', function(){

	let faq = document.querySelector('.faq');

	faq.addEventListener('click', function(e){
		if(e.target.classList.contains('ask')){
			toogleItem(e.target);
		}
	});

	function toogleItem(ask){
		
		let answer = ask.nextElementSibling; // ask.parentNode.querySelector('.asnwer')
		let inlineStyle = answer.style;

	
		if(answer.classList.contains('open')){
			inlineStyle.height = answer.clientHeight + 'px';

			let animate = answer.animate([
				{height: answer.clientHeight + 'px'},
				{height: '0px'}
			],
			{duration: 500}
			);

			animate.addEventListener('finish', function(){
				inlineStyle.height = '';
				answer.classList.remove('open');
			});
		}
		else{
			answer.classList.add('open');

			let animate = answer.animate([
				{height: '0px'},
				{height: answer.clientHeight + 'px'}
			],
			{duration: 500}
			);

			animate.addEventListener('finish', function(){
				inlineStyle.height = '';
			});
			
		}
	 }

});


/*
	open: addClass, d: block, anim
	close: addClass, anim
			anim.onend = d: none
*/