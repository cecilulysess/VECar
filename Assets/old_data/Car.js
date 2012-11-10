#pragma strict

var CenterOfMass : Transform;

var wheels : Transform[];

var maxTurn : int;
var v : float;
var h : float;
var throttleForce : float = 0;
var brakeForce : float = 0;
var factor : float = 1;

var dragMultiplier : Vector3 = new Vector3(2,5,1);

var topSpeed : float = 60;

var gears : int = 5;

var currentEnginePower : float = 0;

var steerAngle : float = 0;

var relativeVelocity : Vector3 = Vector3.zero;

function Start () {
	if(CenterOfMass != null){
		rigidbody.centerOfMass = CenterOfMass.localPosition;
	}

	topSpeed = topSpeed * 0.44704;

}

function Update () {
	//relativeVelocity = transform.InverseTransformDirection(rigidbody.velocity);

	v = Input.GetAxis("Vertical");
	h = Input.GetAxis("Horizontal");

}

function FixedUpdate () {
	relativeVelocity = transform.InverseTransformDirection(rigidbody.velocity);

	addDrag(relativeVelocity);

	changeSteering(relativeVelocity);

	addPower(relativeVelocity);

}

function addDrag (relativeVelocity : Vector3) {
	var relativeDrag : Vector3 = new Vector3(	-relativeVelocity.x * Mathf.Abs(relativeVelocity.x), 
												-relativeVelocity.y * Mathf.Abs(relativeVelocity.y), 
												-relativeVelocity.z * Mathf.Abs(relativeVelocity.z) );

	var drag = Vector3.Scale(dragMultiplier, relativeDrag);

	drag.x *= topSpeed / relativeVelocity.magnitude;

	if(Mathf.Abs(relativeVelocity.x) < 5)
		drag.x = -relativeVelocity.x * dragMultiplier.x;


	rigidbody.AddForce(transform.TransformDirection(drag) * rigidbody.mass * Time.deltaTime);
}

function changeSteering (relativeVelocity : Vector3) {
	var FL : WheelCollider = wheels[0].gameObject.GetComponent(WheelCollider);
	var FR : WheelCollider = wheels[1].gameObject.GetComponent(WheelCollider);

	var speedAdjust : float = 1;

	if(relativeVelocity.z > 0){
		speedAdjust = inverseSpeed(relativeVelocity);
	}

	steerAngle = (h * maxTurn * speedAdjust);
	steerAngle = Mathf.Clamp(steerAngle,(maxTurn * -1), maxTurn);

	FL.steerAngle = steerAngle;
	FR.steerAngle = steerAngle;
}

function addPower (relativeVelocity : Vector3) {
	throttleForce = 0;
	brakeForce = 0;

	if(v == 0){
		currentEnginePower -= Time.deltaTime * 200;
	}
	else if(Mathf.Sign(v) == Mathf.Sign(relativeVelocity.z)){
		currentEnginePower += Time.deltaTime * 300 * speedFactor(relativeVelocity);
	}
	else{
		currentEnginePower -= Time.deltaTime * 300;
	}

	if(Mathf.Sign(v) > 0){
		currentEnginePower = Mathf.Clamp(currentEnginePower,0,200);
	}
	else{
		currentEnginePower = Mathf.Clamp(currentEnginePower,0,50);
	}

	if(Mathf.Sign(v) == Mathf.Sign(relativeVelocity.z)){
		throttleForce = Mathf.Sign(v) * currentEnginePower * rigidbody.mass;
	}
	else{
		brakeForce = Mathf.Sign(v) * rigidbody.mass * 60;
	}

	rigidbody.AddForce(transform.forward * Time.deltaTime * (throttleForce + brakeForce));
}

function inverseSpeed(relativeVelocity : Vector3) : float{
	return (2/(relativeVelocity.z));
}

function speedFactor(relativeVelocity : Vector3) : float{
	factor = 1;

	if(Mathf.Sign(relativeVelocity.z) > 0){ 
		if(relativeVelocity.z < 3){
			factor += (3/relativeVelocity.z);
		}
		else if(relativeVelocity.z > 6){
			factor -= (1-(6/relativeVelocity.z));
			factor = Mathf.Clamp(factor,0.5,1);
		}
	}

	return factor;
}