function updateGameButtons(){
	if(gameActive){
		$("#start_button").addClass("hidden");
		$("#end_button").removeClass("hidden");
	}
	else{
		$("#start_button").removeClass("hidden");
		$("#end_button").addClass("hidden");
	}
}