
function $(selector){
  let elements = document.querySelectorAll(selector);

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
}