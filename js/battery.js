var power = 100;
//with both doors open, I want to end the night with 50% power left
// 100/(# seconds in whole game)   <- how much to last just until end of game
// *0.4
var totalRealGameTime = hoursToSurvive*minutesPerHour*60;
var standardDecrement = (power/totalRealGameTime)*0.5;//leaves 0.5 available
standardDecrement = standardDecrement/10;//so that power can be updated every 10th of a second, fast enough to catch buttons
var numDrainers = 1;
//decrement power by this much each second
var power_first_update = true;

function updatePower(){
	if(!gameActive){
		power = 100;
		clearInterval(power_update);
		return;
	}
	power = power - (standardDecrement*numDrainers);
	$('#power_indicator p').text(" Power: " + Math.ceil(power) + "%");
	if(power <= 0){
		alert("POWER OUT!");
		gameActive = false;
		resetGame();
		clearInterval(power_update);
		return;
	}
	if(power_first_update){
		power_update = setInterval(updatePower, 100);
		power_first_update = false;
	}
}

function resetBattery(){
	power = 100;
	power_first_update = true;
	$('#power_indicator p').text('');
	clearInterval(power_update);
	numDrainers = 1;
}