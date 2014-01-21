$(document).ready(function(){
	
	//transfering from main page to data page with selected topic
	$("#selectTopic").change(function(){
		var url = "data.html?topic=" + $("#selectTopic").val();
		window.open(url,'_self',false);
	});


});
