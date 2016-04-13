var clock = 0;
var minutesPerHour = 1;
var hoursToSurvive = 6;
var minute = 1000*60;

function updateClock(){
	if(!gameActive){
		clock = 0;
		return;
	}
	clock++;
	$('#game_clock p').text(clock + "AM");
	if(clock >= hoursToSurvive){
		alert("YOU HAVE SURVIVED!");
		gameActive = false;
		resetGame();
		return;
	}
	//increase the clock every time necessary
	//find some way for this to return if a game is not active
setInterval(updateClock, minutesPerHour * minute);
}