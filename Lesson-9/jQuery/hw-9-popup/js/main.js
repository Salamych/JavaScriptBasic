window.addEventListener('load', function(){

  let popup = new Popup();

  console.log(popup.isContain);

  document.querySelector('.go-menu').addEventListener('click', function(){
    popup.open(`<h1>Hello world!</h1>`);
    console.log(popup.isContain);
  });

  document.querySelector('.go-menu-footer').addEventListener('click', function(){
    popup.open(`<h1>Не упустите наше предложение!</h1>`);
  });
});

function Popup(){
  this.pop = document.querySelector('.popup');
  this.overlay = document.querySelector('.overlay');
  this.popupConent = document.querySelector('.popup-conent');
  this.closeLeter = document.querySelector('.close-letter')
  this.isContain = this.pop.classList.contains('active') && this.overlay.classList.contains('active');
  
  this.overlay.addEventListener('click', () => {
    this.close();
  });
  this.closeLeter.addEventListener('click', () => {
    this.close();
  });

  this.open = function(content){
    if(!this.isContain){
      this.pop.classList.add('active');
      this.overlay.classList.add('active');
      this.popupConent.innerHTML = content;
    }
  }
  this.close = function(){
      this.pop.classList.remove('active');
      this.overlay.classList.remove('active');
  }
  
  
}