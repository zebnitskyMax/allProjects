const burger = document.querySelector('.burger-wrap');
const burgerLines = document.querySelectorAll('.burger-menu__line');
let widthWindow = document.documentElement.clientWidth;

// (function () {
// console.log(widthWindow)
// console.log(window.innerWidth)
// if (window.innerWidth <= 768) {
//     burgerMenu()
// }
// })()

window.onload = () => {
    if (window.innerWidth < 768) {
        burgerMenu()
    }
};
// window.addEventListener('resize', () => {
//     if (window.innerWidth < 768) {
//         burgerMenu()
//     }
// });


function burgerMenu() {
    burger.classList.toggle('burger-appear__parent-block')
    burger.addEventListener('click', () => {
        burger.classList.toggle('relative')
        burgerLines.forEach(el => {
            el.classList.toggle('active');
        })
    })
}