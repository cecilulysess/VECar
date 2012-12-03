#pragma strict

// useless, it assignd value after Start() procedure
var player : GameObject;
var car : Car;
var scoring : ScoringController;
var displayWarning: boolean;
public var warning_content : String;

function Start () {
	car = GameObject.FindGameObjectWithTag("Player").GetComponent(Car);
	scoring = GameObject.FindGameObjectWithTag("Player").GetComponent(ScoringController);
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