var burgerMenu = document.getElementById('burgerIcon');
var burgerContent = document.getElementById('navMenu');
var burgerIcons = document.getElementsByClassName('burgerButtons');

burgerMenu.addEventListener('click', function(){
    let getStyle = window.getComputedStyle(burgerContent);
    if(getStyle.visibility === 'hidden'){
        burgerContent.style.visibility = 'visible';
        burgerIcons[0].classList.add('changeB1');
        burgerIcons[1].classList.add('changeB2');
        burgerIcons[2].classList.add('changeB3');
    } else {
        burgerContent.style.visibility = 'hidden';
        burgerIcons[0].classList.remove('changeB1');
        burgerIcons[1].classList.remove('changeB2');
        burgerIcons[2].classList.remove('changeB3');
    }
})










