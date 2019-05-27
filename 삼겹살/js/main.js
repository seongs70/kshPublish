
$(document).ready(function(e) {
	//만약 모바일 기기에 접속했다면
	if(isMobile()){
		$('nav > ul > li > a').click(function(){
		//만약 주메뉴(a)에 active클래스가 설정되어 있지 않으면
		//attr() : 객체의 속성을 검색하는 메서드
		//!= : '같지않다'라는 비교연산자
		if($(this).attr('class') != 'active'){
			//주메뉴의 다음 형제(sub)들어감
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
			
			//클릭한 메뉴의 다음 형제(sub) 들어감
			$(this).next().slideUp();
		}
	});

	//모바일 기기가 아니라면

	}else{	
	$('nav > ul > li').hover(function(){
		$('.sub').stop().slideDown();
		$('.sub_bg').stop().slideDown();
	},
	//마우스 치웠을때
	function(){
		$('.sub').stop().slideUp();
		$('.sub_bg').stop().slideUp();
			});
		}
	//모바일 기기 인식하는 함수 선언
	function isMobile() {
    var filter = "win16|win32|win64|mac|macintel";/*모바일인지 pc인지 인식하는 명령어*/
    if( navigator.platform  ){
      if( filter.indexOf(navigator.platform.toLowerCase())<0 ){
        return true;
      }else{
        return false;
      }
    }
  }
	
	



	//메뉴 버튼 클릭하면 nav.mobile 나타남
	$('.menu_btn').click(function(){
		$('nav').show();
		$(this).hide();
	});
	//nav_close버튼 클릭하면 nav.mobile 사라짐
	$('nav .close_btn').click(function(){
			$('nav').hide();
			$('.menu_btn').show();
			$('nav > ul > li > a').removeClass('active');
			$('nav .sub').slideUp();
	});
});	