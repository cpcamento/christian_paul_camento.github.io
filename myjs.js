$('ul.menu li').click(function(){
var id = $(this).attr('id');
  var target = $('#'+id);
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
});
