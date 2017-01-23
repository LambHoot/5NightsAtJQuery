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
	updatePower();
	
	//NO TRUE GAME LOOP
	//ALL FUNCTIONS CALLED HERE HAVE INTERVALS
	
	updateLM();
	updateRM();
	
	playbgMusic();
}

function resetGame(){
	gameActive = false;
	updateGameButtons();
	resetClock();
	resetDoors();
	resetMonsters();
	resetBattery();
	resetRooms();
	resetCameras();
	resetSounds();
}