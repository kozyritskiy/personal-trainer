

$(document).ready(function() {
    let info = $(".s-work-with__wrap-info");
    let arrow = $(".s-work-with__btn-arrow");
    let infoheight = info.height();

    let loyality = $(".wrap-loyalty");
    let loyalityheight = info.height();

    if (window.matchMedia('(max-width: 480px)').matches) {
        info.animate({ height: infoheight / 2 + "px" });
        loyality.animate({ height: loyalityheight / 2 + "px" });
    } 
   

    $('.s-work-with__btn').on('click', toggleText);
    $(".s-advantage__btn").on("click", toggleAdv);

    function toggleText() {
        arrow.toggleClass("arrow-less");

        if (info.css("height") == infoheight + "px") {
          $(".s-work-with__btn-text").text("READ MORE");
            info.animate({ height: infoheight / 2 + "px" }, 700);
        } else {
          $(".s-work-with__btn-text").text("READ LESS");
            info.animate({ height: infoheight + "px" }, 700);
        }
    }
    function toggleAdv() {
        loyality.toggleClass("wrap-info_active");
        arrow.toggleClass("arrow-less");

        if (loyality.css("height") == loyalityheight + "px") {
          $(".s-work-with__btn-text").text("READ MORE");
          loyality.animate({ height: loyalityheight / 2 + "px" }, 700);
        } else {
          $(".s-work-with__btn-text").text("READ LESS");
          loyality.animate({ height: loyalityheight + "px" }, 700);
        }
    }
});
