let body = document.getElementsByTagName('body')[0]
let parrent = document.querySelector('.slider').parentNode;
let slider = document.querySelector('.slider__wrapper');
let slide = document.querySelectorAll('.slider__slide');
let next_slide = document.querySelectorAll('.slider__btn')[1];
let prew_slide = document.querySelectorAll('.slider__btn')[0];

let slider_pos = 0; //Стартовая позиция слайдера
let slider_width = slider.offsetWidth //Ширина обёртки слайдера и одного слайда
let slide_step = -slider_width; //Шаг прокрутки слайдера
let slider_size = slide.length * slider_width //Размер всех слайдов
let slider_index = 0; //Индекс отображающегося слайда

log(parrent.offsetWidth)

function log(elem) {
    return console.log(elem)
}

function prew_control_slide() {
    next_slide.style.opacity = 1
    if(slider_index == 0) {
        prew_slide.style.opacity = 0.4
        return true
    }
}

function next_control_slide() {
    prew_slide.style.opacity = 1
    if(slider_index == slide.length - 1) {
        next_slide.style.opacity = 0.4
        return true
    }
}


slider.style.width = slider_size + 'px'

for (let i = 0; i < slide.length; i++) {
    slide[i].style.maxWidth = slider_width + 'px'
}

window.addEventListener('resize',function() {  //Событие, которое отслеживает изменения экрана и обновляет значения размеров элементов слайдера
    slider_width = parrent.offsetWidth
    slide_step = -slider_width
    slider_size = slide.length * slider_width

    for (let i = 0; i < slide.length; i++) {
        slide[i].style.maxWidth = slider_width + 'px'
    }

    slider.style.width = slider_size + 'px'

    slider_pos = -(slider_width * slider_index)
    slider.style.left = slider_pos + 'px'
    log(slider_pos)
    log(parrent.offsetWidth)
});

next_slide.onclick = function() {
    if (next_control_slide()) {
        slider.style.left = (-slider_size);
    } else {
        slider_index++
        slider_pos = slider_pos + slide_step
        slider.style.left = slider_pos + 'px'
        log(slider_index)
    }
}

prew_slide.onclick = function() {
    if (prew_control_slide()) {
        slider.style.left = 0;
    } else {
        slider_index--
        slider_pos = slider_pos - slide_step
        slider.style.left = slider_pos + 'px'
        log(slider_index)
    }
}




