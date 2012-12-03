#pragma strict
var warning_controller : WarningTextController;
var instruction_controller : InstructionTextController;
function Start () {

}

function Update () {

}

function OnCollisionEnter(collision : Collision) {
	var scoring = warning_controller.scoring;
    if (collision.collider.tag != "CarTriggerDetector") return;
    if (this.tag == "NParkingObstacle"){
    	warning_controller.displayWarning = true;
//		Debug.Log("Hit the road : " + warning_controller.displayWarning);
		warning_controller.warning_content = "Opps, you hit the front obstacle you shold brake quicker. You lose:" + scoring.kHITPARKINGOBSTACLE + " points";
		warning_controller.scoring.hit_parking_obstacle(warning_controller.scoring.kNORMALPARKING);
    }
    if (this.tag == "NParkingEdgeL"){
    	warning_controller.displayWarning = true;
//		Debug.Log("Hit the road : " + warning_controller.displayWarning);
		warning_controller.warning_content = "Opps, you hit the left curb, try turning at a bit quicker speed or larger turn. You lose:" + scoring.kHITPARKINGCURB + " points";
		warning_controller.scoring.hit_parking_curb(warning_controller.scoring.kNORMALPARKING);
    }
    if (this.tag == "NParkingEdgeR") {
    	warning_controller.displayWarning = true;
//		Debug.Log("Hit the road : " + warning_controller.displayWarning);
		warning_controller.warning_content = "Opps, you hit the right curb, try turning at lower speed or small turn. You lose:" + scoring.kHITPARKINGCURB + " points";
		warning_controller.scoring.hit_parking_curb(warning_controller.scoring.kNORMALPARKING);
    }
    if (this.tag == "PParkingEdge") {
    	warning_controller.displayWarning = true;
//		Debug.Log("Hit the road : " + warning_controller.displayWarning);
		warning_controller.warning_content = "Opps, you hit the curb, try steering more accurate. You lose:" + scoring.kHITPARKINGCURB + " points";
		warning_controller.scoring.hit_parking_curb(warning_controller.scoring.kPARALLELPARKING);
    }
    if (this.tag == "PParkingObstacleB") {
    	warning_controller.displayWarning = true;
//		Debug.Log("Hit the road : " + warning_controller.displayWarning);
		warning_controller.warning_content = "Opps, you hit the obstacle in your back, try adjusting your location. You lose:" + scoring.kHITPARKINGOBSTACLE + " points";
		warning_controller.scoring.hit_parking_curb(warning_controller.scoring.kPARALLELPARKING);
    }
    if (this.tag == "PParkingObstacleF") {
    	warning_controller.displayWarning = true;
//		Debug.Log("Hit the road : " + warning_controller.displayWarning);
		warning_controller.warning_content = "Opps, you hit the obstacle in front of you, try accelrate slower. You lose:" + scoring.kHITPARKINGOBSTACLE + " points";
		warning_controller.scoring.hit_parking_curb(warning_controller.scoring.kPARALLELPARKING);
    }
    
    if (this.tag == "PParkingObstacleCar") {
    	warning_controller.displayWarning = true;
//		Debug.Log("Hit the road : " + warning_controller.displayWarning);
		warning_controller.warning_content = "You hit other car! It is expensive! You lose:" + scoring.kHITBITOBSTACLE + " points";
		warning_controller.scoring.hit_parking_obstacle(warning_controller.scoring.kPARALLELPARKING);
    }
    
}
