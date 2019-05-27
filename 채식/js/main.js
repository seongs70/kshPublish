$(document).ready(function(e) {
	var url=document.location.href+"index.html";
	
	$('.intro').hide();
	$('.intro_btn').hide();
	$('.wrap').addClass('top');
	$('header').css('background-color','#a0d29d');
	$('nav').show();
	
	//index.html
	if(url=="http://user156.dothome.co.kr/html/index.html"){
		$('.intro').show();
		$('.intro_btn').hide();
		$('.logo').hide();
		$('.wrap').removeClass('top');
		$('header').css('background-color','transparent');
		$('nav').hide();
		//intro
	$(window).scroll(function(){
		var win_top=$(window).scrollTop();
		var win_height=$(window).height();
		if(win_top>win_height){
			
			$('.intro').hide();
			$('.wrap').addClass('top');
			$('header').css('background-color','#a0d29d');
			$('nav').fadeIn();
			$('.intro_btn').fadeIn();
			$('.logo').fadeIn();
		}
	
	});

	//팝업열기 버튼 클릭
	$('.intro_btn').click(function(){
		$('html,body').animate({'scrollTop':0}, 100, function(){
			$('.logo').hide();
			$('.intro').show();
			$('.wrap').removeClass('top');
			$('header').css('background-color','transparent');
			$('nav').hide();
			$('.intro_btn').hide();
		});		
	});

	}

	//메인 메뉴에 마우스 올리면 서브메뉴 나옴
	$('.nav > ul > li').hover(function(){
		$('.sub').stop().slideDown();
		$('.sub_bg').stop().slideDown();
	},
	//마우스 치웠을때
	function(){
		$('.sub').stop().slideUp();
		$('.sub_bg').stop().slideUp();
	});
	//메인 비주얼 슬라이드

	//.slide > ul 영역을 slide 변수에 저장
	var slide=$('.main > ul');
	//.slide > ul 영역의 자식객체인 li를 slide_li변수에 저장
	//slide_li[0]=$('.slide > ul > li:first');
	//slide_li[1]=인덱스번호가 1인 li저장
	//slide_li[2]=인덱스번호가 2인 li저장
	//slide_li[3]=인덱스번호가 3인 li저장
	//slide_li[4]=인덱스번호가 4인 li저장
	var slide_li=slide.find('> li');

	//.slide > ul > li의 개수를 구해서 len 변수에 저장
	var len=slide_li.length;
	//이미지의 인덱스번호를 저장하는 변수 선언
	var current=0;
	//첫번째 이미지를 first변수에 저장
	var first=slide_li.filter(':first');
	//마지막 이미지를 last변수에 저장
	var last=slide_li.filter(':last');
	//첫번째 이미지를 마지막 이미지 오른쪽(뒤)에 복사함
	last.after(first.clone(true));
	//마지막 이미지를 첫번째 이미지 왼쪽(앞)에 복사함
	first.before(last.clone(true));
	
	//오른쪽 버튼을 클릭하면 사진이 0,1,2,3,4 순서로 나옴
	$('.main > a.next').click(function(){
		slide.animate({'left':'-=1920'},500,function(){
			//이미지 번호를 1씩 증가
			current++;
			//만약 이미지번호가 5보다 크면
			if(current>=len){
				//current값을 0으로 초기화
				current=0;
				//slide의 위치 고정
				slide.css('left',-1920);	
			}
			btnFn(current);
		});
	});	

	//왼쪽 버튼을 클릭하면 이미지가 4,3,2,1,0순으로 나옴
	$('.main > a.prev').click(function(){
		slide.animate({'left':'+=1920'},500,function(){
			//이미지 번호를 1씩 감소시킴	
			current--;
			//이미지 번호가 0보다 작다면
			if(current<0){
			//이미지 번호를 4로 초기화
				current=len-1;
				//이미지 (.slide>ul)이 왼쪽으로 이동함
				slide.css('left',-1920*len)
			}
			btnFn(current);
		});
	});
	//동그라미 버튼을 클릭하면 동그라미 버튼의 인덱스번호와 같은 이미지가 슬라이드됨
	$('.btn ul li').click(function(){
		//클릭한 li의 인덱스번호를 num변수에 저장
		var num=$(this).index()+1;
		//이미지 번호에 num값 저장
		current=num-1;
		//slide영역이 슬라이드되는 애니메이션
		slide.animate({'left':-(num*1920)});
		btnFn(current);
	});
	
	//자동으로 슬라이드됨
	var auto=setInterval(autofn,3000);
	
	//slide영역에 마우스 올리면 자동 슬라이드 안됨
	$('.main').hover(function(){
		clearInterval(auto);
	});
	//slide영역에 마우스 치우면 다시 자동 슬라이드됨
	$('.main').mouseleave(function(){
		auto=setInterval(autofn,3000);
	});
	//자동으로 오른쪽 버튼 클릭하라는 함수 선언
	function autofn(){
		$('.main > a.next').click();	
	}
	
	
	
	
	//버튼이 활성화되면 배경색 변경되도록 실행하는 함수 선언,매개변수(num)에 활성화된
	//버튼(li)의 인덱스번호 전달
	function btnFn(num){
		//버튼(li)의 개수만큼 반복
		$('.btn ul li').each(function(){
			//만약 num값과 버튼(li)의 인덱스번호가 같다면 
			if(num==$(this).index()){
				//모든 버튼(li)의 active클래스 제거
					$('.btn ul li').removeClass('active');
					//num값과 인덱스번호가 같은 버튼(li)만 active클래스 추가
					$(this).addClass('active')		
			}
		});
	}
	
	
	
	
	
	
	/*Wallpaper(메인슬라이드2)*/
	var wall_num=0;
	var len=$('.wall > ul > li').length;
	$('.wall > ul > li').hide();
	$('.wall > ul > li:first').show();
	$('.wall > ul > li:first').find('div').addClass('active');
	$('.arrow a.prev_1').click(function(e){
		/* 화살표(a태그)안올라가게 하는거*/
		e.preventDefault();
		wall_num--;
		if(wall_num<0){
			wall_num=len-1;/*이게 실무코딩 개수 수정 안해도된다*/
		}
		$('.wall > ul > li').each(function(){
			if(wall_num==$(this).index()){
				$('.wall > ul > li').hide();
				$(this).fadeIn(500, function(){
					$(this).find('div').addClass('active');
		});	
		}else{
			$(this).find('div').removeClass('active');
		}
	});
	});
	$('.arrow a.next_1').click(function(e){
		e.preventDefault();
		wall_num++;
		if(wall_num>len-1){
			wall_num=0;
		}
		$('.wall > ul > li').each(function(){
			if(wall_num==$(this).index()){
				$('.wall > ul > li').hide();
				$(this).fadeIn(500, function(){
					$(this).find('div').addClass('active');
			
		});	
		}else{
			$(this).find('div').removeClass('active');
		}
		});
	});	

	//product배너 애니메이션
	var product=$('.product ul li');
	var wall=$('.wall ul li ul li');
	
	$(window).scroll(function(){
		//isInViEW라는 함수 호출해서 그결과값이 true라면 if {}의 명령문 실행
		if(isInView($('.product'))){
			product.addClass('active');
		}else{
			product.removeClass('active');
		}
	
	});
	//함수 선언, element:매개변수(전달받는 변수)
	function isInView(element){
		//윈도우화면의 맨 꼭대기값을 docViewTop변수에 저장
		var docViewTop=$(window).scrollTop();
		//윈도우화면의 높이+윈도우 화면의 scrollTop값을 더해서
		//docViewBottom변수에 저장
		var docViewBottom=docViewTop+$(window).height();
		//element변수에 들어있는 콘텐츠(객체)영역의
		//offset().top값을 elemTop변수에 저장
		//offset().top:윈도우의 scrollTop에서부터 콘텐츠(객체)의 top까지의 거리
		var elemTop=$(element).offset().top;
		//콘텐츠(객체)의 offset().top값에 콘텐츠(객체)의 높이값을 더해서
		//elemBottom변수에 저장
		var elemBottom=elemTop+$(element).height();
		
		return (elemBottom<=docViewBottom);
	}
	

	$('.pr_list ul li').hover(function() {
		var pr_num=$(this).index();
		$('.banner .pr_fadein ul li').each(function() {
			var pr_index=$(this).index();
			if(pr_num==pr_index) {
				$('.pr_fadein ul li').removeClass('active');
				$(this).addClass('active');
			}
		});
	
	
		
		$('.banner .pr_slide ul li').each(function() {
			var pr_index=$(this).index();
			if(pr_num==pr_index) {
				$('.pr_slide ul li').removeClass('active');
				$(this).addClass('active');
			}
		});
	});
	
	
});
	

















$(window).scroll(function(e){
	var D_top = $(document).scrollTop();
	var W_height = $(window).height();
	var D_top_bot = D_top + W_height-200;

	console.log(D_top);
	
	
		
	var M1 = $('.Main2_slide1').offset().top;
	console.log(M1);
	if(D_top_bot >= M1){
		$('.Main2_slide1').addClass('active');
		$('.Main2_slide1 h1').addClass('active');		
	}
});





