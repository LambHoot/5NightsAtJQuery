
//important to note!
var cameras_open = false;
$("#camera_screen").addClass("hidden");

function camera_clicked(){
	//open camera
	if(!cameras_open){
		cameras_open = true;
		$("#camera_screen").removeClass("hidden");
		$("#c_btn").addClass("active");
		
		numDrainers++;
	}
	//close camera
	else{
		cameras_open = false;
		$("#camera_screen").addClass("hidden");
		$("#c_btn").removeClass("active");
		
		numDrainers--;
	}
	
}

function resetCameras(){
	cameras_open = false;
	$("#camera_screen").addClass("hidden");
	$("#c_btn").removeClass("active");
}