
window.addEventListener('load', function(){
  let div = document.querySelector('.some');
  
  div.addEventListener('click', function(){
    div.innerHTML += ' Hello';
  });
  div.addEventListener('click', function(){
    div.innerHTML += ' my friend!';
  });
});

/*
window.addEventListener('load', function(){
  let div = document.querySelector('.some');
  div.innerHTML = '1';
}); 
div.addEventListener('click', function(){
    div.innerHTML += ' Hello';
  });
*/