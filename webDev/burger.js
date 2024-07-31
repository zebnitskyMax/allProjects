const burger = document.querySelector('.burger');
const burgerHorLine = document.querySelectorAll('.burger-menu__hor-line');

const navLinks = document.querySelector('.header-list');
const navBlock = document.querySelector('.header__nav');
const burgerWrap = document.querySelector('.burger-wrap')
const linkItem = document.querySelectorAll('.link-item');


window.addEventListener('resize', (e) => {
    windowSize(e.target.innerWidth)
});

function windowSize(width) {
    if (width <= 768) {
        navLinks.classList.add('mobile')
        burger.classList.remove('noneBurgerBtn')
    } else {
        navBlock.classList.remove('mobile')
        navBlock.classList.remove('active-screen-menu')
        navLinks.classList.remove('mobile')
        burger.classList.add('noneBurgerBtn')
        navLinks.classList.remove('appearNavLinkOpenBurger')
    }
}
windowSize(window.innerWidth)

burger.addEventListener('click', () => {
    getCrossBtn()
})

function getCrossBtn() {
    navBlock.classList.toggle('mobile');
    navBlock.classList.toggle('active-screen-menu')
    navLinks.classList.toggle('mobile')
    navLinks.classList.toggle('appearNavLinkOpenBurger')

}