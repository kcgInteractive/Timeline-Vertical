!function(a){var b=[];a(".text-option").each(function(c){var d=a(this).find(".image-container").css("background-image"),e="text-option-"+c;a(this).attr("id",e);d=d.replace("url(","").replace(")","").replace(/\"/gi,""),a(this).find(".image-container").append('<ul class="Image-Showcase-nav"></ul>'),b.push(d)}),a(".Image-Showcase-nav").each(function(){var c=a(this);a(b).each(function(d){a(c).append("<li id=showcase-"+d+'><img src="'+b[d]+'" alt=""></li>'),console.log(d)})}),a(".text-option").first().addClass("active");var c=0;a("#showcase-"+c).find("img").css("opacity",.5),a(".Image-Showcase-nav li").click(function(){var b=a(this).attr("id");b=parseInt(b.slice(-1),10),b!=c&&(a("#text-option-"+c).removeClass("active"),a("#showcase-"+c).find("img").css("opacity",1),c=b,a("#text-option-"+b).addClass("active"),a("#text-option-"+b).find("#showcase-"+b).find("img").css("opacity",.5))})}(jQuery);