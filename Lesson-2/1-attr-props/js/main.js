window.addEventListener('load', function(){
  let checkbox = document.querySelector('.some');
  let btn = document.querySelector('.go');
  let div = document.querySelector('.box');

  checkbox.addEventListener('change', function(){
    console.log(checkbox.checked);
    btn.disabled = !checkbox.checked;
  });
}); 