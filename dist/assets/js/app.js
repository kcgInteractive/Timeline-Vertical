function landingSection(){var a=($("#landingPageVisual").children().length,$(window).width(),$(".landingPageImages"),$(".landingPageSlideText"),$(".landingPageSlideText"));$(".landingPageSlideNav");$(window).width()>=769?a.on({mouseenter:function(){$(this).addClass("active");var a=$(this).attr("data-number");$('.landingPageImages[data-slide="'+a+'"]').addClass("active")},mouseleave:function(){$(this).removeClass("active");var a=$(this).attr("data-number");$('.landingPageImages[data-slide="'+a+'"]').removeClass("active")}}):a.on("click",function(){$(this).addClass("active").siblings().removeClass("active");var a=$(this).attr("data-number");$('.landingPageImages[data-slide="'+a+'"]').addClass("active").siblings().removeClass("active")})}function backNext(){for(var a,b=$(".menu-item a"),c=window.location.href,d=0;d<b.length;d++){var e=b[d].href;e===c&&(a=d)}void 0!==b[a-1]&&$(".back-next").append('<div class="back"><a href="'+b[a-1]+'"><i class="fa fa-angle-left" aria-hidden="true"></i><span>Back</span></a></div>'),void 0!==b[a+1]&&$(".back-next").append('<div class="next"><a href="'+b[a+1]+'"><span>Next</span><i class="fa fa-angle-right" aria-hidden="true"></i></a></div>')}function appendVideo(a){var b=a,c=a.attr("data-video"),d=a.attr("data-aspect"),e=b.closest(".module").attr("id");$(".video").html(""),$(".video").append('<div id="video-'+e+'"></div>'),jwplayer("video-"+e).setup({file:"http://video.kochcreativegroupdev.com/manifests/"+c+".m3u8",image:"http://video.kochcreativegroupdev.com/thumbs/"+c+".jpg",aspectratio:d,width:"100%",autostart:!0,controls:!0})}function mapMaskCSS(){var a=$(".mapMask img"),b=(a.height(),a.width(),$(".map"),$(".draggableMap"));b.children("img").height()}$(document).foundation(),$(document).ready(function(){landingSection()}),$(".button-wrapper").on("click",function(){$(".main-menu").addClass("active")}),$(".close-wrapper").on("click",function(){$(".main-menu").removeClass("active")}),backNext(),function(a){var b=0,c=[],d=-1,e=0,f=0;a(".module").each(function(){f++;var g=this.id;a("#"+g+" .text-option").each(function(){var f=a(this).find(".image-container").css("background-image"),g="text-option-"+(b+1);a(this).attr("id",g);f=f.replace("url(","").replace(")","").replace(/\"/gi,""),a(this).find(".image-container").append('<ul class="Image-Showcase-nav""></ul>'),c.push(f),b++,d==-1&&(d=b,e=d)});for(var h=a("#"+g+" .Image-Showcase-nav"),i=d;d<=c.length;)a(h).append('<li id="showcase-'+d+'" style="background-image: url('+c[d-1]+');"></li>'),d++;1==f?a("#"+g+" .Image-Showcase-nav li").attr("old",1):a("#"+g+" .Image-Showcase-nav li").attr("old",i),a("#"+g+" .text-option").first().addClass("active"),a("#"+g+" .Image-Showcase-nav li").first().find("img").css("opacity",.5)})}(jQuery),function(a){a(".Image-Showcase-nav li").click(function(){var b=a(this).attr("old"),c=a(this).attr("id");c=parseInt(c.slice(-1),10),c!=b&&(a("#text-option-"+b).removeClass("active"),a("#showcase-"+b).find("img").css("opacity",1),a('li[old="'+b+'"]').attr("old",c),a("#text-option-"+c).addClass("active"),a("#text-option-"+c).find("#showcase-"+c).find("img").css("opacity",.5))})}(jQuery),$(".play-button").on("click",function(){var a=$(this);$(".video-wrapper").addClass("active"),appendVideo(a)}),$(".video-wrapper .close-button").on("click",function(){var a=$(".jwplayer").attr("id");$(".video-wrapper").removeClass("active"),jwplayer(a).pause(!0)}),function(a){jQuery().draggable||(a.fn.draggable=function(){var b=function(a){if(a.originalEvent&&a.originalEvent.targetTouches&&a.originalEvent.targetTouches[0]){var b=a.originalEvent.targetTouches[0];return a.pageX=b.clientX,a.pageY=b.clientY,!0}return!1};return this.css("cursor","move").on("mousedown touchstart",function(c){b(c);var d=a(this),e=d.offset(),f=e.left-c.pageX,g=e.top-c.pageY;d.css("z-index");a.fn.draggable.stack||(a.fn.draggable.stack=1),stack=a.fn.draggable.stack;var h=!0,i=null;a(window).on("mousemove.draggable touchmove.draggable",function(c){if(b(c),a(window).scroll(function(a){a.preventDefault()}),h){h=!1,d.css({transform:"scale(1)",bottom:"auto",right:"auto"});var e=a(c.target);e.is("a")?(i=e,e.one("click.draggable",function(a){a.preventDefault(),a.stopImmediatePropagation()})):d.is("a")&&(i=d,d.one("click.draggable",function(a){a.preventDefault(),a.stopImmediatePropagation()}))}var j=f+c.pageX;g+c.pageY;300>j&&j>-1200&&d.offset({left:f+c.pageX,top:g+c.pageY}),c.preventDefault()}).on("mouseup touchend touchcancel",function(){if(a(this).off("mousemove.draggable touchmove.draggable"),d.css({transform:"scale(1)"}),a.fn.draggable.stack++,b(c)){i&&i.off("click.draggable");var f=d.offset();if(Math.abs(f.left-e.left)<=3&&Math.abs(f.top-e.top)<=3)if(i)i[0].click();else{var g=a(c.target);g.is("a")?c.target.click():d.is("a")&&d[0].click()}}}),c.preventDefault()}),this})}(jQuery),$(".draggableMap #map").on("click",function(){$(this).siblings("#clickAndDrag").fadeOut(),$(this).addClass("active").draggable({axis:"x",containment:"parent"})}),$(".draggableMap").length&&mapMaskCSS(),$("#journey > g").on("click touchstart",function(){var a=$(this).attr("id");$(this).addClass("active").siblings().removeClass("active"),$("."+a).addClass("active").siblings().removeClass("active")});