$(document).ready(function(e) {
	var winWidth=$(window).width();
	if(winWidth<1020){
	$('.intro_sub_wrap').find('a').click(function(e){
		e.preventDefault()
	});
	$('.m_title_main_wrap').find('a').click(function(e){
		e.preventDefault()
	});
	$('.m_title_main_div1').show();
	$('.m_title_main_div2').hide();
	//ul li에 클릭 이벤트 설정
	$('.intro_sub_wrap ul li').click(function(){
	//클릭한 li의 인덱스 번호를 num변수에 저장
	//this : 클릭된 객체 li 가리킴
	
	var num=$(this).index();
	//.content안의 div객체의 개수만큼 반복
	$('.m_title_main_wrap > div').each(function(){
		//.content안의 div 객체의 인덱스 번호를 bunho변수에 저장
		var bunho=$(this).index();
		//만약 bunho와 num값이 같다면
		if(bunho==num){
			//모든 div 숨김
				$('.m_title_main_wrap > div').hide();
			//bunho에 해당하는 div 나타남
				$(this).fadeIn();	
			}
		});
	});
	
	
	$(window).scroll(function(e){
	var W_height = $(window).height();	
	var M1 = $('.title_sub').offset().top;
	console.log(M1);
	if(M1 = W_height){
		$('.header').addClass('active');
		$('.btn1').addClass('active');
		$('.btn2').addClass('active');	
		$('.l1').addClass('active');
		$('.l2').addClass('active');
	}
	else{
		$('.header').removeClass('active');
		$('.btn1').removeClass('active');
		$('.btn2').removeClass('active');
		$('.l1').removeClass('active');
		$('.l2').removeClass('active');
		}
		
	});
	}

	var winWidth=$(window).width();
	if(winWidth>1020){
	$('.intro_sub_wrap').find('a').click(function(e){
		e.preventDefault()
	});
	$('.title_main_wrap').find('a').click(function(e){
		e.preventDefault()
	});


	$('.title_main_div1').show();
	$('.title_main_div2').hide();
	//ul li에 클릭 이벤트 설정
	$('.intro_sub_wrap ul li').click(function(){
	//클릭한 li의 인덱스 번호를 num변수에 저장
	//this : 클릭된 객체 li 가리킴
	var num=$(this).index();
	//.content안의 div객체의 개수만큼 반복
	$('.title_main_wrap > div').each(function(){
		//.content안의 div 객체의 인덱스 번호를 bunho변수에 저장
		var bunho=$(this).index();
		//만약 bunho와 num값이 같다면
		if(bunho==num){
			//모든 div 숨김
				$('.title_main_wrap > div').hide();
			//bunho에 해당하는 div 나타남
				$(this).fadeIn();	
			}
		});
	});
	$('.top').click(function(){
		$('html,body').stop(500).animate({'scrollTop':0});
	});
	var imgNum=0;
	var popup=$('.popup');
	var imgLen=$('.title_main_div1 ul li').length;
	var popupImg=popup.find('.popupImage');
	$('.popup').find('a').click(function(e){
		e.preventDefault()
	});
    $('.title_main_div1 ul li').click(function(){
		imgNum=$(this).index()+1;
		popupImg.empty();
		popup.fadeIn(300);
		popupImg.append('<img src="img/sub/full_tuna'+imgNum+'.jpg">');
		
	});
	$('.popup a.close').click(function(){
		popup.hide();
	});
	$('.popup a.right').click(function(){
		imgNum++;
		
		if(imgNum>imgLen){
			imgNum=1;
		}

		popupImg.empty();
		popupImg.append('<img src="img/sub/full_tuna'+imgNum+'.jpg">');
	});
	$('.popup a.left').click(function(){
		imgNum--;
		if(imgNum<=0){
			imgNum=imgLen;
		}
		popupImg.empty();
		popupImg.append('<img src="img/sub/full_tuna'+imgNum+'.jpg">');
	});

	var imgNum2=0;
	var spopup=$('.story_popup');
	var simgLen=$('.title_main_div2 ul li').length;
	var spopupImg=spopup.find('.story_popupImage');
	$('.story_popup').find('a').click(function(e){
		e.preventDefault()
	});
    $('.title_main_div2 ul li').click(function(){
		imgNum2=$(this).index()+1;
		spopupImg.empty();
		spopup.fadeIn(300);
		spopupImg.append('<img src="img/sub/full_story'+imgNum2+'.jpg">');
		
	});
	$('.story_popup a.close').click(function(){
		spopup.hide();
	});
	$('.story_popup a.right').click(function(){
		imgNum2++;
		if(imgNum2>imgLen){
			imgNum2=1;
		}
		spopupImg.empty();
		spopupImg.append('<img src="img/sub/full_story'+imgNum2+'.jpg">');
	});
	$('.story_popup a.left').click(function(){
		imgNum2--;
		if(imgNum2<=0){
			imgNum2=simgLen;
		}
		spopupImg.empty();
		spopupImg.append('<img src="img/sub/full_story'+imgNum2+'.jpg">');
	});
	}
});