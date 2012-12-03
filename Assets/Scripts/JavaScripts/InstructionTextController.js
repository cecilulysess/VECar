#pragma strict

var player : GameObject;
var car : Car;
var scoring : ScoringController;
public var instruction_content : String;

function Start () {
	car = GameObject.FindGameObjectWithTag("Player").GetComponent(Car);
	scoring = GameObject.FindGameObjectWithTag("Player").GetComponent(ScoringController);
	instruction_content = "Welcome to the simulation, please drive along this road until you see the next instruction. Speed limitation: 50mph";
}

function Update () {
	guiText.text = "" + instruction_content;
}

