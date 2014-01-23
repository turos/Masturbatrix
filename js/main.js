$(document).ready(function(){
	
	$('a[anchor]').click(function(e) {
        e.preventDefault();
        var anchor = $(this).attr('anchor');
        var top = $('div[name='+anchor+']').offset().top;
        $('html, body').animate({scrollTop:top},2000);
    });



});
