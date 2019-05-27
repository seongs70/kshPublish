// JavaScript Document
$(document).ready(function(e) {
	var winWidth=$(window).width();
	if(winWidth<1200){
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
	
	
	
	
	}
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
	

	$(function() {
   function swing() {
        $('.arrow').animate({'bottom':'1%'},600).animate({'bottom':'2%'},600, swing);
    }
    swing();
		

	});
	
	
	
	
	
	
	
	
	//poster
	//$('.performing .perform ul li .over').hide();
	/*
	$('.section').hover(function(){		
		$(this).find('*').find('*').addClass('active');
		$(this).find('*').find('*').addClass('active');
	},
	function(){
		$(this).find('*').find('*').removeClass('active');
		$(this).find('*').find('*').removeClass('active');
	});
	*/
	//윈도우 마다 높이 맞추는 제이쿼리
	

	//마우스 휠과 메뉴 
	
	//section의 영역 5군데를 div변수에 저장
	var div=$('.box');
	var section_div=$('section > .main');
	//브라우저의 높이값을 winHeight변수에 저장
	var winHeight=$(window).height();
	//section의 영역 5군데의 높이값을 브라우저의 높이값으로 다시 설정
	section_div.css('height',winHeight);

	//header의 높이값을 변수에 저장
	var header_h=$('.header').height();
	//a1영역의 높이값은 윈도우 높이-header의 높이로 조정
	var cha_h=winHeight-header_h;
	$('.visual').css('height',cha_h);

//circle_menu를 클릭하면 해당 영역으로 스크롤 됨
	$('.circle_menu ul li a').click(function(e){
		e.preventDefault();
		var attrib=$(this).attr('href');
		$('html,body').stop().animate({'scrollTop':$(attrib).offset().top},700,function(){
				scrollEvent=false;
				section_div.find('li').removeClass('active');
				section_div.eq(num).find('li').addClass('active');
		});
		//마우스 휠 굴리고 올리고 할때 잘나오게
		num=$(this).parent().index();
	});
	
	//마우스 휠의 방향을 설정하는 변수 선언
	var dir="up";
	//div 영역을 가리키는 번호
	var num=-1;
	
	//html문서에 마우스 휠 이벤트 설정
	$(document).on('DOMMouseScroll mousewheel',function(e){
		e.preventDefault();
		//마우스 휠을 아래로 굴리면
		if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0){
			dir="down";	
		//마우스 휠을 위로 굴리면	
		}else{
			dir="up";
		}
		//num=-1;
		//div영역의 개수만큼 반복
		div.each(function(){
			//div영역에 브라우저의 영역으로 들어오면
			if(num<0 && ($(this).offset().top>=$(window).scrollTop())){
				//현재 보이는 div의 인덱스 번호를 num변수에 저장
				num=$(this).index();
			}
		});
		//마우스 방향이 up이고 div의 인덱스 번호가 0보다 크다면
		if(dir=="up" && scrollEvent==false && num>0){
			//div의 인덱스 번호를 1씩 감소	
			num--;
			scrollEvent=true;
			//html,body문서가 위 또는 아래로 이동하는 애니메이션
			$('html,body').stop().animate({'scrollTop':div.eq(num).offset().top}, 700,function(){
				scrollEvent=false;
				//엑티브가 제거됬다 추가됬다 마우스를 굴릴때마다 추가된다
				section_div.find('li').removeClass('active');
				section_div.eq(num).find('li').addClass('active');
		});
		}
		
		//마우스 방향이 down이고 div의 인덱스 번호가 5보다 작으면)
		if(dir=="down" &&  scrollEvent==false && num<div.length){
			//div의 인덱스 번호를 1씩 증가
			num++;
			scrollEvent=true;
			//html,body문서가 위 또는 아래로 이동하는 애니메이션
			$('html,body').stop().animate({'scrollTop':div.eq(num).offset().top}, 700,function(){
				scrollEvent=false;	
				section_div.find('li').removeClass('active');
				section_div.eq(num).find('li').addClass('active');
				
		});
		}
					
		
	});
	
	//div영역이 브라우저의 영역으로 들어오면 화면 오른쪽의 circle_menu에 active 설정
	$(window).scroll(function(){
		//윈도우 화면 꼭대기 좌표값을 pos변수에 저장
		var pos=$(this).scrollTop();
		//div개수만큼 반복
		div.each(function(){
			//div영역의 top값 구해서 top변수에 저장
			var top=$(this).offset().top;
			//div영역의 bottom값 구해서 bottom 변수에 저장
			var bottom=top+$(this).height();
			//window영역의 scrollTop값보다 아래쪽에 div영역이 위치하면 div영역의 인덱스 번호에 해당하는 circle_menu에 active 추가
			if(pos>=top && pos<bottom){
				//모든 circle메뉴에서 active클래스 제거
				$('.circle_menu ul li').removeClass('active');
				//.circle_menu영역에서 현재 브라우저 영역에 들어온 div영역의 id속성을 인식해서 그 아이디에 해당하는 a태그를 찾음->해당 a태그의 부모객체('li')에 active클래스 추가
				$('.circle_menu').find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active');	
			}			
		});
		
		
	});
	//화면의 크기를 키우거나 줄이거나 새로고침 안해도 되는 제이쿼리 !!
		$(window).resize(function(){location.reload();});
	}

});