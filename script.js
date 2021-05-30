let parrent = document.querySelector('.slider').parentNode;
let slider_wrapper = document.querySelector('.slider__wrapper');
let slide = document.querySelectorAll('.slider__slide');
let next_slide = document.querySelectorAll('.slider__btn')[1];
let prew_slide = document.querySelectorAll('.slider__btn')[0];

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

let slider_pos = 0;                                         //Стартовая позиция слайдера 
let slider_wrapper_width = slider_wrapper.offsetWidth       //Ширина обёртки слайдера
let slide_width = slider_wrapper_width;                     //Ширина одного слайда
let slide_step = -slide_width;                              //Шаг прокрутки слайдера
let total_slides_size = slide.length * slide_width          //Общий размер всех слайдов
let slider_index = 0;                                       //Индекс отображающегося слайда


slider_wrapper.style.width = total_slides_size + 'px'       //Задаём ширину обёртки равной размерам всех слайдов вместе
setTimeout(() => {
    slider_wrapper.style.transition = '.6s ease';           //Устанавливаем стили перехода при инициализации
}, 500);                                                    

for (let i = 0; i < slide.length; i++) {
    slide[i].style.maxWidth = slider_wrapper_width + 'px'   //Каждому слайду задаём максимальный размер равный ширине одного слайда
}

window.addEventListener('resize',function() {  /* Событие, которое отслеживает изменения экрана и 
                                                обновляет значения размеров элементов слайдера */
    slider_wrapper.style.transition = 'none';                                            
    slider_wrapper_width = parrent.offsetWidth
    slide_step = -slider_wrapper_width
    total_slides_size = slide.length * slider_wrapper_width

    for (let i = 0; i < slide.length; i++) {
        slide[i].style.maxWidth = slider_wrapper_width + 'px'
    }

    slider_wrapper.style.width = total_slides_size + 'px'

    slider_pos = -(slider_wrapper_width * slider_index)
    slider_wrapper.style.left = slider_pos + 'px'
    setTimeout(() => {
        slider_wrapper.style.transition = '.6s ease';
    }, 500);
      
});

next_slide.onclick = function() {
    if (next_control_slide()) {
        slider_wrapper.style.left = (-total_slides_size);
    } else {
        slider_index++
        slider_pos = slider_pos + slide_step
        slider_wrapper.style.left = slider_pos + 'px'
    }
}

prew_slide.onclick = function() {
    if (prew_control_slide()) {
        slider_wrapper.style.left = 0;
    } else {
        slider_index--
        slider_pos = slider_pos - slide_step
        slider_wrapper.style.left = slider_pos + 'px'
    }
}




