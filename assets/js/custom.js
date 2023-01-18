$( document ).ready(function() {
    
	var color=leer_color();
	
	if(leer_color()==1){
		set_claro();

	}else{
		set_obscuro();
	}

	$(".ico-mode").click(function(){
		validar_color();
	});

	$(".ico-platform").click(function(){
		let go=$(this).attr("goto");

		 window.open(go, '_blank');

	});
});


function leer_color(){
	if(window.localStorage.getItem('color')==1){
		return 1;
	}else{
		return 0;
	}
}

function set_claro(){
	window.localStorage.setItem('color', 1);
	$("body").addClass("white");
	$("#mode").removeClass("fa-sun");
	$("#mode").addClass("fa-moon");
	$("#mood").text("Dark");
	return 1;
}

function set_obscuro(){
	window.localStorage.setItem('color', 0);
	$("body").removeClass("white");
	$("#mode").addClass("fa-sun");
	$("#mode").removeClass("fa-moon");
	$("#mood").text("White");
	return 1;
}

function validar_color(){
	
	if(leer_color()==1){
		set_obscuro();
	}else{
		set_claro();
	}
}