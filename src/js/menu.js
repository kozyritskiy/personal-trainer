$(document).ready(function () {
    let hamBtn = $(".hamburger"),
        wrapper = $(".wrapper"),
        wrap = $('.wrap__fullmenu');

    template = $("#menu").html();
    $(".wrap__fullmenu").append(template);
    let ul = $(".s-full-menu__list");

    ul.click(handle);
    hamBtn.click(open);

    function open() {
        wrap.finish();
        hamBtn.toggleClass("open");
        wrapper.toggleClass("hidden");
        wrap.slideToggle("slow");
    };
        
    function handle(event) {
        let target = $(event.target);
        if (target.is("a")){
            let scroll_el = target.attr("href");
            $("html, body").animate({ scrollTop: $(scroll_el).offset().top }, 1000);
            open();
        }
    }
});