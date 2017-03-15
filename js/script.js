$(document).ready(function() {
    $("#title").css("opacity", 0);
    $("#title").animate({ "top": "-=50px" }, { queue: false, duration: 1000 });
    $("#title").animate({ opacity: 1 }, { queue: false, duration: 3500 });
    $(".navop").css("opacity", 0);
    $(".navop").animate({ opacity: 1, "top": "+=50px" }, { queue: false, duration: 1500 });
    $("#title-sub").css("opacity", 0);
    $("#title-sub").animate({ "top": "-=50px" }, { queue: false, duration: 1200 });
    $("#title-sub").animate({ opacity: 1 }, { queue: false, duration: 4000 });
    $("#scrolldown").css("opacity", 0);
    $("#scrolldown").animate({ opacity: 1 }, { queue: false, duration: 4000 });

    $(window).on("scroll", function() {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 200,
            nav = document.querySelector("nav");
        if (distanceY > shrinkOn) {
            classie.add(nav, "smaller");
        } else {
            if (classie.has(nav, "smaller")) {
                classie.remove(nav, "smaller");
            }
        }
    })
});

$(document).on("click", ".navop", function(event) {
    event.preventDefault();
    var target = this.getAttribute("href");
    $("html, body").animate({
        scrollTop: $(target).offset().top
    }, 2000);
});
