#pragma strict

var warning_controller : WarningTextController;
function Start () {

}

function Update () {

}

function OnTriggerEnter(other : Collider) {
	if (other.tag == "PeripherialRoadBoundary") {
		
		warning_controller.displayWarning = !warning_controller.displayWarning;
		Debug.Log("Hit the road : " + warning_controller.displayWarning);
		warning_controller.warning_content = "You are driving out of road, get back to the road!";
	}
}

function OnTriggerExit (other : Collider) {
	
}