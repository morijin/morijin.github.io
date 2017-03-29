function gnb(param,obj,btn,wrap,elem,scale,dur,meth){
	var param = $(param);
	var obj = param.find(obj); 
	var btn = param.find(btn);
	var wrap = param.find(wrap);
	var elem = elem-1;
	var n = elem;
	var new_h = 243;
	var old_h = 70;
	var moresize;
	var data = false;

	
	$.each(obj,function(){if(new_h < $(this).parent().height()) new_h = $(this).parent().height();});
	//moresize = Number(obj.css("padding-top").substr(0,2))*3;
	moresize = moresize+btn.height()-40;
	
	//alert(moresize);

	param.find("#summry1").prepend("<div class='tit_gnb'><h2>소개</h2></div>");
	param.find("#summry2").prepend("<div class='tit_gnb'><h2>전시</h2><span class='bg_gnb bg1'></span><p>지질박물관의 다양한 전시를 즐기고 체험하세요!</p></div>");
	param.find("#summry3").prepend("<div class='tit_gnb'><h2>이용</h2><span class='bg_gnb bg1'></span><p>지질박물관 관람안내 및 편의시설을 안내합니다.</p></div>");
	param.find("#summry4").prepend("<div class='tit_gnb'><h2>참여</h2><span class='bg_gnb bg1'></span><p>지질박물관의 이야기에 참여하세요!</p></div>");
	param.find("#summry5").prepend("<div class='tit_gnb'><h2>알림</h2><span class='bg_gnb bg1'></span><p>시간을 담은 땅의 기록, 지질박물관에서 알립니다.</p></div>");
	param.find("#summry6").prepend("<div class='tit_gnb'><h2>알림</h2><span class='bg_gnb bg1'></span><p>지질박물관의 관람예약 및 예약확인을 하세요!</p></div>");

	function _current(s){
		btn.not(s).removeClass("current").eq(s).addClass("current");
		btn.not(s).next().removeClass("ov");
		btn.eq(s).next().addClass("ov");
		btn.not(s).next().find('.tit_gnb').removeClass("show");
		btn.eq(s).next().find('.tit_gnb').addClass("show");

		$("#header_group").addClass("bg_ov");

	}


	function _open(){
		obj.height(new_h);
		wrap.stop(true,false).animate({"height":new_h+70},dur,meth);
		if(chaked_OS() == true) $("#touchArea").height($(window).height()).width($(window).width()).show();
		//$("#header_group").addClass("bg_ov");
	}
	
	function _close(){
		wrap.stop(true,false).animate({"height":old_h},dur,meth);
		$("#touchArea").hide();
		btn.removeClass("current");
		obj.removeClass("ov");
		//$("#header_group").removeClass("bg_ov");
	}

	btn.bind("mouseenter focusin",function(){
		_current($(this).parent().index());
		_open();
		wrap.removeClass();
		
	});
	wrap.bind("mouseleave",function(){
		_close();
		wrap.removeClass();
	});
	obj.bind("mouseenter",function(){
		btn.removeClass("current");
		obj.removeClass("ov");
		wrap.removeClass();
		$(this).prev().addClass("current");
		$(this).addClass("ov");
	});

	obj.last().find(">li>a").last().bind("focusout",function(){
		_close();
		_current(n);
		wrap.removeClass();
	});

}
