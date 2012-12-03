#pragma strict

var driving_score = 30;
var normal_parking_score = 0; // add 30 when complete
var parallel_parking_score = 0; // add 40 when complete

// score deducted when specific behavior happend
// driving out of road
var kOUTOFBOUNDARY = 2;
var kHITOBSTACLE = 2;
var kNOTSTOPWHENTURNING = 10;

var kHITPARKINGCURB = 5;
var kHITPARKINGOBSTACLE = 10;
var kHITBITOBSTACLE = 5;

// parking type
var kNORMALPARKING : int = 1;
var kPARALLELPARKING: int = 2;
function Start () {

}

function Update () {

}

function driving_out_of_road(){
	this.driving_score -= kOUTOFBOUNDARY;
}

function hit_normal_obstacle() {
	this.driving_score -= kHITOBSTACLE;
}

function failed_to_stop(){
	this.driving_score -= kNOTSTOPWHENTURNING;
}

function hit_parking_curb(type: int){
	if (type == kNORMALPARKING) {
		normal_parking_score -= kHITPARKINGCURB;
	} 
	if (type == kPARALLELPARKING) {
		parallel_parking_score -= kHITPARKINGCURB;
	}
}

function hit_parking_obstacle(type: int){
	if (type == kNORMALPARKING) {
		normal_parking_score -= kHITBITOBSTACLE;
		if (normal_parking_score < 0 ) normal_parking_score = 0;
	} 
	if (type == kPARALLELPARKING) {
		parallel_parking_score -= kHITBITOBSTACLE;
		if (parallel_parking_score < 0) parallel_parking_score = 0;
	}
}

function success_parking(type: int): int{
	if (type == kNORMALPARKING) {
		normal_parking_score += 30;
		if (normal_parking_score < 0 ) normal_parking_score = 0;
		return normal_parking_score;
	} 
	if (type == kPARALLELPARKING) {
		parallel_parking_score += 40;
		if (parallel_parking_score < 0) parallel_parking_score = 0;
		return parallel_parking_score;
	}
	
	return -1;
}

function get_total_score() : int{
	return driving_score + normal_parking_score + parallel_parking_score;
}