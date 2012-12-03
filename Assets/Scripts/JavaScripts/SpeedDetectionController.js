#pragma strict
var inst_controller: InstructionTextController;
function Start () {

}

function Update () {

}

function OnTriggerEnter(other : Collider) {
	if (other.tag == "StopSignSDA") {
//		if (warning_controller.car.current_speed > 2) {
//			warning_controller.displayWarning = !warning_controller.displayWarning;
//	//		Debug.Log("Hit the road : " + warning_controller.displayWarning);
//			warning_controller.warning_content = "Stop sign in front, you should stop before turning";
//		}
	}
	if (other.tag == "StopSignInst") {
	
	}
}
