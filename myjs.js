$('ul.menu li').click(function(){
    var id = $(this).attr('id');
   $("html, body").animate({
        scrollTop: $('#'+id).offset().top 
    }, 2000);
});
