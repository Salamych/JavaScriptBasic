function fade(elem, time = 500, fps = 50){
  this.fps = fps;
  this.time = time;
  this.steps = this.time/(1000/this.fps);
  this.op = 1;
  this.dO = op/steps;

  this.timer = setInterval(() => {
    this.op -= this.dO;
    elem.style.opacity = this.op;
    this.steps--;

    if(this.steps <= 0){
      clearInterval(this.timer);
      elem.style.display = 'none';
    }
  },(1000/this.fps));

  return this;
}


/*
function fade(elem, t, f){
  let fps = f || 50;
  let time = t || 500;
  let steps = time/(1000/fps);
  let op = 1;
  let dO = op/steps;

  let timer = setInterval(function(){
    op -= dO;
    elem.style.opacity = op;
    steps--;

    if(steps <= 0){
      clearInterval(timer);
      elem.style.display = 'none';
    }
  },(1000/fps));
}
  */