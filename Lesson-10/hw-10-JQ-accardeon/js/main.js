$(function(){
  $('.ask').on('click', function(){
  
    if($(this).next().hasClass('open')){
      $(this).next().slideUp(1000).removeClass('open');
    }
    else{
      $('.answer').not($(this).next()).slideUp(1000).removeClass('open');
      $(this).next().slideDown(1000).addClass('open');
    } 
  })
});

