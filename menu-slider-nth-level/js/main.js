window.addEventListener('load', function(){

document.querySelector('.root-nav').addEventListener('click', function(event){
  
  if(event.target.nodeName !== 'SPAN') return;
  closeAllSubMenu(event.target.nextElementSibling);
  event.target.classList.add('sub-menu-active-span');
  event.target.nextElementSibling.classList.toggle('sub-menu-active');
});

document.querySelector('.root-nav').addEventListener('mouseleave', closeAllSubMenu);

});

function closeAllSubMenu(current = null){
  let parents = [];
  if(current){
    let currentParent = current.parentNode;
    while(currentParent){
      if(currentParent.classList.contains('root-nav')) {break;}
      if(current.nodeName === 'UL') {parents.push(currentParent);}
      currentParent = currentParent.parentNode;

    }
  }

  let subMenu = document.querySelectorAll('.root-nav ul');
  subMenu.forEach(el => {
    if(el != current && !parents.includes(el)){
      el.classList.remove('sub-menu-active');

      if(el.previousElementSibling.nodeName === 'SPAN'){
        el.previousElementSibling.classList.remove('sub-menu-active-span');
      }
    }
  });
}