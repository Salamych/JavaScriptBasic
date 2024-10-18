window.addEventListener('load', function(){
   
	let inp1 = document.querySelector('.inp1');
	let inp2 = document.querySelector('.inp2');
	let btn = document.querySelector('.go');
	let res = document.querySelector('.res');
	let operator = document.querySelector('.operator');

	inp1.addEventListener('input', getInpValue);
	inp2.addEventListener('input', getInpValue);
	
	operator.addEventListener("input",function(){
		this.value = this.value;
		btn.disabled = false;
	});
		

	btn.addEventListener('click', function(){
		switch(operator.value){
			case '+': res.innerHTML =  parseInt(inp1.value) + parseInt(inp2.value);
			break;
			case '-': res.innerHTML = parseInt(inp1.value) - parseInt(inp2.value);
			break;
			case '*': res.innerHTML = parseInt(inp1.value) * parseInt(inp2.value);
			break;
			case '/': res.innerHTML = parseInt(inp1.value) / parseInt(inp2.value);
			break;
		}
		this.disabled = true;
	});

	function getInpValue(){
		this.value = this.value.match(/[-+]?\d+/);
		btn.disabled = false;
	}


});

