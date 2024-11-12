$(function(){
  $('.ask').on('click', function(){
    let answer = $(this).next();
    $('.answer').not(answer).slideUp(1000);
    answer.slideToggle(1000);
  })
});

// $(function(){
//   $('.ask').on('click', function(){
  
//     if($(this).next().hasClass('open')){
//       $(this).next().slideUp(1000).removeClass('open');
//     }
//     else{
//       $('.answer').not($(this).next()).slideUp(1000).removeClass('open');
//       $(this).next().slideDown(1000).addClass('open');
//     } 
//   })
// });
