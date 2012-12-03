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
//		if (warning_controller.car.current_speed > 2) {
//			warning_controller.displayWarning = !warning_controller.displayWarning;
//	//		Debug.Log("Hit the road : " + warning_controller.displayWarning);
//			warning_controller.warning_content = "When you see stop sign, you should stop before turning. You lose:" + inst_controller.scoring.kOUTOFBOUNDARY + " point"";
//			inst_controller.scoring.failed_to_stop();
//		}
	}
	// if this script is attached to a stop sign instruction
	if (this.tag == "StopSignInst") {
		inst_controller.instruction_content = "Stop signs in front, you should stop behind the white line before turning left";
	}
	
	if (this.tag == "GetIntoCourseInst") {
		inst_controller.instruction_content = "Now turn left at the first cross in front of you to get into the course";
	}
	
	if (this.tag == "EndofSimulationInst") {
		var score = inst_controller.scoring.get_total_score();
		if (score < 70) {
			inst_controller.instruction_content = "Your score is " + score + ". You should get at lease 70 for passing the test. Driving around to practice more. Thank you";
		} else {
			inst_controller.instruction_content = "Congratulations, your score is " + score + ". You should pass the real exam. Driving around to enjoy yourself. Thank you";
		}
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
			warning_controller.displayWarning = !warning_controller.displayWarning;
	//		Debug.Log("Hit the road : " + warning_controller.displayWarning);
			warning_controller.warning_content = "When you see stop sign, you should stop before turning. You lose:" + inst_controller.scoring.kOUTOFBOUNDARY + " point";
			inst_controller.scoring.failed_to_stop();
   	} 
   	isStoped = false;
}