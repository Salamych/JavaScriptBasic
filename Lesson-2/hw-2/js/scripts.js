window.addEventListener('load', function(){

  let patterns ={
    notEmpty: /.+/,
    phone: /^\d{7,14}$/,
    email: /^.+@.+\..+$/,
  };

  let errorMsg = {
    notEmpty: 'Хоты бы один символ',
    phone: 'Только цифры, количество цифр от 7 до 14',
    email: 'Email вида sometext@mail.ru'
  };

  let form = document.querySelector('.form');
  let checkInps = form.querySelectorAll('.check');
  let errorList = document.querySelector('.error-list');

  form.addEventListener('submit', function(e){
    let err = false;
    errorList.innerHTML = '';
    checkInps.forEach(el => {
      let pattern = patterns[el.dataset.valid];
      let msg = errorMsg[el.dataset.valid];
      el.value = el.value.trim(); 

      if(!pattern.test(el.value)){
        el.classList.add('err');
        errorList.innerHTML += `<p>${msg}</p>`
        err = true;
      }
    });

    if(err){
      e.preventDefault();
    }
  });

  form.addEventListener('focusin', function(e){
    let el = e.target;
    if(el.classList.contains('check')){
      el.classList.remove('err');
    }
  });
  
});