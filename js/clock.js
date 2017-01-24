var clock = 0;
var minutesPerHour = 1;
var hoursToSurvive = 6;
var minute = 1000*60;

var clock_update;
var clock_first_update = true;

function updateClock(){
	if(!gameActive){
		clock = 0;
		clearInterval(clock_update);
		return;
	}
	clock++;
	$('#game_clock p').text(clock + "AM");
	if(clock >= hoursToSurvive){
		gameActive = false;
		$('#game_clock p').text("6AM");
		alert("6AM YOU HAVE SURVIVED!");
		resetGame();
		clearInterval(clock_update);
		return;
	}
	//increase the clock every time necessary
	//find some way for this to return if a game is not active
	if(clock_first_update){
		clock_update = setInterval(updateClock, minutesPerHour * minute);
		clock_first_update = false;
	}
}

function resetClock(){
	clock = 0;
	minutesPerHour = 1;
	hoursToSurvive = 6;
	minute = 1000*60;
	clock_first_update = true;
	$('#game_clock p').text('');
}