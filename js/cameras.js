
//important to note!
var cameras_open = false;
var camViewed = 0;
$("#camera_screen").addClass("hidden");

function camera_clicked(){
	//open camera
	if(!cameras_open){
		cameras_open = true;
		$("#camera_screen").removeClass("hidden");
		$("#c_btn").addClass("active");
		numDrainers++;
		playCameraOpenSound();
	}
	//close camera
	else{
		cameras_open = false;
		$("#camera_screen").addClass("hidden");
		$("#c_btn").removeClass("active");
		numDrainers--;
		playCameraCloseSound();
	}
}

function changeCameraViewImage(){
	$("#camera_view").attr("src", rooms[camViewed].img);
}

function cameraViewButtonClick(camButtonNum){
	camViewed = camButtonNum;
	changeCameraViewImage();
	playCameraSwitchSound();
}

function updateCameraViews(){
	UpdateAllRooms();
	changeCameraViewImage();
}

function resetCameras(){
	cameras_open = false;
	camViewed = 0;
	$("#camera_screen").addClass("hidden");
	$("#c_btn").removeClass("active");
}

