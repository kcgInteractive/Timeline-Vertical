// $(document).foundation();

//Image Showcase

(function($) {
  var options = [];
  $( ".text-option" ).each(function(index) {
    var bg = $(this).find( '.image-container' ).css('background-image');
    var idval = "text-option-"+index;
    var setId = $(this).attr('id', idval);;
    bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
    $(this).find( '.image-container' ).append('<ul class="Image-Showcase-nav"></ul>');
    options.push(bg);
  });

  $( ".Image-Showcase-nav" ).each(function() {
    var thisIs = $(this);
    $(options).each(function(index){
      $(thisIs).append('<li id=showcase-'+ index +'><img src="'+ options[index] +'" alt=""></li>');
      //console.log(index);
    });
  });

  $('.text-option').first().addClass("active");
  var old = 0;
  $( "#showcase-"+old ).find("img").css("opacity", 0.5 );
  $(".Image-Showcase-nav li").click(function(){
    var id=$(this).attr('id');
    id = parseInt(id.slice(-1), 10);
    if(id!=old){
      $( "#text-option-"+old ).removeClass( "active" );
      $( "#showcase-"+old ).find("img").css("opacity", 1 );
      old=id;
      $( "#text-option-"+id ).addClass( "active" );
      $( "#text-option-"+id ).find( "#showcase-"+id ).find("img").css( "opacity", 0.5  );
    }
  }); 
}(jQuery));

//videos append using code ID from jw player - No iframe
function appendVideo(){
    var currentVideo = $(this);
    var myVideoID = $(this).attr('data-video');
    var myVideoAspect = $(this).attr('data-aspect');
    console.log(currentVideo);

    currentVideo.append('<div id="video"></div>');

    // var moduleString = "jwvid_" + appendModuleOrder.toString();
    // $('#' + appendModuleOrder).append('<div class="video-wrapper"><div id="' + moduleString + '"></div></div>');
    jwplayer("video").setup({
      file: "http://video.kochcreativegroupdev.com/manifests/" + myVideoID + ".m3u8",
      image: "http://video.kochcreativegroupdev.com/thumbs/" + myVideoID + ".jpg",
      aspectratio:myVideoAspect,
      width:'100%', 
      autostart: false,
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
$(document).ready(function() {
	var videos = $('.video-wrapper');
	$.each(videos, appendVideo);
});












