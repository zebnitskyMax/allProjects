const burger = document.querySelector('.burger-wrap');
const burgerLines = document.querySelectorAll('.burger-menu__line');
const navMenu = document.querySelector('.header-list');
const blockNav = document.querySelector('.header__nav');
let widthWindow = document.documentElement.clientWidth;
const html = document.querySelector('html');
const hightNavMenu = document.querySelectorAll('.hight-item')
// console.log(navMenu.children[2]);
// console.log(body);

window.addEventListener('resize', (e) => {
    windowSize(e.target.innerWidth)
});

function windowSize(width) {
    if (width < 768) {
        burger.classList.add('burger-appear__parent-block')
        burgerMenu()
        disappearNavMenu()
    } else {
        burger.classList.remove('burger-appear__parent-block');
        appearNavMenu()
    }
}
windowSize(window.innerWidth)

function burgerMenu() {
    burger.addEventListener('click', () => {
        burger.classList.toggle('relative')
        blockNav.classList.toggle('active-screen-menu')
        html.classList.toggle('no_scroll');
        burgerLines.forEach(el => {
            el.classList.toggle('active');
        })
    })
}

function disappearNavMenu() {
    // navMenu.style.display = 'none';
    hightNavMenu.forEach(elem => {
        elem.classList.add('hightNavMenu');
    });
}

function appearNavMenu() {
    navMenu.style.display = 'flex';
    blockNav.style.justifyContent = 'space-between';
}