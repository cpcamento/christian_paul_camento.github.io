$('ul.menu li').click(function(){
    var id = $(this).attr('id');
   $("html, body").delay(2000).animate({
        scrollTop: $('#'+id).offset().top 
    }, 2000);
});
