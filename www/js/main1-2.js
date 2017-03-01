$(document).on("pagecreate","#pageone",function(){
	$("#text-basic,#text-basic1,#text-basic2").on("swipe", function () {
    $("input[type=text]").val("");
    $("input[type=text]").after("");
    });
                        
});

$(document).on("pagecreate","#pageone",function(){
	$("#password,#password1,#password2").on("swipe", function () {
    $("input[type=password]").val("");
    $("input[type=password]").after("");
    });
                        
});