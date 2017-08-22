$(document).foundation();

//Menu Navigation
$('.button-wrapper').on('click', function() {
  $('.main-menu').addClass('active');
});
$('.close-wrapper').on('click', function() {
  $('.main-menu').removeClass('active');
});

//Image Showcase

// updated to get list items from transformaiton

(function($) {
  var imageShowCaseCount = 0;
  var options = [];
  var startAt = -1;
  var old = 0;

  var iteration = 0;
  $( ".module" ).each(function() {
    iteration++;
    var modId = this.id;
    $("#"+modId+" .text-option" ).each(function() {
      var bg = $(this).find( '.image-container' ).css('background-image');
      var idval = "text-option-"+(imageShowCaseCount+1);
      var setId = $(this).attr('id', idval);
      bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
      $(this).find( '.image-container' ).append('<ul class="Image-Showcase-nav""></ul>');
      options.push(bg);
      imageShowCaseCount++;
      if(startAt == -1){
        startAt = imageShowCaseCount;
        old = startAt;
      }
    });
    var thisIs = $("#"+modId+" .Image-Showcase-nav");
    var startOld = startAt;
    while (startAt <= options.length){
      $(thisIs).append('<li id="showcase-'+ startAt +'" style="background-image: url(' + options[startAt-1] + ');"></li>');
      startAt++;
    }

    if(iteration==1)
      $("#"+modId+" .Image-Showcase-nav li").attr('old', 1);
    else
      $("#"+modId+" .Image-Showcase-nav li").attr('old', startOld);
    $('#'+modId+' .text-option').first().addClass("active");
    $( '#'+modId+' .Image-Showcase-nav li').first().find("img").css("opacity", 0.5 );
  });


}(jQuery));

(function($) {
  $(".Image-Showcase-nav li").click(function(){
    var old = $(this).attr("old");
    var id=$(this).attr('id');
    id = parseInt(id.slice(-1), 10);
    if(id!=old){
      $( "#text-option-"+old ).removeClass( "active" );
      $( "#showcase-"+old ).find("img").css("opacity", 1 );
      $('li[old="'+old+'"]').attr('old', id);
      $( "#text-option-"+id ).addClass( "active" );
      $( "#text-option-"+id ).find( "#showcase-"+id ).find("img").css( "opacity", 0.5  );
    }
  });
}(jQuery));





//videos append using code ID from jw player - No iframe
function appendVideo(button){
    var currentVideo = button;
    var myVideoID = button.attr('data-video');
    var myVideoAspect = button.attr('data-aspect');
    var moduleID = currentVideo.closest('.module').attr('id');

    $('.video').html('');
    $('.video').append('<div id="video-' + moduleID + '"></div>');

    // var moduleString = "jwvid_" + appendModuleOrder.toString();
    // $('#' + appendModuleOrder).append('<div class="video-wrapper"><div id="' + moduleString + '"></div></div>');
    jwplayer('video-'+ moduleID).setup({
      file: "http://video.kochcreativegroupdev.com/manifests/" + myVideoID + ".m3u8",
      image: "http://video.kochcreativegroupdev.com/thumbs/" + myVideoID + ".jpg",
      aspectratio:myVideoAspect,
      width:'100%', 
      autostart: true,
      controls: true,
      // events: {
      //   onPlay: 
      //   //Pause Video when another element is clicked or when scrolled away from video
      //       function() {
      //           jwplayer(currentVideo).setVolume(50);
      //           var position = counter +1;  
      //           $(window).on('mousewheel keydown', function(event) {
      //               if(counter < position - 700 || counter > position + 700){
      //                   jwplayer(currentVideo).pause(true);
      //               }
      //           });
      //           $('.miniTimelineNav, .expand').click(function() {
      //               jwplayer(currentVideo).pause(true);
      //           });
      //       }
      // }
    });
} 
// $(document).ready(function() {
// 	var videos = $('.video-wrapper');
// 	$.each(videos, appendVideo);
// });
$('.play-button').on('click', function() {
	var button = $(this);
	$('.video-wrapper').addClass('active');
	appendVideo(button);
});

