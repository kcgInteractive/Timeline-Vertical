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