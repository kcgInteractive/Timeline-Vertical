// $(document).foundation();

//Image Showcase
(function($) {
  var options = [];
  $( ".text-option" ).each(function() {
    var bg = $(this).find( '.image-container' ).css('background-image');
    bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
    $(this).find( '.image-container' ).append('<ul class="Image-Showcase-nav"></ul>');
    options.push(bg);
  });
  $( ".Image-Showcase-nav" ).each(function() {
    var thisIs = $(this);
    $(options).each(function(index){
      $(thisIs).append('<li id=showcase-'+ (index + 1) +'><img src="'+ options[index] +'" alt=""></li>');
    });
  });
}(jQuery));


(function($) {
  $('.text-option').first().addClass("active");
  var old = 1;
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