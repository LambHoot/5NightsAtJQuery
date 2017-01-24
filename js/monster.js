
var lm = false;
var rm = false;

var LM_nb_rooms = 6;
var RM_nb_rooms = 6;

var LM_position = 0;
var RM_position = 0;

//min is 1, max is 20
var LM_activity_level = 10;
var RM_activity_level = 10;

//these adjusted depending on difficulty setting?
var LM_update_time = 1000;
var RM_update_time = 1000;

var LM_update_valid;
var LM_first_update = true;
var RM_update_valid;
var RM_first_update = true;

function updateLM(){
	if(!gameActive){
		clearInterval(LM_update_valid);
		return;
	}
	
	if(LM_position > LM_nb_rooms){
		lm = true;
	}
	if(LM_first_update){
		LM_update_valid = setInterval(updateLM, LM_update_time);
		LM_first_update = false;
	}
	moveLM();
	updateCameraViews();
}

function updateRM(){
	if(!gameActive){
		clearInterval(RM_update_valid);
		return;
	}
	
	if(RM_position == RM_nb_rooms){
		rm = true;
	}
	if(RM_first_update){
		RM_update_valid = setInterval(updateRM, RM_update_time);
		RM_first_update = false;
	}
	moveRM();
	updateCameraViews();
}

//									MOVE LEFT MONSTER
function moveLM(){
	var new_position = LM_position;
	var new_activity_level = LM_activity_level;
	//movement logic for LM
	if(moveDecision(LM_activity_level)){
		playMonsterMoveSound(LM_position);
		//0 or 1
		var direction = Math.random();
		//>0.4 is forward, less is backward
		//FORWARD
		if(direction >= 0.4){
			//try to go in
			if(LM_position == LM_nb_rooms){
				//check if door is closed
				if(ld){
					//reset the monster to 0
					playMonsterBlockedSound();
					$("#l_doorTop").effect( "shake", {times:2}, 120 );
					LM_position = 0;
					LM_activity_level = 10;
					lm = false;
					if(ll){
						$("#l_door").attr("src", "images/l_light.png");
					}
				}
				else{
					lm = false;
					killPlayer("FREDDI");
					if(ll)
						$("#l_door").attr("src", "images/l_light.png");
					else
						$("#l_door").attr("src", "images/l_door_open.png");
					//alert("LEFT MONSTER KILLED YOU!");
					clearInterval(LM_update_valid);
					//resetGame();
					return;
				}
			}
			new_position = updatePosition(LM_position, LM_nb_rooms, 1);
			new_activity_level = updateActivityLevel(LM_activity_level, 1);
		}
		//BACKWARD
		else{
			new_position = updatePosition(LM_position, LM_nb_rooms, -1);
			var activityLevelDownChance = Math.random();
			if(activityLevelDownChance >= 0.5){
				new_activity_level = updateActivityLevel(LM_activity_level, -1);
			}
			else{
				new_activity_level = updateActivityLevel(LM_activity_level, 1);
			}
		}
	}
	//no movement made
	else{
		//activity level down
		new_position = LM_position;
		var activityLevelDownChance = Math.random();
		if(activityLevelDownChance >= 0.5){
			new_activity_level = updateActivityLevel(LM_activity_level, -1);
		}
	}
	//end of movement
	//update monster position and activity level
	LM_position = new_position;
	LM_activity_level = new_activity_level;
	//set if he's left outside
	if(LM_position == LM_nb_rooms){
		lm = true;
		LM_activity_level = 10;//prevents the monster from staying outside the door for too long
		if(ll){
			$("#l_door").attr("src", "images/l_monster.png");
		}
	}
	else{
		lm = false;
	}
}

//									MOVE RIGHT MONSTER
function moveRM(){
	var new_position = RM_position;
	var new_activity_level = RM_activity_level;
	//movement logic for RM
	if(moveDecision(RM_activity_level)){
		//0 or 1
		playMonsterMoveSound(RM_position);
		var direction = Math.random();
		//>0.4 is forward, less is backward
		//FORWARD
		if(direction >= 0.4){
			//try to go in
			if(RM_position == RM_nb_rooms){
				//check if door is closed
				if(rd){
					//reset the monster to 0
					playMonsterBlockedSound();
					$("#r_doorTop").effect( "shake", {times:2}, 120 );
					RM_position = 0;
					RM_activity_level = 10;
					rm = false;
					if(rl){
						$("#r_door").attr("src", "images/r_light.png");
					}
				}
				else{
					rm = false;
					killPlayer("LUTHER");
					if(rl)
						$("#r_door").attr("src", "images/r_light.png");
					else
						$("#r_door").attr("src", "images/r_door_open.png");
					//alert("RIGHT MONSTER KILLED YOU!");
					clearInterval(RM_update_valid);
					//resetGame();
					return;
				}
			}
			new_position = updatePosition(RM_position, RM_nb_rooms, 1);
			new_activity_level = updateActivityLevel(RM_activity_level, 1);
		}
		//BACKWARD
		else{
			new_position = updatePosition(RM_position, RM_nb_rooms, -1);
			var activityLevelDownChance = Math.random();
			if(activityLevelDownChance >= 0.5){
				new_activity_level = updateActivityLevel(RM_activity_level, -1);
			}
			else{
				new_activity_level = updateActivityLevel(RM_activity_level, 1);
			}
		}
	}
	//no movement made
	else{
		//activity level down
		new_position = RM_position;
		var activityLevelDownChance = Math.random();
		if(activityLevelDownChance >= 0.5){
			new_activity_level = updateActivityLevel(RM_activity_level, -1);
		}
	}
	//end of movement
	//update monster position and activity level
	RM_position = new_position;
	RM_activity_level = new_activity_level;
	//set if he's right outside
	if(RM_position == RM_nb_rooms){
		rm = true;
		RM_activity_level = 10;//prevents the monster from staying outside the door for too long
		if(rl){
			$("#r_door").attr("src", "images/r_monster.png");
		}
	}
	else{
		rm = false;
	}
}

function moveDecision(activityLvl){
	if(activityLvl >= Math.floor((Math.random() * 20) + 1)){
		return true;
	}
	else{
		return false;
	}
}

function updatePosition(pos, nb_rooms, direction){
	if(direction == 1){
		if(pos > nb_rooms){
			return pos;
		}
		else{
			return pos + 1;
		}
	}
	else{
		if(pos == 0){
			return pos;
		}
		else{
			return pos -1;
		}
	}
}

function updateActivityLevel(activityLvl, direction){
	if(direction == 1){
		if(activityLvl == 20){
			return 20;
		}
		else{
			return activityLvl + 1;
		}
	}
	else{
		if(activityLvl <= 1){
			return 1;
		}
		else{
		return activityLvl - 1;
		}
	}
}

function killPlayer(monsterName){
	clock = 0;//gives enough time for animation to finish without 6AM event taking over
	playMonsterAttackSound();
	setTimeout(function () {
		alert(monsterName + " KILLED YOU!");
		resetGame();
    }, 6000);
}

function resetMonsters(){
	lm = false;
	rm = false;
	LM_nb_rooms = 6;
	RM_nb_rooms = 6;
	LM_position = 0;
	RM_position = 0;
	LM_activity_level = 10;
	RM_activity_level = 10;
	LM_update_time = 1000;
	RM_update_time = 1000;
	clearInterval(LM_update_valid);
	LM_first_update = true;
	clearInterval(RM_update_valid);
	RM_first_update = true;
}