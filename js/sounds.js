
//contains all sound effects and functions to call them

var bgMusic = new Audio("./sfx/bgMusic.wav");

function playbgMusic(){
	bgMusic.loop = true;
	bgMusic.play();
}

function playDoorCloseSound(){
	new Audio("./sfx/doorCloseSound.wav").play();
}

function playDoorOpenSound(){
	new Audio("./sfx/doorOpenSound.wav").play();
}

function playLightCloseSound(){
	new Audio("./sfx/lightCloseSound.wav").play();
}

function playLightOpenSound(){
	new Audio("./sfx/lightOpenSound.wav").play();
}

function playCameraCloseSound(){
	new Audio("./sfx/cameraCloseSound.wav").play();
}

function playCameraOpenSound(){
	new Audio("./sfx/cameraOpenSound.wav").play();
}

function playCameraSwitchSound(){
	camSwitchSound = new Audio("./sfx/cameraSwitchSound.wav");
	camSwitchSound.volume = 0.6;
	camSwitchSound.play();
}

function playMonsterMoveSound(level){
	//choose random sound from 1 to 5
	soundNumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
	monsterMoveSound = new Audio("./sfx/monsterMoveSound" + soundNumber + ".wav");
	monsterMoveSound.volume = level/18;
	monsterMoveSound.play();
}

function playMonsterBlockedSound(){
	new Audio("./sfx/monsterBlockedSound.wav").play();
}

function playMonsterAttackSound(){
	new Audio("./sfx/monsterAttackSound.wav").play();
}

function resetSounds(){
	bgMusic.pause();
	bgMusic.currentTime = 0;
}