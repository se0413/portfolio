$(document).ready(function(){

		let device_status
		let window_w
		function device_chk(){
			window_w = $(window).width()
			if(window_w > 1024 ){ //pc
				device_status = 'pc'
			}else{ //모바일
				device_status = 'mobile'
			}
		}
		device_chk()//문서가 로딩되고 1번 실행
		$(window).resize(function(){ //문서가 리사이즈될 때마다 1번씩 실행
			device_chk()
		})
		
		$('.header .gnb_wrap ul li[data-link="main"]').on('click', function(){
			swiper.slideTo(0, 500)
		});

		var container_swiper = new Swiper(".container .swiper", {
			slidesPerView: 1,
			spaceBetween: 0,
			mousewheel: true,
			freeMode: false,
			
		});
		
})