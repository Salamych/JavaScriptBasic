window.addEventListener('load', function(){

	let faq = document.querySelector('.faq');

	faq.addEventListener('click', function(e){
		if(e.target.classList.contains('ask')){
			toogleItem(e.target);
		}
	});

	function toogleItem(ask){
		
		let answer = ask.nextElementSibling; // ask.parentNode.querySelector('.asnwer')

	  if(answer.jsAnimated === true){
			return;
		} 

		if(answer.classList.contains('open')){
			let animate = answer.animate([
				{height: answer.clientHeight + 'px'},
				{height: '0px'}
			],
			{duration: 500}
			);

			answer.jsAnimated = true;
			animate.addEventListener('finish', function(){
				answer.classList.remove('open');
				answer.jsAnimated = false;
			});
		}
		else{
			answer.classList.add('open');
			answer.jsAnimated = true;

			let animate = answer.animate([
				{height: '0px'},
				{height: answer.clientHeight + 'px'}
			],
			{duration: 500}
			);

			animate.addEventListener('finish', function(){
				answer.jsAnimated = false;
			});
		}
	 }

});


/*
	open: addClass, d: block, anim
	close: addClass, anim
			anim.onend = d: none
*/