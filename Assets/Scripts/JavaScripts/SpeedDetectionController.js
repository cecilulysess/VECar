#pragma strict
var inst_controller: InstructionTextController;
var warning_controller: WarningTextController;
var isStoped : boolean;
function Start () {

}

function Update () {

}

function OnTriggerEnter(other : Collider) {
	if (other.tag != "CarTriggerDetector") return;
	if (this.tag == "StopSignSDA") {
//		Debug.Log("hit stop sign with: " + warning_controller.car.current_speed );
		if (warning_controller.car.current_speed > 2) {
			warning_controller.displayWarning = !warning_controller.displayWarning;
	//		Debug.Log("Hit the road : " + warning_controller.displayWarning);
			warning_controller.warning_content = "Stop sign in front, you should stop before turning";
		}
	}
	// if this script is attached to a stop sign instruction
	if (this.tag == "StopSignInst") {
		inst_controller.instruction_content = "Stop signs in front, you should stop behind the white line before turning";
	}
	isStoped = false;
}


function OnTriggerStay (other : Collider) {
	if (other.tag != "CarTriggerDetector") return;
    if (this.tag == "StopSignSDA" /* prob other.tag == "Player" */) {
    
    	if (warning_controller.car.current_speed < 2) {
    		Debug.Log("Stpopped");
    		isStoped = true;
    	}
    }
    // mark as stopped only when its speed down to less than 2 during driving through the area
}

function OnTriggerExit (other : Collider) {
	if (other.tag != "CarTriggerDetector") return;
    if (!isStoped && this.tag == "StopSignSDA") {
    	warning_controller.displayWarning = true;
//		Debug.Log("Hit the road : " + warning_controller.displayWarning);
		warning_controller.warning_content = "You should stop before turning when you see the stop sign.";
   	} 
   	isStoped = false;
}