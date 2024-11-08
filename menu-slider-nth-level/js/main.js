window.addEventListener('load', function(){

document.querySelector('.root-nav').addEventListener('click', function(event){
 
  if(event.target.nodeName !== 'SPAN') return;

  closeAllSubMenu(event.target.nextElementSibling);
  event.target.nextElementSibling.classList.toggle('sub-menu-active');
});

function closeAllSubMenu(current = null){
  let parents = [];
  if(current){
    let currentParent = current.parentNode;
    console.log(currentParent.classList);
    while(currentParent){
      // if(currentParent.classList.contains('root-nav')) break;
      if(currentParent.nodeName === 'UL') parents.push(currentParent);
      currentParent = currentParent.nodeName;
    }
  }

  let subMenu = document.querySelectorAll('.root-nav ul');
  subMenu.forEach(el => {
    if(el != current && !parents.includes(el)){
      el.classList.remove('sub-menu-active');
    }
  });
}

});