function addLoopItems() {
    $('.loop-items').each(function (loop) {
        loop += 1;
        $(this).find('.loop-item').each(function (step) {

            /* Adjust step number */
            step += 1;
            if (step < 10) {
                step = '0' + step;
            }

            /* Images */
            let src = 'images/l' + loop + 's' + step + '.jpg';
            let $link = $(this).find('a');
            $link.append("<img class='loop-image' data-src='" + src + "'>");
        });
    });

    [].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = function () {
            img.removeAttribute('data-src');
        };
    });
}

function scrollSpy() {

    let lastId;
    let $headerHeight = $('.header').outerHeight() + 1;

    /* Nav links items */
    let $navLinks = $('.js-nav-link');

    /* Anchors corresponding to nav items */
    let $anchors = $navLinks.map(function () {
        let $anchor = $($(this).attr('href'));
        if ($anchor.length) {
            return $anchor;
        }
    });

    /* Bind click handler to nav items for a fancy scroll animation */
    const SCROLL_SPEED = 300;
    $navLinks.click(function (e) {
        let href = $(this).attr('href');
        let offsetTop = href === '#' ? 0 : $(href).offset().top - $headerHeight + 1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, SCROLL_SPEED);
        e.preventDefault();
    });

    /* Bind to scroll */
    $(window).scroll(function () {

        /* Get container scroll position */
        let windowTop = $(this).scrollTop() + $headerHeight;

        /* Get id of current scroll item */
        let cur = $anchors.map(function () {
            if ($(this).offset().top < windowTop) {
                return this;
            }
        });

        /* Get the id of the current element */
        cur = cur[cur.length - 1];
        let id = cur && cur.length ? cur[0].id : '';

        if (lastId !== id) {
            lastId = id;

            /* Set or remove active class */
            $navLinks.removeClass('current');
            $navLinks.filter("[href='#" + id + "']").addClass('current');
        }
    });
}

$(document).ready(function () {
    addLoopItems();
    scrollSpy();
});
