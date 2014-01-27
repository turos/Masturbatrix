$(document).ready(function(){
	

	//scrolling to anchor
	$('a[anchor]').click(function(e) {
        e.preventDefault();
        var anchor = $(this).attr('anchor');
        var top = $('div[name='+anchor+']').offset().top;
        $('html, body').animate({scrollTop:top},2000);
    });




	//HIDE OR SHOW THE DATA
	$(".btn_showhide").click(function(){
		//console.log($(this).attr('value'));
		var topic = $(this).attr('value');

		if($(this).html()=="Show me proof"){
			$(this).html("Back to conclusion");
			$("#conclusion_" + topic).hide();
			//console.log("#data_" + topic);
			$("#data_" + topic).fadeIn();
			loadData(topic);
		}
		else{			
			$(this).html("Show me proof");
			$("#data_" + topic).hide();
			$("#conclusion_"+ topic).fadeIn();
			//$("#answ_" + topic).hide();
        	//$("#data_" + topic).fadeIn();
		}
	});



});
