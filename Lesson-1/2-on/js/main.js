
window.onload = function(){
  let div = document.querySelector('.some');
  
  div.onclick = function(){
    div.innerHTML += ' Hello';
  };
  div.onclick = function(){
    div.innerHTML += ' 0';
  };
}
