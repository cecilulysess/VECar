#pragma strict
var warning_controller : WarningTextController;
var instruction_controller : InstructionTextController;

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
		instruction_controller.instruction_content = "Now, try parking in the parking lot in front ";
	}
}

function OnTriggerExit (other : Collider) {
	
}