!function(){"use strict";var e=!1;$(".slide-3 .row .frame").on("mouseover",function(i){for(var t=$(this),n=t.siblings(),s=0;s<n.length;s++)$(n[s]).children(".content").css("opacity",0);e||(t.children(".bg-image").addClass("active"),setTimeout(function(){t.children(".content").css("opacity",1)},200)),e=!0}),$(".slide-3 .row .frame").on("mouseleave",function(){var i=$(this),t=i.siblings();i.children(".content").css("opacity",0),i.children(".bg-image").removeClass("active");for(var n=0;n<t.length;n++)$(t[n]).children(".content").css("opacity",0);e=!1}),$(".section-slider").flexslider({animation:"slide",prevText:"",nextText:"",useCSS:!1}),$(".picture-slider").flexslider({animation:"slide",prevText:"",nextText:"",useCSS:!1,controlNav:!1})}();