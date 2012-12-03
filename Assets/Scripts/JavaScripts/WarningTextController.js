#pragma strict

var player : GameObject;
var car : Car;
var displayWarning: boolean;
public var warning_content : String;

function Start () {
	car = player.GetComponent(Car);
	displayWarning = false;
}

function Update () {
	if (displayWarning) {
	//	Debug.Log("\tdisplayed:" + displayWarning);
		guiText.text = "Warning: " + warning_content;
		guiText.material.color = Color.red;
	} else {
		guiText.text = "";
	}
}