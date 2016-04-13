/*
	This file will contain all timer and core game logic
*/

var gameActive = false;

//onClick of some quit button
function userEndGame(){
	gameActive = false;
	resetGame();
}

//This function will be triggered onClick of some start button
function startGame(){
	gameActive = true;
	updateGameButtons();
	updateClock();
	
	//NO TRUE GAME LOOP
	//ALL FUNCTIONS CALLED HERE HAVE INTERVALS
	
	//updateLM();
	//updayeRM();
}

function resetGame(){
	gameActive = false;
	updateGameButtons();
	clock = 0;
	minutesPerHour = 1;
	hoursToSurvive = 6;
	$('#game_clock p').text('');
	ll=false;
	ld=false;
	rl=false;
	rd=false;
	lm = false;
	rm = false;
}