$('ul.menu li').click(function(){
var id = $(this).attr('id');
        if (id == "first") {
            $('html,body').animate({
                scrollTop: 0
            }, 1000);
        }else if(id == "second"){
            $('html,body').animate({
                scrollTop: 2000
            }, 1000);
        }
});
