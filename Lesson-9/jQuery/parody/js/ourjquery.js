
function $(selector){

  let elements;

  if(selector instanceof HTMLElement){
    elements = [selector];
  }
  else { 
    elements = document.querySelectorAll(selector);
  }

  return new OurJquery(elements);
}

function OurJquery(elements){
  
  this.elements = elements;

  this.on = function(eventname, f){
    for(let i = 0; i < this.elements.length; i++){
      this.elements[i].addEventListener(eventname, f);
    }
    return this;
  }

  this.addClass = function(name){
    for(let i = 0; i < this.elements.length; i++){
      this.elements[i].classList.add(name);
    }
    return this;
  }

  this.removeClass = function(name){
    for(let i = 0; i < this.elements.length; i++){
      this.elements[i].classList.remove(name);
    }
    return this;
  }

  this.html = function(html){
    for(let i = 0; i < this.elements.length; i++){
      this.elements[i].innerHTML = html;
    }
    return this;
  }

  this.fade = function(time, callback){
    
    let func = callback || function(){};

    for(let i = 0; i < this.elements.length; i++){
      tehFade(this.elements[i], time, 50, func);
    }
    return this;
  }
}

function tehFade(elem, t, f, callback){
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
      callback.call(elem);
    }
  },(1000/fps));
}