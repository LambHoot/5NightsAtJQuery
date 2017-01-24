/*
	This file contains all door logic.
	Yes, it's awful.
	No, I don't care.
	Maybe I'll do some refactoring someday.
*/

var ll=false;
var ld=false;
var rl=false;
var rd=false;

//LEFT SIDE

function ll_click()
{
	if(!gameActive)
		return;
	//turn off light
    if($( "#l_light_btn" ).hasClass("active")){
		$("#l_light_btn").removeClass("active");
		ll = false;
		$("#l_door").attr("src", "images/l_door_open.png");
		numDrainers--;
		playLightCloseSound();
	}
	//turn on light
	else{
		$("#l_light_btn").addClass("active");
		ll = true;
		if(lm){
			$("#l_door").attr("src", "images/l_monster.png");
		}
		else{
			$("#l_door").attr("src", "images/l_light.png");
		}
		numDrainers++;
		playLightOpenSound();
	}
}
function ld_click()
{
	if(!gameActive)
		return;
	//open door
    if($( "#l_door_btn" ).hasClass("active")){
		$("#l_door_btn").removeClass("active");
		//$("#l_doorTop").addClass("hidden");
		$("#l_doorTop").removeClass("doorClose");
		$("#l_doorTop").addClass("doorOpen");
		ld = false;
		numDrainers -= 2;
		playDoorOpenSound();
	}
	//close door
	else{
		$("#l_door_btn").addClass("active");
		//$("#l_doorTop").removeClass("hidden");
		$("#l_doorTop").removeClass("doorOpen");
		$("#l_doorTop").addClass("doorClose");
		ld = true;
		numDrainers += 2;
		playDoorCloseSound();
	}
}

//RIGHT SIDE

function rl_click()
{
	if(!gameActive)
		return;
	//turn off light
    if($( "#r_light_btn" ).hasClass("active")){
		$("#r_light_btn").removeClass("active");
		rl = false;
		$("#r_door").attr("src", "images/r_door_open.png");
		numDrainers--;
		playLightCloseSound();
	}
	//turn on light
	else{
		$("#r_light_btn").addClass("active");
		rl = true;
		if(rm){
			$("#r_door").attr("src", "images/r_monster.png");
		}
		else{
			$("#r_door").attr("src", "images/r_light.png");
		}
		numDrainers++;
		playLightOpenSound();
	}
}
function rd_click()
{
	if(!gameActive)
		return;
	//open door
    if($( "#r_door_btn" ).hasClass("active")){
		$("#r_door_btn").removeClass("active");
		//$("#r_doorTop").addClass("hidden");
		$("#r_doorTop").removeClass("doorClose");
		$("#r_doorTop").addClass("doorOpen");
		rd = false;
		numDrainers -= 2;
		playDoorOpenSound();
	}
	//close door
	else{
		$("#r_door_btn").addClass("active");
		//$("#r_doorTop").removeClass("hidden");
		$("#r_doorTop").removeClass("doorOpen");
		$("#r_doorTop").addClass("doorClose");
		rd = true;
		numDrainers += 2;
		playDoorCloseSound();
	}
}

function resetDoors(){
	ll=false;
	ld=false;
	rl=false;
	rd=false;
	$("#l_light_btn").removeClass("active");
	$("#r_light_btn").removeClass("active");
	$("#l_door_btn").removeClass("active");
	$("#r_door_btn").removeClass("active");
	//$("#l_doorTop").addClass("hidden");
	//$("#r_doorTop").addClass("hidden");
	$("#l_doorTop").removeClass("doorOpen");
	$("#l_doorTop").removeClass("doorClose");
	$("#r_doorTop").removeClass("doorOpen");
	$("#r_doorTop").removeClass("doorClose");
	$("#l_door").attr("src", "images/l_door_open.png");
	$("#r_door").attr("src", "images/r_door_open.png");
}