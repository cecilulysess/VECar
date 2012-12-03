#pragma strict

var other : Car;
function Start () {
	other = GameObject.FindGameObjectWithTag("Player").GetComponent(Car);
}

function Update () {
	var speed = other.current_speed;
	guiText.text = "" + Mathf.Round(speed * 10)/ 10;
}