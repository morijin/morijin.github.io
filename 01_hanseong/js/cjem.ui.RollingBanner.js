
/* 롤링 배너 ver 1.46  jquery.RollingBanner.js
 * 2013.8.19
 * yahao
 */ 

(function($){
	$.fn.RollingBannerFunc = function(config){
		config = $.extend({
			slide_imgItem : null		//롤링될 아이템
			,point : null 					//점 
			,skipBtn : null 				//좌우 버튼
			,skipMobius : true			//무한 롤링 
			,pauseBtn : null				//일시정지 버튼
			,randomStart : false			//랜덤 스타트
			,pagingNum : null			// ex> 1 /4 
			,startDelay: 0					//처음 시작시 롤링 시작 지연
			,aniSpeed : 1000
			,delay : 2000
			,autoPlay : true
			,easeType : "swing"
			,motionType : "change"	//fade, sliding, change 선택 
			,startNum : 0
			,btnHideMode: true			//갯수 1과 같을때 버튼 없앨건지?
		}, config || {});

		if(this.length <= 0) return false;
		//log(this.length)
		return this.each(function()
		{	
			var $contents = $(this);
			var $slide_imgItem = config.slide_imgItem;
			
			var $point = config.point;
			var $skipBtn = config.skipBtn;
			var $pauseBtn = config.pauseBtn;
			var $pagingNum = config.pagingNum;
			var animSpeed = 0;
			var delay = config.delay;
			var skipMobius = config.skipMobius;
			var autoPlay = config.autoPlay;
			var easeType = config.easeType;
			
			var totalNum = $slide_imgItem.length;
			var nowNum = (config.startNum > totalNum)?(totalNum-1):config.startNum;
			var prevNum = nowNum;
			
			var widthNum = $contents.width();
			var nextWidthNum = widthNum;
			var leftNum = 0;
			var timer;
			var timerBool = autoPlay;
			var moveBool = false;
			var keyDownChk = false;
			var firstBool = true;
			var startDelay = config.startDelay;
			var motionType = config.motionType;
			
			var temp_type = motionType.split(",");
			motionType = temp_type[0];
			
			var userAgent = navigator.userAgent;
			if ( (navigator.appVersion.indexOf('MSIE')>-1) && !(userAgent.indexOf('MSIE 10')>0) ){
		    	if(motionType == "css3" && temp_type[1]){
					motionType = temp_type[1];
				}
		    }
			
			//setting
			if(config.btnHideMode == true){
				if(totalNum == 1){
					if($point != null)$point.hide();
					if($skipBtn != null)$skipBtn.hide();
					if($pauseBtn != null)$pauseBtn.hide();
				}
			}
			if(config.randomStart) {nowNum = Math.round(Math.random()*(totalNum-1));}
			$(document).keydown(function(){keyDownChk = true;}).keyup(function(){keyDownChk = false;});
			
			$contents.mouseover(function(){ stopFunc();
			}).mouseleave(function(){ playFunc();
			}).focusin(function(e) {stopFunc();
			}).focusout(function() { playFunc();
			});
			
			$slide_imgItem.each(function(i, item){
				$(item).find('a').each(function(n , aBtn){
					$(aBtn).data('num', i)
				}); 
			});
					
			$slide_imgItem.find('a').focusin(function(e) {
				if(keyDownChk){
					var indexNum = $(e.target).data('num');
					prevNum = nowNum;
					nowNum = indexNum;
					contensMove("first");
				}
			})
				
			
			if($pauseBtn != null){
				$pauseBtn.on('click', function(){
					if(timerBool){
						timerBool = false;
						$pauseBtn.addClass('play').removeClass('stop').html("자동넘김");
					}else{
						timerBool = true;
						$pauseBtn.removeClass('play').addClass('stop').html("멈춤");
					}
					return false;
				});
			}
			
			if($point != null){
				$point.on('click', function()
				{
					if(moveBool) return false;
					var indexNum = $point.index(this);	
					if(indexNum == nowNum || indexNum >= totalNum) return false;
					moveBool = true;
					choiceFunc(indexNum);
					return false;
				});
			}
			
			if($skipBtn != null && totalNum > 1){
				$skipBtn.on('click', function()
				{
					var indexNum = $skipBtn.index(this);
					if(moveBool) return false; 
					if($skipBtn.eq(indexNum).hasClass('off')) return false;
					moveBool = true;
					if(indexNum == 0){
						prevFunc();
					}else{
						nextFunc();
					}
					return false; 
				});
			}

			//---------------------------------------------------------------------------
			function prevFunc(){
				prevNum = nowNum;
				nowNum --;
				if (nowNum < 0){
					nowNum=totalNum-1; 
				}
				contensMove("prev");
			}
			
			function nextFunc(){
				prevNum = nowNum;
				nowNum ++;
				if (nowNum == totalNum){
					nowNum=0; 
				}
				contensMove("next");
			}
			
			function choiceFunc(indexNum){
				if(indexNum != nowNum) 
				{
					//if($slide_imgItem.is(':animated')) return false;
					if(nowNum < indexNum){
						prevNum = nowNum;
						nowNum = indexNum;
						contensMove("next");
					}else{
						prevNum = nowNum;
						nowNum = indexNum;
						contensMove("prev");
					}
				}
			}
			
			function pointFunc(){$point.eq(nowNum).addClass('selected').siblings().removeClass('selected');}
			function pagingNumFunc(){$pagingNum.html("<i class='currentNo'>"+(nowNum+1)+"</i>"+" / "+"<i class='totalNo'>"+totalNum+"</i>")}
			
			//-----------------------   move   ---------------------------------------------------
			function contensMove(direction)
			{
				if($point != null){ pointFunc();}
				if($pagingNum != null){pagingNumFunc();}
				
				if(!skipMobius && $skipBtn!=null){ //무한 롱링이 안되고 버튼이 없지 않으면
					if (nowNum == 0){
						$skipBtn.eq(0).addClass('off');
						$skipBtn.eq(1).removeClass('off');
					}else if (nowNum == totalNum-1){
						$skipBtn.eq(0).removeClass('off');
						$skipBtn.eq(1).addClass('off');
					}else{
						$skipBtn.eq(0).removeClass('off');
						$skipBtn.eq(1).removeClass('off');
					}
				}
				
				switch(direction) {
					case 'first' :
						firstBool = false;
					break;
					case 'next':
						animSpeed = config.aniSpeed;
						nextWidthNum = widthNum;
					break;
					case 'prev':
						animSpeed = config.aniSpeed;
						nextWidthNum = -widthNum;
					break;
				}
				moveBool = true;
				$slide_imgItem.each(function(i, item){
					
					var boxMc = $(item);
					
					if(motionType == "sliding"){
						boxMc.css("position", "absolute");
						
						if(nowNum == i){ 
							boxMc.animate({left:nextWidthNum}, 0).animate({left:0}, animSpeed , easeType ,function(){moveBool = false;}).addClass("jqView").css("z-index",totalNum+1);
							boxMc.show();
						}else{
							if(prevNum == i){
								boxMc.show();
							}else{
								boxMc.hide();
							}
							boxMc.animate({left:-nextWidthNum}, animSpeed , easeType).removeClass("jqView").css("z-index",1);
						}
						
					}else if(motionType == "fade"){
						if(nowNum == i){ 
							boxMc.css("z-index",totalNum+1);
							//boxMc.find('img').animate({opacity:0}, 0).delay(30).animate({opacity:1}, animSpeed ,function(){moveBool = false;});
							//boxMc.show();
							boxMc.stop().animate({opacity:0}, 0).delay(50).animate({opacity:1}, animSpeed ,easeType ,function(){moveBool = false;}).addClass("jqView");
						}else{
							boxMc.css("z-index",1);
							//boxMc.hide();
							boxMc.delay(0).animate({opacity:0}, 0).removeClass("jqView"); //hide()
						}

					}else if(motionType == "change"){
						if(nowNum == i){ 
							boxMc.show(0, function(){moveBool = false;}).addClass("jqView").css("z-index",totalNum+1);;
						}else{
							boxMc.hide(0).removeClass("jqView").css("z-index",i);
						}
					}else{ // if(config.motionType == "change")
						boxMc.addClass("jqView_"+motionType);
						
						if(nowNum == i){ 
							moveBool = false;
							boxMc.addClass("jqView").addClass("jqView_"+motionType+'_on').css("z-index",totalNum+1); 
						}else{
							boxMc.removeClass("jqView").removeClass("jqView_"+motionType+'_on').css("z-index",1); 
						}
					}
				});
			}
			
			function playFunc(){
				//console.log(timerBool)
				if(totalNum > 1 && timerBool){
					clearInterval(timer);
					var dtime =  delay;
					if(firstBool){dtime = delay + startDelay}
					timer = setInterval(nextFunc, dtime );
				}
			}
			function stopFunc(){ clearInterval(timer); } 
			
			playFunc();
			contensMove("first");
		});
	}
})(jQuery);









