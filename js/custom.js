$(function () {


    $('.mainVisual .visual_slide').on('init', function () {
        const current = $('.mainVisual .visual_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
    });

    $('.mainVisual .visual_slide').slick({
        pauseOnHover: false,
        autoplaySpeed: 2000,
    });

    $('.mainVisual .visual_slide').on('afterChange', function (e, s, c) {
        console.log(e, s, c); // c=0,1
        $('.mainVisual .right_dots li').removeClass('on');
        $('.mainVisual .right_dots li').eq(c).addClass('on');
        $('.mainVisual .num span').text('0' + (c + 1));

        const current = $('.mainVisual .visual_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
    });

    $('.mainVisual .right_dots li a').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).parent().index();
        $('.mainVisual .visual_slide').slick('slickGoTo', idx);
    });


    let st = true;
    $('.mainVisual .play').on('click', function () {
        $(this).toggleClass('on');

        if (st) {
            $('.mainVisual .visual_slide').slick('slickPlay');
        } else {
            $('.mainVisual .visual_slide').slick('slickPause');
        }

        st = !st;

    });

    $('.mainPortfolio .pf_left_slide').slick({
        arrows: false,
        fade: true,
        asNavFor: '.mainPortfolio .pf_right_slide',
    });

    $('.mainPortfolio .pf_right_slide').slick({
        arrows: false,
        slidesToShow: 4,
        asNavFor: '.mainPortfolio .pf_left_slide',
    });

    $('.mainPortfolio .bt_left').on('click', function () {
        $('.mainPortfolio .pf_left_slide').slick('slickPrev');
    });

    $('.mainPortfolio .bt_right').on('click', function () {
        $('.mainPortfolio .pf_left_slide').slick('slickNext');
    });


});