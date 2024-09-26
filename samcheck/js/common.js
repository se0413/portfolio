$(document).ready(function(){
    let win_w 
    let pc_mobile
    let scrolling

    function resize_chk(){
        win_w = $(window).width()
        if(win_w > 1024){
            pc_mobile = 'pc'
        }else{
            pc_mobile = 'mobile'
        }
        console.log(pc_mobile)
    }
    
    resize_chk()
    $(window).resize(function(){
        resize_chk()
    })


    $('header_sub').on('mouseenter focusin', function(){
        $(this).addClass('fixed')
    })
    $('header_sub').on('mouseleave', function(){
        //마우스를 아웃했을때 fixed 클래스를 삭제하는 건 맨 상단에 있을때만 가능
        if(scrolling <= 0){
            $(this).removeClass('fixed')
        }
    })

    function scroll_chk(){
        scrolling = $(window).scrollTop()
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }   
        // console.log(scrolling)
    }
    scroll_chk()
    $(window).scroll(function(){
        scroll_chk()
    })

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if(pc_mobile == 'pc'){
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
            $(this).addClass('on')
            $('.header_sub').addClass('menu_over')
        }
    })
    $('header .gnb .gnb_wrap ul.depth1 > li:last-child > ul.depth2 > li:last-child > a').on('focusout', function(){
        if(pc_mobile == 'pc'){
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
            $(this).removeClass('on')
        }
    })
    $('header').on('mouseleave', function(){
        if(pc_mobile == 'pc'){
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
            $(this).removeClass('on')
            $('.header_sub').removeClass('menu_over')
        }
    })

    $("header .gnb .gnb_wrap ul.depth1 > li > a").on("click", function(e){
        if(pc_mobile == 'mobile'){
            e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
            $(this).parent().toggleClass('open')
        }
    });
    
    $('.header_top .tnb_r button.lang_open').click(function(){
        $('.header_top .tnb_r').addClass('on')
    })
    $('.header_top .tnb_r button.lang_close').click(function(){
        $('.header_top .tnb_r').removeClass('on')
    })
})