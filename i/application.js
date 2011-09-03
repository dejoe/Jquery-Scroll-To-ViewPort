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
	});
	$("#usageNav").click(function(){
		$("#usageContent").scrollToViewPort();
	});
	$("#configNav").click(function(){
		$("#configContent").scrollToViewPort();
	});
	$("#demoNav").click(function(){
		$("#demoContent").scrollToViewPort();
	});
	$("#codeNav").click(function(){
		$("#codeContent").scrollToViewPort();
	});
	
  });