window.addEventListener('load', function(){

	let cal = document.querySelector('.cal');
	function greting(name){
		cal.innerHTML = 'hello ' + name;
	}

	function getInpName(calback){
		let name = prompt('Введите имя');
		calback(name);
	}

	getInpName(greting);
	


});

class Timer{
	constructor(selector, time){
		this.box = document.querySelector(selector);
		this.time = time;
		this.interval;
		this.render();
	}

	render(){
		this.box.innerHTML = this.time;
	}

	start(){
		this.interval = setInterval(() => {
			this.tick();
		}, 100);
	}

	tick(){
		this.time--;
		this.render();
	
		if(this.time <= 0){
			this.stop();
		}
	}

	stop(){
		clearInterval(this.interval);
	}
}

class TimerFormat extends Timer{
	render(){
		let h = parseInt(this.time / 3600);
		let hs = this.time % 3600;
		let m = parseInt(hs /  60);
		let s = hs % 60;
		this.box.innerHTML = `${h}:${m}:${s}`;
		return {
			hour: h, 
			minut: m, 
			seconds: s
		};
	}
}

class NiceTimer extends TimerFormat {
	constructor(selector, time, onEnd){
		super(selector, time);
	}
	render(){
		let timer = super.render();	
		let hName = this.getHourPostfix('час', timer.hour); 
		let mName = this.getMinuttSecondPostfix('минут', timer.minut); 
		let sName = this.getMinuttSecondPostfix('секунд', timer.seconds);

		this.box.innerHTML = `${timer.hour} ${hName}: ${timer.minut} ${mName}: ${timer.seconds} ${sName}`;
	}
	onEnd(){
		this.box.innerHTML = 'Время закончилось!Вы потеряли возможность получить скидку!'
	}

	getHourPostfix(root, n){
		let postfix;
		if([11,12,13,14,15].includes(n)){
			postfix = 'ов';
		}
		else if(n%10 === 1){
			postfix = '';
		}	
		else if([2,3,4].includes(n%10)){
			postfix = 'а';
		}
		else{
			postfix = 'ов';
		}
		return root+postfix;		
	}

	getMinuttSecondPostfix(root, n){
		let postfix;
		if([11,12,13,14,15].includes(n)){
			postfix = '';
		}
		else if(n%10 === 1){
			postfix = 'а';
		}	
		else if([2,3,4].includes(n%10)){
			postfix = 'ы';
		}
		else{
			postfix = '';
		}
		return root+postfix;		
	}

}

/* class TimerFormat extends Timer{
	constructor(selector, time){
		super(selector, time); // super.constructor
		this.a = 1;
	}

	render(){
		let h = parseInt(this.time / 3600);
		let hs = this.time % 3600;
		let m = parseInt(hs /  60);
		let s = hs % 60;
		this.box.innerHTML = `${h}:${m}:${s}`;
	}

	start(){
		console.log('timer started');
		super.start();
	}
} */

// super

/*
	class Cat{ 
		findEat(){
			// go hunt
		}
	}

	class CatHome{
		findEat(){
			while(hungry){
				sayMyow();

				if(humanNotExists){
					break;
				}
			}

			if(veryHungry){
				super.findEat();
			}
			else{
				this.findHuman();
				this.findEat();
			}
		}
	}

*/