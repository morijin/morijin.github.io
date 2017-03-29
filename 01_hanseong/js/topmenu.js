$(function(){
    // 메뉴

    var obj = $("#mcontent, #middle");
    var gnb = $("#flowgnb");
    
    gnb.h = function(){
        return gnb.height();

    };

    gnb.css({"z-index":"150","position":"fixed","top":"0","left":"0","width":"100%","height":"70px"});
    //obj.css({"padding-top":gnb.h()});

    function _in(event){
        var t = $(this);

        if($("#slide_pop_list>li").size() > 0){
			t.open = (gnb.h() > $("#header_group").height() ? $("#header_group").height() : $(".popup_box").height()+$("#header_group").height());
			obj.stop(true,false).animate({"padding-top":t.open},300,"easeOutCubic");

        }

        return true;
    }

    gnb.close = $("#open_pop a,#open_popup_wrap .close_btn");
    gnb.close.on("click",_in);
});

function flowerbar(param,obj,btn,elem){
	var param = $(param);
	var obj = param.find(obj);
	var btn = param.find(btn);
	var elem = elem-1;
	var n = elem;

	function _current(t,e){
		if(e == "mouseleave" || e == "focusout"){
			elem = n;
			t = btn.eq(elem);
		}

		if(elem < btn.size()){
			var twidth = (e === undefined ? btn.eq(elem).parent().outerWidth() : t.parent().outerWidth());

			xpos = (e === undefined ? Math.floor(btn.eq(elem).parent().offset().left) : Math.floor(t.parent().offset().left));
			xpos = xpos-Math.floor(param.offset().left);

	  		obj.stop(true,true).animate({left:xpos,width:twidth},700,"easeOutExpo");

  		}

  		return true;
  	}

	btn.on("mouseenter focusin",function(event){
		_current($(this),event.type);

	});

	$("#header_group").on("mouseleave focusout",function(event){
		_current($(this),event.type);

	});

	_current();
}

// 풀다운
function gnb(param,obj,btn,wrap,elem,dur,meth,mno){
	var param = $(param);
	var btn = param.find(btn);
	var obj = param.find(obj);
	var wrap = $(wrap);
	var elem = elem-1; // jsp 메뉴 코드가 1부터 시작하기 때문에
	var old_h = 70;
	var n = elem;

	var data = false;

	var viewHeight = function viewHeight(){
        
        var openHeight = [195,195,195,195,195,195,195];
    /*    
		var openHeight = new Array();

		$.each(btn,function(e){
			openHeight[e] = 310;//$(this).next().outerHeight(true)+param.outerHeight()+70;

		});
*/
		return openHeight;
	}();
	$("#summry1 .tit_gnb").prepend("<h2>소개</h2><span class='bg_gnb bg1'></span><p>시간을 담은 땅의 기록, 지질박물관을 소개합니다.</p>");
	$("#summry2 .tit_gnb").prepend("<h2>전시</h2><span class='bg_gnb bg1'></span><p>지질박물관의 다양한 전시를 즐기고 체험하세요!</p>");
	$("#summry3 .tit_gnb").prepend("<h2>이용</h2><span class='bg_gnb bg1'></span><p>지질박물관 관람안내 및 편의시설을 안내합니다.</p>");
	$("#summry4 .tit_gnb").prepend("<h2>참여</h2><span class='bg_gnb bg1'></span><p>지질박물관의 이야기에 참여하세요!</p>");
	$("#summry5 .tit_gnb").prepend("<h2>알림</h2><span class='bg_gnb bg1'></span><p>시간을 담은 땅의 기록, 지질박물관에서 알립니다.</p>");
	$("#summry6 .tit_gnb").prepend("<h2>알림</h2><span class='bg_gnb bg1'></span><p>지질박물관의 관람예약 및 예약확인을 하세요!</p>");

	function _current(s){ 
		if(!isNaN(s)){
			btn.eq(s).addClass("current");

		}
	}


	function _open(h){
		btn.not(elem).removeClass("current").eq(elem).addClass("current");
		wrap.stop(true,false).animate({"height":viewHeight[elem]+h},dur,meth);

		obj.hide();
		btn.eq(elem).next().show();

		data = true;
		return true;
     
	}


	function _close(){
		btn.removeClass("current");
		wrap.stop(true,false).animate({"height":old_h},dur,meth);

		data = false;
		return true;

	}

	// -----

	btn.on("mouseenter focusin",function(){
		elem = $(this).parent().index();
		_open(0);
   $("#header_group").addClass("new_bg");
	});

	wrap.on("mouseleave",function(){
		if(data === false){ return false; }
		_close();
		_current(n);
          $("#header_group").removeClass("new_bg");
	});

	btn.th2 = param.find(".th2>li>a");
	btn.th2.on("mouseenter focusin",function(){
		param.find(".th3").hide();

		var t = $(this);

		if(t.next().attr("class") == "th3"){
			if(t.next().css("display") != "block"){
				t.next().show();
				t.addClass("ov");

				//_open(60);
				_open();

			}
		}
	});

	btn.th2.parent().on("mouseleave focusout",function(){
		var t = $(this).find(">a");

		if(t.next().attr("class") == "th3"){
			if(t.next().css("display") == "block"){
				t.next().hide();
				btn.th2.removeClass("ov");

				_open(0);

			}
		}
	});


	_current(n);

}


