$( document ).ready(function() {
    $(function(){
        var shrinkHeader = 25;
        $(window).scroll(function() {
            var scroll = getCurrentScroll();
            if ( scroll >= shrinkHeader ) {
                $('#navbar').addClass('shrink');
            }
            else {
                $('#navbar').removeClass('shrink');
            }
        });
        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
    });
    $(".jump").click( function (e) {
        e.preventDefault();
        var target = $(this.hash),
            headerHeight = 68;

        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        if (target.length)
        {
            $('html, body').animate({
                scrollTop: target.offset().top - headerHeight
            }, 600);
            return window.history.pushState(null, null, this.href);
        }
    });
    //cookie private policy
    window.addEventListener("load", function(){
        window.cookieconsent.initialise({
            "palette": {
                "popup": {
                    "background": "#343a40",
                    "text": "#62efff"
                },
                "button": {
                    "background": "transparent",
                    "text": "#62efff",
                    "border": "#62efff"
                },
                "content": {
                    "message": "This website uses cookies to ensure you get the best experience on our website. Look also on my privacy policy.",
                    "dismiss": "I accept the privacy policy"
                }
            }
        })});
});