const img = document.querySelectorAll('.slider-img');
console.log(img.length);
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;

function changeWidth() {
    width = document.querySelector('.slider').offsetWidth;
    console.log(width)
    sliderLine.style.width = width * img.length + 120 + 'px';
    img.forEach(elem => {
        elem.style.width = width + 'px';
        elem.style.height = 'auto';
    });
    rolSlider();
}

window.addEventListener('resize', changeWidth);

// const next = document.querySelector('.left-arrow');
let sliderCount = document.querySelector('.slider-count__increase');

document.querySelector('.left-arrow').addEventListener('click', () => {
    count--;
    if (count < 0) {
        count = img.length - 1;
    }
    console.log(count)
    sliderCount.textContent = count;
    rolSlider();
})

document.querySelector('.right-arrow').addEventListener('click', () => {
    count++;
    if (count >= img.length) {
        count = 0;
    }
    console.log(count)
    sliderCount.textContent = count;
    rolSlider();
})

function rolSlider() {
    sliderLine.style.transform = 'translateX(-' + count * width + 'px)';
}
window.onload = function () {
    width = document.querySelector('.slider').offsetWidth;
    console.log(width)
    sliderLine.style.width = width * img.length + 120 + 'px';
    img.forEach(elem => {
        elem.style.width = width + 'px';
        elem.style.height = 'auto';
    });
    rolSlider();
}