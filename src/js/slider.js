import Swiper from 'swiper';

$(document).ready(function() {
    const slider = new Swiper('.b-slider__container', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.b-slider__next',
            prevEl: '.b-slider__prev'
        }
    });

    const feedbackSlider = new Swiper('.b-feedback-slider__container', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.b-feedback-slider__next',
            prevEl: '.b-feedback-slider__prev'
        }
    });
});