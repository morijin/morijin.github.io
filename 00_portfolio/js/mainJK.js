
		$(function(){
			// scroll 움직이기
			function swing() {
				var scroll = $('.btn_scroll')
				scroll.animate({bottom:'-80px'},'1000').animate({bottom:'20px'},'1000', swing);
			}
			swing();
			$('btn_scroll').click(function(){

			});
			//PDF 열기!
			PDFObject.embed("file/hdmbc.pdf", "#file_pdf");


			// 모달팝업
			$('a[href="#btn_ban"]').click(function(event){
				event.preventDefault();
				$("#btn_ban").modal({
			    	fadeDuration: 250,
			 		closeClass: 'icon-remove',
			 		closeText: '&#x2612;'
				});
				$.fn.fullpage.setAllowScrolling(false);
				$.fn.fullpage.setKeyboardScrolling(false);
				//부모 스크롤 닫아주기 열어주는 명령은 fullpage js 안에 있다
			});
			$('a[href="#btn_ban2"]').click(function(event){
				event.preventDefault();
				$("#btn_ban2").modal({
			    	fadeDuration: 250,
			 		closeClass: 'icon-remove',
			 		closeText: '&#x2612;'
				});
				$.fn.fullpage.setAllowScrolling(false);
				$.fn.fullpage.setKeyboardScrolling(false);
			});
			$('a[href="#btn_ban3"]').click(function(event){
				event.preventDefault();
				$("#btn_ban3").modal({
			    	fadeDuration: 250,
			 		closeClass: 'icon-remove',
			 		closeText: '&#x2612;'
				});
				$.fn.fullpage.setAllowScrolling(false);
				$.fn.fullpage.setKeyboardScrolling(false);
			});
			$('a[href="#btn_ban4"]').click(function(event){
				event.preventDefault();
				$("#btn_ban4").modal({
			    	fadeDuration: 250,
			 		closeClass: 'icon-remove',
			 		closeText: '&#x2612;'
				});
				$.fn.fullpage.setAllowScrolling(false);
				$.fn.fullpage.setKeyboardScrolling(false);
			});
			$('a[href="#btn_ban5"]').click(function(event){
				event.preventDefault();
				$("#btn_ban5").modal({
			    	fadeDuration: 250,
			 		closeClass: 'icon-remove',
			 		closeText: '&#x2612;'
				});
				$.fn.fullpage.setAllowScrolling(false);
				$.fn.fullpage.setKeyboardScrolling(false);
			});
			$('a[href="#btn_ban6"]').click(function(event){
				event.preventDefault();
				$("#btn_ban6").modal({
			    	fadeDuration: 250,
			 		closeClass: 'icon-remove',
			 		closeText: '&#x2612;'
				});
				$.fn.fullpage.setAllowScrolling(false);
				$.fn.fullpage.setKeyboardScrolling(false);
			});
			$('a[href="#btn_ban7"]').click(function(event){
				event.preventDefault();
				$("#btn_ban7").modal({
			    	fadeDuration: 250,
			 		closeClass: 'icon-remove',
			 		closeText: '&#x2612;'
				});
				$.fn.fullpage.setAllowScrolling(false);
				$.fn.fullpage.setKeyboardScrolling(false);
			});
			$('a[href="#btn_ban8"]').click(function(event){
				event.preventDefault();
				$("#btn_ban8").modal({
			    	fadeDuration: 250,
			 		closeClass: 'icon-remove',
			 		closeText: '&#x2612;'
				});
				$.fn.fullpage.setAllowScrolling(false);
				$.fn.fullpage.setKeyboardScrolling(false);
			});
			$('a[href="#btn_ban9"]').click(function(event){
				event.preventDefault();
				$("#btn_ban9").modal({
			    	fadeDuration: 250,
			 		closeClass: 'icon-remove',
			 		closeText: '&#x2612;'
				});
				$.fn.fullpage.setAllowScrolling(false);
				$.fn.fullpage.setKeyboardScrolling(false);
			});
			//풀페이지
			$('#wrap').fullpage({
			  // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
			  anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage', '5rdPage', 'lastPage'],
			});
			//NAV 버튼
			$('.btn1').click(function(){
				$('.lst_design').slideToggle('slow');
				$('.lst_coding').slideUp('slow');
			});
			$('.btn2').click(function(){
				$('.lst_coding').slideToggle('slow');
				$('.lst_design').slideUp('slow');
			});
			$('.show').click(function(){
				$('nav').toggleClass('open');
				$('.content').toggleClass('left');
				$('.show').toggleClass('open');
				$('#section3 .fp-tableCell').toggleClass('left');
				$('#section3 .fp-prev').toggleClass('left');
				$('#section4 .fp-tableCell').toggleClass('left');
				$('#section4 .fp-prev').toggleClass('left');
			});
			$('.show2').click(function(){
				$('nav').toggleClass('open');
				$('.content').toggleClass('left');
				$('.show').toggleClass('open');
				$('#section3 .fp-tableCell').toggleClass('left');
				$('#section3 .fp-prev').toggleClass('left');
				$('#section4 .fp-tableCell').toggleClass('left');
				$('#section4 .fp-prev').toggleClass('left');
			});
			$('a[href="#firstPage"]').click(function(){
				$('nav').toggleClass('open');
				$('.content').removeClass('left');
				$('.show').removeClass('open');
				$('.show2').removeClass('open');
				$('#section3 .fp-tableCell').removeClass('left');
				$('#section3 .fp-prev').removeClass('left');
				$('#section4 .fp-tableCell').removeClass('left');
				$('#section4 .fp-prev').removeClass('left');
			});
			$('.lst_nav a').click(function(){
				$('nav').addClass('open');
				$('.content').addClass('left');
				$('.show').addClass('open');
				$('#section3 .fp-tableCell').addClass('left');
				$('#section3 .fp-prev').addClass('left');
				$('#section4 .fp-tableCell').addClass('left');
				$('#section4 .fp-prev').addClass('left');
			});

			
			// 메인 페이지 타이핑 js
		 	 $('.title_bx').t('<span class="c1">&#x3C;</span><span class="c2">!<del>앷ㅅ</del>DOCTYPE HTML</span><span class="c1">&#x3E;</span><br><span class="c1">&#x3C;</span><span class="c2">html</span> <span class="c3">lang</span><span class="c1">=</span><span class="c4">&#x201D;ko&#x201D;</span><span class="c1">&#x3E;</span><br><span class="c1">&#x3C;</span><span class="c2">head</span><span class="c1">&#x3E;</span><br><span class="pd"></span><span class="c1">&#x3C;</span><span class="c2">meta</span> <span class="c3">charset</span><span class="c1">=</span><span class="c4">&#x22;utf-8&#x22;</span><span class="c1">&#x3E;</span><br><span class="pd"></span><span class="c1">&#x3C;</span><span class="c2">title</span><span class="c1">&#x3E;</span><a href="index.html"><span class="txt txt2">Portfolio By Jinkyoung</span></a><span class="c1"><del>title</del>&#x3C;/</span><span class="c2">title</span><span class="c1">&#x3E;</span><br><span class="c1">&#x3C;/</span><span class="c2">head</span><span class="c1">&#x3E;</span><br><span class="c1">&#x3C;</span><span class="c2">body</span><span class="c1">&#x3E;</span><br><span class="pd"></span><span class="c1">&#x3C;</span><span class="c2">h1</span><span class="c1">&#x3E;</span><span class="txt">WEB Publisher Jinkyoung Jo</span><span class="c1"><del>h1</del>&#x3C;/</span><span class="c2">h1</span><span class="c1">&#x3E;</span><br><span class="pd2"></span><span class="c1">&#x3C;</span><span class="c2">h2</span><span class="c1">&#x3E;</span><a href="#secondPage" data-menuanchor="secondPage"><span class="txt">About</span></a><span class="c1">&#x3C;/</span><span class="c2">h2</span><span class="c1">&#x3E;</span><br><span class="pd2"></span><span class="c1">&#x3C;</span><span class="c2">h2</span><span class="c1">&#x3E;</span><a href="#3rdPage"><span class="txt">Skill</span></a><span class="c1">&#x3C;/</span><span class="c2">h2</span><span class="c1">&#x3E;</span><br><span class="pd2"></span><span class="c1">&#x3C;</span><span class="c2">h2</span><span class="c1">&#x3E;</span><a href="#4rdPage"><span class="txt">Design</span></a><span class="c1">&#x3C;/</span><span class="c2">h2</span><span class="c1">&#x3E;</span><br><span class="pd2"></span><span class="c1">&#x3C;</span><span class="c2">h2</span><span class="c1">&#x3E;</span><a href="#5rdPage"><span class="txt">Markup Coding</span></a><span class="c1">&#x3C;/</span><span class="c2">h2</span><span class="c1">&#x3E;</span><br><span class="pd2"></span><span class="c1">&#x3C;</span><span class="c2">h2</span><span class="c1">&#x3E;</span><a href="#lastPage"><span class="txt">Contact</span></a><span class="c1">&#x3C;/</span><span class="c2">h2</span><span class="c1">&#x3E;</span><br><span class="c1">&#x3C;/</span><span class="c2">body</span><span class="c1">&#x3E;</span><br><span class="c1">&#x3C;/</span><span class="c2">html</span><span class="c1">&#x3E;</span>',{
		 
		 			/*타이핑 js basic settings*/
		 
				 speed:35,          // typing speed (ms)
				 speed_vary:false,  // 'human-like' (bool)
				 delay:false,       // delays start for (N.)Ns
				 mistype:true,     // mistyping: 1:N per char
				 locale:'en',       // keyboard layout; 'en', 'de'
				 caret:'<span style="color:yellow;">&#10074;</span>',        // caret (HTML); default (TRUE): ▎
				 blink:false,       // blink; if TRUE, 200ms or N ms
				 blink_perm:true,   /* permanent caret blinking; if set to FALSE, 
				                       only when delayed (<ins>), paused or finished */
				 tag:'span',        // wrapper tag (.t-container/.t-caret)
				 // caret 깜빡이는 어디에 있는거지?????
			});
		 });
		/*]]>*/