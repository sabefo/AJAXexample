$(document).ready(function() {

	$("#form").submit(function(event){
		event.preventDefault();
		var data = $(this).serialize();
		var post = $.post("/abuelita",data);
		post.done(function(data){
			$("#parrafo").remove();
			$("h1").after("<p id= 'parrafo'>" + data + "</p>");
		});
	});
});