#pragma strict

var player : GameObject;
var car : Car;
public var instruction_content : String;

function Start () {
	car = player.GetComponent(Car);
	instruction_content = "Welcom to this simulation, please driving along the this road until you see the next instruction. Speed limitation: 50mph";
}

function Update () {
	guiText.text = "" + instruction_content;
}