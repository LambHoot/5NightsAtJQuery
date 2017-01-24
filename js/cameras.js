
//important to note!
var cameras_open = false;
var camViewed = 0;
//$("#camera_screen").addClass("hidden");

function camera_clicked(){
	if(!gameActive)
		return;
	//open camera
	if(!cameras_open){
		cameras_open = true;
		//$("#camera_screen").removeClass("hidden");
		$("#camera_screen").removeClass("cameraFlipDown");
		$("#camera_screen").addClass("cameraFlipUp");
		$("#c_btn").addClass("active");
		numDrainers++;
		playCameraOpenSound();
	}
	//close camera
	else{
		cameras_open = false;
		//$("#camera_screen").addClass("hidden");
		$("#camera_screen").removeClass("cameraFlipUp");
		$("#camera_screen").addClass("cameraFlipDown");
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
	$("#current_camera_view").effect( "shake", {times:1}, 70 );
}

function updateCameraViews(){
	UpdateAllRooms();
	changeCameraViewImage();
}

function resetCameras(){
	cameras_open = false;
	camViewed = 0;
	//$("#camera_screen").addClass("hidden");
	$("#camera_screen").removeClass("cameraFlipUp");
	$("#camera_screen").removeClass("cameraFlipDown");
	$("#c_btn").removeClass("active");
}

