/*
	This file will contain all timer and core game logic
*/

var clock = 0;
var minutesPerHour = 1;
var hoursToSurvive = 6;
var gameActive = false;

function updateClock(){
	if(!gameActive){
		var clock = 0;
		return;
	}
	clock++;
	//increase the clock every time necessary
	//find some way for this to return if a game is not active
setInterval(updateTime, minutesPerHour * 1000);
}

//onClick of some quit button
function userEndGame(){
	gameActive = false;
}

//This function will be triggered onClick of some start button
function startGame(){
	gameActive = true;
	updateClock();
	
	//GAME LOOP
	while((clock < hoursToSurvive) && gameActive){
		//this is where the action happens
	}
	if(!gameActive){
		alert("You quit the game.");
		//call something to refresh the page or something to reset all menus and variables
		return;
	}
	if(clock >= hoursToSurvive){
		alert("YOU HAVE SURVIVED!");
		return;
	}
}