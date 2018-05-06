$(document).ready(function () {
    $(".list--items").each(function (loop) {
        loop += 1;
        $(this).find(".item").each(function (step) {

            /* Adjust step number */
            step += 1;
            if (step < 10) {
                step = "0" + step;
            }

            /* Background */
            $(this).append("<div class='background'></div>");
            $(this).find(".background").css({
                "background": "url('img/l" + loop + "s" + step + ".png') no-repeat center",
                "background-size": "cover"
            });
        });
    });
});
