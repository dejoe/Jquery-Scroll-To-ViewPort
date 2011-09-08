	      WebFontConfig = { 
	        google: { families: ['Open+Sans+Condensed:300:latin', 'Josefin+Slab:400,600:latin', 'Oswald:latin', 'PT+Sans+Narrow:latin' ] }
	      };
	      (function() {
	        var wf = document.createElement('script');
	        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
	            '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	        wf.type = 'text/javascript';
	        wf.async = 'true';
	        var s = document.getElementsByTagName('script')[0];
	        s.parentNode.insertBefore(wf, s);
	      })();

$(document).ready(function(){

	// Google code prettify
	prettyPrint();
	
	/*Setting up the navigation scrolls*/
	$("#aboutNav").click(function(){
		$("#aboutContent").scrollToViewPort();
		return false;
	});
	$("#usageNav").click(function(){
		$("#usageContent").scrollToViewPort();
		return false;
	});
	$("#configNav").click(function(){
		$("#configContent").scrollToViewPort();
		return false;
	});
	$("#demoNav").click(function(){
		$("#demoContent").scrollToViewPort();
		return false;
	});
	$("#codeNav").click(function(){
		$("#codeContent").scrollToViewPort();
		return false;
	});
	
	$(window).scroll(function(){
		var posDiff = $(".sidebar").offset().top - $(window).scrollTop();
		console.log (posDiff);
		if (posDiff > 35 ){
			$("#navbar").css("position","static");
		}else{
			$("#navbar").css({position:"fixed",top:"35px"});
		}
	
	});
	
  });
  
  