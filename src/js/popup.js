$(document).ready(function () {
    let mainBtn = $('.s-main__btn'),
        defaultBtn = $("._size"),
        template = $('#form').html();

    mainBtn.on("click", scrollTo);
    defaultBtn.on("click", show);

    function scrollTo() {
        $("html, body").animate({ scrollTop: $("#contact").position().top }, 2000);
        show();
    }
    
    function show(){
        $(".s-form").append(template);
        $(".s-form").animate({ height: "show" }, 1500);

        defaultBtn.animate({ height: "hide" }, 500);
        mainBtn.animate({ height: "hide" }, 500);

        let crossBtn = $(".s-order__cross");

        crossBtn.on("click", hide);

        function hide(){
            $(".s-form").animate({ height: "hide" }, 1500);

            defaultBtn.animate({ height: "show" }, 1000);
            mainBtn.animate({ height: "show" }, 500);
            
            setTimeout(function(){
                $(".s-order").remove();
            },1500);
        }
    }  
});