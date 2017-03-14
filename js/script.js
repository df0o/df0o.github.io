function init() {
    window.addEventListener('scroll', function(e) {
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
    });
}
window.onload = init();
