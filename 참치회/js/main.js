$(document).ready(function(e) {
	/*모바일 네비게이션*/
	$('.menu_btn').click(function(e){
		e.preventDefault();
		$('.mobile_nav').stop().animate({'left':0},700);
	});
	$('.nav_close a').click(function(e){
		e.preventDefault();
		$('.mobile_nav').stop().animate({'left':'-110%'},700);
	});
	
$('.mobile_nav nav >ul>li>a').click(function(){
		//만약 주메뉴(a)에 active클래스가 설정되어 있지 않으면
		//attr() : 객체의 속성을 검색하는 메서드
		//!= : '같지않다'라는 비교연산자
		if($(this).attr('class') != 'active'){
			//주메뉴의 다음 형제(sub)들어감
			//next : 다음형제객체
			//prev : 이전형제객체
			//siblings('li') : 형제객체찾기
			$('.mobile_nav nav>ul>li>a').next().stop().slideUp();
			//주메뉴의 active클래스 모두 제거
			$('.mobile_nav >ul>li>a').removeClass('active');
			//클릭한 메뉴에만 active클래스 추가
			$(this).addClass('active');
			//클릭한 메뉴의 다음 형제(sub) 나타남
			$(this).next().stop().slideDown();
			//만약 주메뉴(a)에 active클래스가 설정되어 있으면
		}else{
			//클릭한 메뉴의 active클래스 제거
			$(this).removeClass('active');
			//클릭한 메뉴의 다음 형제(sub)
			$(this).next().stop().slideUp();
		}
	});
	
	
		var imgNum=0;
	$('.m_slideshow ul li').hide();
	$('.m_slideshow ul li:first-child').show();
	//var Pnum=1;
	$('.m_slidenav__item--next').click(function(e) {
        imgNum++;
		if(imgNum>=3){
		imgNum=0;
		}
		//popupImg.empty();
		imgslide();
    });
	$('.m_slidenav__item--prev').click(function(e) {
        imgNum--;
		if(imgNum<0){
		imgNum=2;	
		}
		imgslide();
    });
	
	function imgslide(){
	$('.m_slideshow ul li').each(function() {
        var P2num=$(this).index()
		if(imgNum==P2num){
			$('.m_slideshow ul li').hide();
			$(this).stop().fadeIn(800);
			//console.log(Pnum);
			}
    });
	}
	$(window).scroll(function(e){
	var S_height = $('.slideshow').height()-300;	
	var M1 = $('.header').offset().top;
	console.log(M1);
	if(M1 >= S_height){
		$('.header').stop().addClass('active');
		$('.btn1').stop().addClass('active');
		$('.btn2').stop().addClass('active');	
		$('.l1').stop().addClass('active');
		$('.l2').stop().addClass('active');
	}
	else{
		$('.header').stop().removeClass('active');
		$('.btn1').stop().removeClass('active');
		$('.btn2').stop().removeClass('active');
		$('.l1').stop().removeClass('active');
		$('.l2').stop().removeClass('active');
		}
	});
	var box=$('.content ul');
	//.content ul li의 마지막 객체를 .content ul영역의 맨 앞으로 추가하기
	$('.content ul li:last').prependTo('.content ul');
	//다음 버튼을 클릭하면 이미지가 1개식 나옴
	$('.arrow_next').click(function(){
		box.stop().animate({'margin-left':'-=44.4vw'},500,function(){
			//맨 처음 li를 .content ul의 마지막에 추가하기
		$('.content ul li:first').appendTo('.content ul');
		//.content ul의 위치값 고정
			box.css('margin-left','-7.7vw');
		});
	});
	//이전 버튼을 클릭하면 이미지가 1개씩 나옴
	$('.arrow_prev').click(function(){
		box.stop().animate({'margin-left':'+=44.4vw'},500,function(){
		//.content ul의 마지막 li객체가 .content ul영역의 맨앞에 추가됨
		$('.content ul li:last').prependTo('.content ul');
		//.content ul의 위치값 고정
			box.css('margin-left','-7.7vw');
		});
	});
		
	$('.tsw1').show();
	$('.tsw2').hide();
	//ul li에 클릭 이벤트 설정
	$('.line4_text ul li').click(function(){
	//클릭한 li의 인덱스 번호를 num변수에 저장
	//this : 클릭된 객체 li 가리킴
	var num=$(this).index();
	//.content안의 div객체의 개수만큼 반복
	$('.tuna_story_allwrap > div').each(function(){
		//.content안의 div 객체의 인덱스 번호를 bunho변수에 저장
		var bunho=$(this).index();
		//만약 bunho와 num값이 같다면
		if(bunho==num){
			//모든 div 숨김
				$('.tuna_story_allwrap > div').hide();
			//bunho에 해당하는 div 나타남
				$(this).fadeIn(-1);	
			}
		});
	});
	
	var winWidth=$(window).width();
	if(winWidth>1020){
	//로고 사라지기	
	$(window).scroll(function(){
		//내리면 로고 없애는거
		//header높이값-nav높이값
		 var nav_top=$('header').height()-$('nav ul li').height();
		 //만약 nav영역의 top이 브라우저의 scrollTop보다 작아지면
		//더 이상 스크롤 되지않게 고정시킴
		 if($(window).scrollTop()>=nav_top){
			 //css를 animate로 하면 자연스럽게 올라감
		 	$('header').stop().css('top',-nav_top);
		 }else{
			 $('header').stop().css('top',0);
		 }
	});
	var imgNum=0;
	$('.slideshow ul li').hide();
	$('.slideshow ul li:first-child').show();
	//var Pnum=1;
	$('.slidenav__item--next').click(function(e) {
        imgNum++;
		if(imgNum>=3){
		imgNum=0;
		}
		//popupImg.empty();
		imgslide();
    });
	$('.slidenav__item--prev').click(function(e) {
        imgNum--;
		if(imgNum<0){
		imgNum=2;	
		}
		imgslide();
    });
	
	function imgslide(){
	$('.slideshow ul li').each(function() {
        var P2num=$(this).index()
		if(imgNum==P2num){
			$('.slideshow ul li').hide();
			$(this).stop().fadeIn(800);
			//console.log(Pnum);
			}
    });
	}
	
	//flip
	$('.hover').hover(function(){
		$(this).addClass('flip');
	},
	function(){
		$(this).removeClass('flip');	
	});

	var box=$('.content ul');
	//.content ul li의 마지막 객체를 .content ul영역의 맨 앞으로 추가하기
	$('.content ul li:last').prependTo('.content ul');
	//다음 버튼을 클릭하면 이미지가 1개식 나옴
	$('.arrow_next').click(function(){
		box.stop().animate({'margin-left':'-=240'},500,function(){
			//맨 처음 li를 .content ul의 마지막에 추가하기
		$('.content ul li:first').appendTo('.content ul');
		//.content ul의 위치값 고정
			box.css('margin-left',-240);
		});
	});
	//이전 버튼을 클릭하면 이미지가 1개씩 나옴
	$('.arrow_prev').click(function(){
		box.stop().animate({'margin-left':'+=240'},500,function(){
		//.content ul의 마지막 li객체가 .content ul영역의 맨앞에 추가됨
		$('.content ul li:last').prependTo('.content ul');
		//.content ul의 위치값 고정
			box.css('margin-left',-240);
		});
	});

	$('.tsw1').show();
	$('.tsw2').hide();
	//ul li에 클릭 이벤트 설정
	$('.line4_text ul li').click(function(){
	//클릭한 li의 인덱스 번호를 num변수에 저장
	//this : 클릭된 객체 li 가리킴
	var num=$(this).index();
	//.content안의 div객체의 개수만큼 반복
	$('.tuna_story_allwrap > div').each(function(){
		//.content안의 div 객체의 인덱스 번호를 bunho변수에 저장
		var bunho=$(this).index();
		//만약 bunho와 num값이 같다면
		if(bunho==num){
			//모든 div 숨김
				$('.tuna_story_allwrap > div').hide();
			//bunho에 해당하는 div 나타남
				$(this).fadeIn();	
			}
		});
	});
	$('.top').click(function(){
		$('html,body').stop(500).animate({'scrollTop':0});
	});
	
		$(window).resize(function(){location.reload();});
	}
});