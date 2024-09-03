$(function() {

    $(window).scroll(function() {
        let scroll = $(window).scrollTop();

        const box = $(".image");
        const bgsize = (scroll/5);

        if (scroll >= 1) {
            box.css("width", 33. + bgsize + "%");
        }

    });
});