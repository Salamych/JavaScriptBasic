window.onload = function(e){
    
  var inputs = document.querySelectorAll('.check');
  
  document.querySelector('form').onsubmit = function(e){
      var error = false;
      
      for(var i = 0; i < inputs.length; i++){
          if(inputs[i].value === ''){
              inputs[i].classList.add('err');
              error = true;
          }
      }
      
      if(error){
          e.preventDefault();
      }
  }
  
  /* for(var i = 0; i < inputs.length; i++){
      inputs[i].oninput = function(){
          this.classList.remove('err');
      }
  }
  
  for(var i = 0; i < inputs.length; i++){
      inputs[i].onfocus = function(){
          this.classList.add('focus');
      }
  }
  
  for(var i = 0; i < inputs.length; i++){
      inputs[i].onblur = function(){
          this.classList.remove('focus');
      }
  } */

    //   let jqInputs = new OurJquery(inputs);

    let jqInputs = $('.check');


    //   jqInputs.click(function(){
    //     this.classList.remove('err');
    //   });
  
      jqInputs.on('click',function(){
        this.classList.remove('err');
      });

      jqInputs.on('focus',function(){
        this.classList.add('focus');
      });

      jqInputs.on('blur',function(){
        this.classList.remove('focus');
      });

      jqInputs.addClass('some').addClass('some1').addClass('some2');

      $('.items .item').on('click', function(){
        $(this).fade(1000, function(){
          this.style.opacity = 1;
          this.style.display = 'block';
          $(this).html('536');
        });
      });

   
  // console.log($('.items .item').html());
 
}