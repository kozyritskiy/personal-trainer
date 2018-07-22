$(document).ready(function() {
    let ul = $(".nav__list");

    ul.click(handle);

    function handle(event) {
        event.preventDefault();
        let target = $(event.target);
        if (target.is("a")) {
            let scroll_el = target.attr("href");
            $("html, body").animate({ scrollTop: $(scroll_el).offset().top }, 1000);
        }
    }
});