// 모바일
function gnb_open(param,obj,btn,index1,index2,index3,dur,meth,mno){
	var param = $(param);
	var obj = $(obj);
	var btn = $(btn);
	var index1 = index1-1;
	var index2 = index2-1;
	var index3 = index3-1;
	var n = index1;
	var w = function(){
		return param.width();
	};
	var data = false;
	var str = location.href;

	obj.th2 = param.find(".th2");
	obj.th3 = param.find(".th3");

	obj.th2.hide();
	obj.th3.hide();


	var _open = function(){
		obj.css({'overflow':'visible'}).animate({right:w()},dur,meth);
		$("#shadow_device").stop(true,true).fadeIn(dur/2);
		$("html,body").css({"overflow":"hidden","height":$(window).height()});
		param.show().css({opacity:1,height:$(window).height()});

		obj.th2.eq(index1).show();
		
		if(index1 !== ""){
			//param.stop(true,true).delay(dur/2)
			//	.animate({scrollTop:param.find(".th1_lnk").eq(index1).offset().top},dur,meth);

			var tobj2 = param.find(".th1_lnk").eq(index1).next().next().find(">li").eq(index2);

			tobj2.children().addClass("ov");

			var tobj3 = tobj2.find(".th3");

			if(tobj3.is($(".th3"))){

				tobj3.find("a").eq(index3).addClass("ov");

				tobj3.slideDown(150);

				//param.stop(true,true).delay(dur).animate({scrollTop:tobj3.parent().offset().top},dur,meth,function(){
				//	tobj3.slideDown(150);

				//});
			}
		}

		data = true;

	};

	var _close = function(){
		obj.stop(true,true).animate({right:0},dur,meth,function(){
			if(index1 !== ""){
				param.find(".th1_lnk").not(n).removeClass("ov").eq(n).addClass("ov").next().next().show();

			}else{
				param.find(".th1_lnk").removeClass("ov").next().next().hide();

			}

			param.hide();

		});

		$("#shadow_device").stop(true,true).fadeOut(dur/2,function(){
			$("html,body").removeAttr("style");
			obj.removeAttr("style");

			data = false;

		});

		param.stop(true,true).delay(dur).animate({opacity:0,scrollTop:0},0,meth);

	};

	btn.on("touchend click",function(event){
		if(data == false){
			_open();

		}else{
			_close();

		}

		$(window).resize(function(){
			_close();

		});

		event.preventDefault();
	});

	param.find("a").on("click",function(event){
		if(param.is(":animated") && param.find(":animated").size()){ return false; }

	});

	// 터치 아웃 영역
	$("#shadow_device,#close_topmenu").on("touchend click",function(event){
		_close();

	});

	// 트리메뉴 컨트롤
	if(index1 !== ""){ 
		param.find(".th1_lnk")
			.not(index1).next().next().hide()
				.eq(index1).show().prev().prev().addClass("ov");

	}

	param.find(".th1_lnk").on("click",function(event){
		var t = $(this);

		t.btn = param.find(".th1_lnk");

		n = t.btn.index(t);

		if(t.next().next().css("display") == "none"){
			t.btn.not(t).removeClass("ov").next().next().stop(true,true).hide();
			t.btn.eq(n).addClass("ov").next().next().stop(true,true).show();
		}

		event.preventDefault();
	});

	obj.th2.find(">li>a").on("click",function(event){
		var t = $(this);

		if(t.next().attr("class").match("th3")){
			if(t.next().css("display") != "block"){
				t.addClass("ov");
				t.next().slideDown(150);

			}else{
				t.removeClass("ov");
				t.next().slideUp(150);

			}

			event.preventDefault();
		}
	});

}