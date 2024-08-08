console.log(
    `Shelter-Part1
    Страница Main (60)
        Проверка верстки +7
        Вёрстка соответствует макету +35
        Требования к css +6
        Интерактивность элементов +12
 Страница Pets (40)
        Проверка верстки +7
        Вёрстка соответствует макету +15
        Требования к css +4
        Интерактивность элементов +14
`
)
console.log(
    `Shelter-Part2
        1. Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14 
        2. Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14 
        3. Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14 
        4. Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6 
        5. Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6
        6. Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6
        7. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20
        8. Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции: +8
        9. При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4
        Открытие меню при клике на иконку бургер-меню на текущем этапе не проверяется
        10. Верстка обеих страниц валидная: для проверки валидности вёрстки используйте сервис https://validator.w3.org/ : +8
`
)

const burgerBTN = document.querySelector('.header-burger')
const navHeader = document.querySelector('.header-nav')

burgerBTN.addEventListener('click', openBurger);

function openBurger() {
    burgerBTN.classList.toggle('active-burger')
}


//find the width
window.addEventListener('resize', (e) => {
    windowSize(e.target.innerWidth)
});

function windowSize(width) {
    // console.log(width)
    if (width > 760) {
        burgerBTN.classList.add('disabled')
        navHeader.classList.remove('disabled-nav')
    } else {
        burgerBTN.classList.remove('disabled')
        navHeader.classList.add('disabled-nav')
    }

}
windowSize(window.innerWidth)