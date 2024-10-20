window.addEventListener('load', function(){
   
	let form = document.querySelector('.calculator');
	let inp1 = document.querySelector('.inp1');
	let inp2 = document.querySelector('.inp2');
	let btn = document.querySelector('.go');
	let res = document.querySelector('.res');
	let operator = document.querySelector('.operator');

	
	form.addEventListener("input",function(e){
		btn.disabled = false;

		if(e.target.classList.contains('inp')){
			e.target.value = e.target.value.replace(/[^0-9]/g, '');
		}
	});
		

	btn.addEventListener('click', function(){
		let num1 = parseInt(inp1.value);
		let num2 = parseInt(inp2.value);
		let resOp;

		switch(operator.value){
			case '+': resOp = num1 + num2;
			break;
			case '-': resOp = num1 - num2;
			break;
			case '*': resOp = num1 * num2;
			break;
			case '/': resOp = num1 / num2;
			break;
		}

		res.innerHTML = resOp;
		
		this.disabled = true;
	});


});

