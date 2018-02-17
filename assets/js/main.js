$( document ).ready(function() {
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
});