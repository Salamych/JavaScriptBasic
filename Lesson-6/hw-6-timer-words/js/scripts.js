// bad code
window.addEventListener('load', function(){

	let timer1 = new Timer('.timer1', 10);
	let timer2 = new Timer('.timer2', 30);
	let timer3 = new NiceTimer('.timer3', 50, onEnd);
	console.log(timer3.render());


	timer1.start();
	timer2.start();
	document.querySelector('.pr2buy').addEventListener('click', function(){
		this.disabled = true;
		this.innerHTML = 'Скидка ваша!';
		timer2.stop();
	});

	console.log(timer3)
	timer3.start();
	function onEnd(){
		document.querySelector('.calback').innerHTML = 'Время закончилось!Вы потеряли возможность получить скидку!'
	}

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
	splitTime(){
		let h = parseInt(this.time / 3600);
		let hs = this.time % 3600;
		let m = parseInt(hs /  60);
		let s = hs % 60;

		return {h, m, s};
	}
	
	render(){
		let tp = this.splitTime();
		this.box.innerHTML = `${tp.h}:${tp.m}:${tp.s}`;
	}
}

class NiceTimer extends TimerFormat {
	constructor(selector, time, onStop = null){
		super(selector, time);
		this.onStop = onStop;
	}
	render(){
		let tp = this.splitTime();	
		let hName = this.getHourPostfix('час', tp.h); 
		let mName = this.getMinuttSecondPostfix('минут', tp.m); 
		let sName = this.getMinuttSecondPostfix('секунд', tp.s);

		this.box.innerHTML = `${tp.h} ${hName}: ${tp.m} ${mName}: ${tp.s} ${sName}`;
		
	}

	stop(){
		super.stop();

		if(this.onStop !== null){
			this.onStop();
		}
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