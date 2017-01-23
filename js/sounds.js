
//contains all sound effects and functions to call them

var bgMusic = new Audio("./sfx/bgMusic.wav");

function playbgMusic(){
	bgMusic.loop = true;
	bgMusic.play();
}

function playDoorCloseSound(){
	new Audio("./sfx/doorCloseSound.wav").play();
}

function playOpenSound(){
	new Audio("./sfx/doorOpenSound.wav").play();
}

function resetSounds(){
	bgMusic.pause();
	bgMusic.currentTime = 0;
}