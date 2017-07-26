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
      console.log(index);
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