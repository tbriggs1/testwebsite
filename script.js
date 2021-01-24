var burgerMenu = document.getElementById('burgerIcon');
var burgerContent = document.getElementById('navMenu');
var burgerIcons = document.getElementsByClassName('burgerButtons');
var burgerClose = document.getElementById('burgerIcon:after')



burgerMenu.addEventListener('click', function(){
    burgerContent.style.visibility = 'visible';
    burgerMenu.classList.add('burgerClose');
    burgerMenu.removeAttribute('burgerIcon');
    burgerIcons[0].classList.add('changeB1');
    burgerIcons[1].classList.add('changeB2');
    burgerIcons[2].classList.add('changeB3');
})


burgerClose.addEventListener('click', function(){
    burgerContent.style.visibility = 'hidden';
    burgerMenu.classList.remove('burgerClose');
    burgerMenu.id = 'burgerIcon';
    burgerIcons[0].classList.remove('changeB1');
    burgerIcons[1].classList.remove('changeB2');
    burgerIcons[2].classList.remove('changeB3');
})






