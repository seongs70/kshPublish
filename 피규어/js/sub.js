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
	
	
	
	var winWidth=$(window).width();
	
	if(winWidth>1200){
	var navNum=0;
	//메인 비주얼의 아이콘 높이를 넓이와 같게 조절
	var v_width=$('.v_li_icon').width();
	$('.v_li_icon').css('height',v_width);
	

	
	//화면 이동 중인지 체크하는 변수 선언
	var scrollEvent=false;
	
	//메인 메뉴에 마우스 올리면
    $('nav > ul > li').hover(function(){
		navNum=$(this).index();
		//서브메뉴 나타남
		$('.sub').stop().slideDown();
		//서브배경 나타남
		$('.sub_bg').stop().slideDown(function(){
			//메뉴 아이콘 영역 보임
			$('.nav_icon').fadeIn(200);
			//말풍선 영역 보임
			$('.menu_tooltip').fadeIn(200);
		});		
		
		//메뉴 아이콘 모두 숨김
		$('.nav_icon ul li').hide();
		//첫번째 메뉴 아이콘 보임
		$('.nav_icon ul li:first').show();
			navNum=$(this).index();
		//메뉴 아이콘 개수만큼 반복
		$('.nav_icon ul li').each(function(){
			if(navNum==$(this).index()){
				$('.nav_icon ul li').hide();
				$(this).stop().fadeIn(200);
			}
		});
	});
	
	//메인메뉴에서 마우스 치우면
	$('.header').mouseleave(function(){
		$('.nav_icon').hide();
		$('.menu_tooltip').hide();
		$('.sub').stop().slideUp();
		$('.sub_bg').stop().slideUp();
	});	
		
	//말풍선
	$('.menu_tooltip').hover(function(){
		$(this).animate({'top':190},200).animate({'top':200},500);
	});
	
	











	
	

	//화면의 크기를 키우거나 줄이거나 새로고침 안해도 되는 제이쿼리 !!
	$(window).resize(function(){location.reload();});
	}
	
});