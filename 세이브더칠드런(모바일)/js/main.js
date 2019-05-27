// JavaScript Document
$(document).ready(function(e) {
	var winWidth=$(window).width();
	var navNum=0;
	//메인 비주얼의 아이콘 높이를 넓이와 같게 조절
	var v_width=$('.v_li_icon').width();
	$('.v_li_icon').css('height',v_width);
	
	//주메뉴 a태그에 클릭이벤트 설정
	$('nav>ul>li>a').click(function(){
		//만약 주메뉴(a)에 active클래스가 설정되어 있지 않으면
		//attr() : 객체의 속성을 검색하는 메서드
		//!= : '같지않다'라는 비교연산자
		if($(this).attr('class') != 'active'){
			//주메뉴의 다음 형제(sub)들어감
			//next : 다음형제객체
			//prev : 이전형제객체
			//siblings('li') : 형제객체찾기
			$('nav>ul>li>a').next().slideUp();
			//주메뉴의 active클래스 모두 제거
			$('nav>ul>li>a').removeClass('active');
			//클릭한 메뉴에만 active클래스 추가
			$(this).addClass('active');
			//클릭한 메뉴의 다음 형제(sub) 나타남
			$(this).next().slideDown();
			//만약 주메뉴(a)에 active클래스가 설정되어 있으면
		}else{
			//클릭한 메뉴의 active클래스 제거
			$(this).removeClass('active');
			//클릭한 메뉴의 다음 형제(sub)
			$(this).next().slideUp();
		}
	});
	
	
			/*모바일 네비게이션*/
	$('.menu_btn').click(function(e){
		e.preventDefault();
		$('.mobile_nav').stop().animate({'left':0},700);
	});
	$('.nav_close a').click(function(e){
		e.preventDefault();
		$('.mobile_nav').stop().animate({'left':'-110%'},700);
	});
	
	/*모바일 찾기 버튼*/
	var sw=0;
	$('.mobile_search').click(function(){
		if(sw==0){
			sw=1;
			$('.mobile_search_input').show();
		}else{
			sw=0;
			$('.mobile_search_input').hide();
		}
	});
	
	
	/*
	//header의 높이
	var header_h=$('header').outerHeight();
	//footer의 높이
	var footer_h=$('footer').outHeight(); //outHeight 패딩 마진 포함한 높이값
	//window의 높이에서 header의 높이와 footer의 높이를 뺌
	var content_h=$(window).height()-(header_h+footer_h);
	//content객체에 content_h변수값 적용
	$('.content').css('height',content_h);*/
	//$('content').css('height',$(window).height());
});	