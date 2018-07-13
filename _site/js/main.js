$(document).ready(function () {
    $(".loop-items").each(function (loop) {
        loop += 1;
        $(this).find(".loop-item").each(function (step) {

            /* Adjust step number */
            step += 1;
            if (step < 10) {
                step = "0" + step;
            }

            /* Image */
            var src = "images/l" + loop + "s" + step + ".jpg";
            $link = $(this).find("a");
            $link.append("<img class='loop-image' src='" + src + "'>");
        });
    });
});

function myFunction() {
    let test = "chaine";
}