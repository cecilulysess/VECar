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

function OnTriggerExit (other : Collider) {
	
}