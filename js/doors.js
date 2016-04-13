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
	//turn off light
    if($( "#l_light_btn" ).hasClass("active")){
		$("#l_light_btn").removeClass("active");
		ll = false;
		$("#l_door").attr("src", "images/l_door_open.png");
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
	}
}
function ld_click()
{
	//open door
    if($( "#l_door_btn" ).hasClass("active")){
		$("#l_door_btn").removeClass("active");
		$("#l_doorTop").addClass("hidden");
		ld = false;
	}
	//close door
	else{
		$("#l_door_btn").addClass("active");
		$("#l_doorTop").removeClass("hidden");
		ld = true;
	}
}

//RIGHT SIDE

function rl_click()
{
	//turn off light
    if($( "#r_light_btn" ).hasClass("active")){
		$("#r_light_btn").removeClass("active");
		rl = false;
		$("#r_door").attr("src", "images/r_door_open.png");
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
	}
}
function rd_click()
{
	//open door
    if($( "#r_door_btn" ).hasClass("active")){
		$("#r_door_btn").removeClass("active");
		$("#r_doorTop").addClass("hidden");
		rd = false;
	}
	//close door
	else{
		$("#r_door_btn").addClass("active");
		$("#r_doorTop").removeClass("hidden");
		rd = true;
	}
}

function resetDoors(){
	ll=false;
	ld=false;
	rl=false;
	rd=false;
}