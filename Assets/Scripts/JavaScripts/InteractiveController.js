#pragma strict
var warning_controller : WarningTextController;
var instruction_controller : InstructionTextController;

function Start () {

}

function Update () {

}

function OnTriggerEnter(other : Collider) {
	if (other.tag != "CarTriggerDetector") return;
	Debug.Log("entering" + other.tag + " this: " + this.tag);
	if ( this.tag == "EnteringCourseInst" ) {
		instruction_controller.instruction_content = "Good, you entering the course, please drive along the arrow on the course";
	}
	if (this.tag == "PrepareToNormalParkingInst") {
		instruction_controller.instruction_content = "Now, try parking ";
	}
}

function OnTriggerExit (other : Collider) {
	
}