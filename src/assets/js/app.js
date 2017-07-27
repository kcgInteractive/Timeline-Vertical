// $(document).foundation();

//Image Showcase

(function($) {
  var imageShowCaseCount = 0;
  var options = [];
  var startAt = -1;
  var old = 0;
  var itteration = 0;
  $( ".module" ).each(function() {
    itteration++;
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
      $(thisIs).append('<li id=showcase-'+ startAt +'><img src="'+ options[startAt-1] +'" alt=""></li>');
      startAt++;
    }
    if(itteration==1)
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