$('.video-wrapper .close-button').on('click', function() {
	var moduleID = $('.jwplayer').attr('id');
	$('.video-wrapper').removeClass('active');
	jwplayer(moduleID).pause(true);
});
/*--------------------------------------------------------------
Draggable
alternative to jQuery UI’s draggable
based on comments from: http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
usage example: $('.post-thumbnail, article header').draggable();
--------------------------------------------------------------*/
(function($) {
    if (!jQuery().draggable) {
        $.fn.draggable = function() {
            var _fixMobileEvent = function (e) {
                if (e.originalEvent && e.originalEvent.targetTouches && e.originalEvent.targetTouches[0]) {
                    var t = e.originalEvent.targetTouches[0];
                    e.pageX = t.clientX;
                    e.pageY = t.clientY;
                    return true;
                } else {
                    return false;
                }
            };
            this
                .css('cursor', 'move')
                .on('mousedown touchstart', function(e) {
                    _fixMobileEvent(e);
                    var $dragged = $(this);

                    var startOffset = $dragged.offset();
                    // get start position of the item clicked
                    var x = startOffset.left - e.pageX,
                        y = startOffset.top - e.pageY,
                        z = $dragged.css('z-index');

                    if (!$.fn.draggable.stack) {
                        $.fn.draggable.stack = 1;
                    }
                    stack = $.fn.draggable.stack;
                    var firstMove = true;
                    var $preventClick = null;

                    $(window)
                        .on('mousemove.draggable touchmove.draggable', function(e) {
                            _fixMobileEvent(e);

                            // prevent scrolling when dragging is initiated
                            $(window).scroll(function(event){
                            	event.preventDefault();
                            });

	                            if (firstMove) {
	                                firstMove = false;
	                                $dragged
	                                    .css({'transform': 'scale(1)',
	                                          'bottom': 'auto', 'right': 'auto'
	                                    });
	                                    // ^^^^ can change scale here to show a "bump" effect
	                                var $target = $(e.target);
	                                if ($target.is('a')) {
	                                    $preventClick = $target;
	                                    $target.one('click.draggable', function(e) {
	                                        e.preventDefault();
	                                        e.stopImmediatePropagation();
	                                    });
	                                } else if ($dragged.is('a')) {
	                                    $preventClick = $dragged;
	                                    $dragged.one('click.draggable', function(e) {
	                                        e.preventDefault();
	                                        e.stopImmediatePropagation();
	                                    });
	                                }
	                            }
	                            var leftMax = x + e.pageX,
	                            	topMax = y + e.pageY;
	                            if(300 > leftMax && leftMax > -1200) {
		                            $dragged.offset({
		                                left: x + e.pageX,
		                                top: y + e.pageY
		                            });
		                        } else {
									
		                        }
	                            e.preventDefault();
	                            // if(300 > leftMax && leftMax > -1200 && 200 < topMax && topMax < 800) {
                        })
                        .on('mouseup touchend touchcancel', function() {
                            $(this).off('mousemove.draggable touchmove.draggable');
                            $dragged.css({'transform': 'scale(1)'});
                            // revert scale back to one
                            $.fn.draggable.stack++;
                            if (_fixMobileEvent(e)) {
                                if ($preventClick) {
                                	$preventClick.off('click.draggable');
                                }
                                var endOffset = $dragged.offset();
                                if (Math.abs(endOffset.left - startOffset.left) <= 3 && Math.abs(endOffset.top - startOffset.top) <= 3) {

                                    if ($preventClick) {
                                        $preventClick[0].click();
                                    } else {
                                        var $target = $(e.target);
                                        if ($target.is('a')) {
                                            e.target.click();
                                        } else if ($dragged.is('a')) {
                                            $dragged[0].click();
                                        }
                                    }
                                }
                            }
                        });

                    e.preventDefault();
                });
            return this;
        };
    }
})(jQuery);

// intiate draggable function on click of map
$('.draggableMap #map').on('click', function(){
	// remove click to drag pompt
	$(this).siblings('#clickAndDrag').fadeOut();
	$(this).addClass('active').draggable({
		axis: 'x',
		containment : 'parent'
	});
});
//GET HEIGHT AND WIDTH OF MAPMASK TO GIVE TO .MAP
function mapMaskCSS(){

	var mapMask = $('.mapMask img'),
		height = mapMask.height(),
		width = mapMask.width(),
		map = $('.map'),
		draggableMap = $('.draggableMap');

		draggableMap.children('img').height();

} 
// if map exists run width and height function
if($('.draggableMap').length) {
	mapMaskCSS();
}
