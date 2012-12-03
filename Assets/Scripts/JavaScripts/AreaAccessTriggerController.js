#pragma strict

var warning_controller : WarningTextController;

private var enter_time: float;
function Start () {

}

function Update () {

}

function OnTriggerEnter(other : Collider) {
	if (other.tag == "PeripherialRoadBoundary") {
		enter_time = Time.time;
		warning_controller.displayWarning = !warning_controller.displayWarning;
//		Debug.Log("Hit the road : " + warning_controller.displayWarning);
		warning_controller.warning_content = "You are driving off of road, get back to the road! You lose:" + warning_controller.scoring.kOUTOFBOUNDARY + " points";
		warning_controller.scoring.driving_out_of_road();
	}
}

function OnTriggerExit (other : Collider) {
	if ((Time.time - enter_time) < 2.2) {
		warning_controller.displayWarning = !warning_controller.displayWarning;
	}
}