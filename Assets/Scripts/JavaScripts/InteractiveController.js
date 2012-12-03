#pragma strict
var warning_controller : WarningTextController;
var instruction_controller : InstructionTextController;

// car itself attached with this script
function Start () {

}

function Update () {

}

function OnTriggerEnter(other : Collider) {

	Debug.Log("entering" + other.tag + " this: " + this.tag);
	if (other.tag != "CarTriggerDetector") return;
	if ( this.tag == "EnteringCourseInst" ) {
		instruction_controller.instruction_content = "Good, you entering the course, please drive along the arrow on the course";
	}
	if (this.tag == "PrepareToNormalParkingInst") {
		instruction_controller.instruction_content = "Now, try parking in the parking lot in front. Tips: keep speed at about 10 mph when you pass the white line";
	}
	
	
}
function OnTriggerStay (other : Collider) {

	if (other.tag != "CarTriggerDetector") return;
	
	if (this.tag == "NParkingFinishedInst" &&  instruction_controller.car.current_speed < 1) {
//	Debug.Log("stay" + other.tag + " this: " + this.tag);
		var score = 15;
		instruction_controller.instruction_content = "Great, you finished the normal parking, your score is " + score + " out of 30. Now get turn around to the parallel parking";
	}
	if (this.tag == "PParkingFinishedInst" &&  instruction_controller.car.current_speed < 1) {
//	Debug.Log("stay" + other.tag + " this: " + this.tag);
		score = 15;
		instruction_controller.instruction_content = "Great, you finished the Parallel parking, your score is " + score + " out of 30. Now get out of the course.";
	}
}
function OnTriggerExit (other : Collider) {
	
}