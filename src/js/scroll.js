$(document).ready(function () {
    $('.nav__btn').click(function () {
        $('html, body').animate({ scrollTop: $('#contact').position().top }, 2000);
    });
});