$(function () {


    $('.mainVisual .visual_slide').on('init', function () {
        const current = $('.mainVisual .visual_slide .slick-current');


        const a = new Array(6);
        // console.log(a.length)

        // const box = '<div class="slide"></div>';
        // current.append(box);
        // const span = '<span class="bg"></span>';
        for (let i = 0; i < a.length; i++) {
            $('.slick-slide')
                .find('.slide')
                .append('<div class="s"><span class="bg"></span></div>')
                .find('span')
                // .css({
                //     width: `${i * 100}px`,
                //     background: `url(../images/mainVisual0${i}.jpg) no-repeat calc((-100vw / ${a.length} * ${i})) center`
                // })
                ;
        }


        current.addClass('on').siblings().removeClass('on');

    });

    $('.mainVisual .visual_slide').slick({
        pauseOnHover: false,
        autoplaySpeed: 3000,
        speed: 0,
        fade: true
    });


    $('.mainVisual .visual_slide').on('beforeChange', function () {
        $('.slick-slide').find('.slide').html('')
    })
    $('.mainVisual .visual_slide').on('afterChange', function (e, s, c) {
        console.log(e, s, c); // c=0,1
        $('.mainVisual .right_dots li').removeClass('on');
        $('.mainVisual .right_dots li').eq(c).addClass('on');
        $('.mainVisual .num span').text('0' + (c + 1));

        const current = $('.mainVisual .visual_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');

        const a = new Array(6);
        // console.log(a.length)

        // const box = '<div class="slide"></div>';
        // current.append(box);
        // const span = '<span class="bg"></span>';
        for (let i = 0; i < a.length; i++) {
            $('.slick-slide')
                .find('.slide')
                .append('<div class="s"><span class="bg"></span></div>')
                .find('span')
                .css({
                    background: `url(../images/mainVisual0${c + 1}.jpg) no-repeat calc((-100vw / ${a.length} * ${i})) center`
                })
                ;
        }


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

    })



});