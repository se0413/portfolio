$(document).ready(function(){
    const popup_swiper = new Swiper('.popup .swiper', { 

        autoplay: { 
            delay: 5000000,
            disableOnInteraction: true,
        },

        loop: true, 

        pagination: { 
            el: '.swiper-pagination', 
            clickable: true, 
            type: 'fraction',  
            renderBullet: function (index, className) {   
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },


        navigation: {  
            nextEl: '.swiper .btn_next', 
            prevEl: '.swiper .btn_prev',  
        },

    });

    const swiper = new Swiper('.swiper', { 
        slidesPerView: "auto", 
        spaceBetween: 16, 
        breakpoints: {
            640: {  /* 640px 이상이 되면 적용 */
                spaceBetween: 30, 
            },
            1024: {  /* 1024px 이상이 되면 적용 */
                spaceBetween: 40,
            },
        },
        centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 2500,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.swiper-pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
        },
    });
    swiper.autoplay.stop();  /* 일시정지 기능 */
    swiper.autoplay.start();  /* 재생 기능 */
})