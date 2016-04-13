
var lm = false;
var rm = false;

var LM_nb_rooms = 5;
var RM_nb_rooms = 5;

var LM_position = 0;
var RM_position = 0;

var LM_activity_level = 5;
var RM_activity_level = 5;

//these adjusted depending on difficulty setting?
var LM_update_time = 5000;
var RM_update_time = 5000;

var LM_update_valid;
var LM_first_update = true;
var RM_update_valid;

function updateLM(){
	if(!gameActive){
		clearInterval(LM_update_valid);
		return;
	}
	//some logic for this based on activity level
	LM_position++;
	if(LM_position == LM_nb_rooms){
		lm = true;
	}
	if(LM_position > LM_nb_rooms){
		lm = false;
		alert("MONSTER KILLED YOU!");
		clearInterval(LM_update_valid);
		resetGame();
		//return;
	}
	if(LM_first_update){
		LM_update_valid = setInterval(updateLM, LM_update_time);
		LM_first_update = false;
	}
}

function resetMonsters(){
	lm = false;
	rm = false;
	LM_nb_rooms = 5;
	RM_nb_rooms = 5;
	LM_position = 0;
	RM_position = 0;
	LM_update_time = 5000;
	RM_update_time = 5000;
	LM_update_valid;
	LM_first_update = true;
	RM_update_valid;
}