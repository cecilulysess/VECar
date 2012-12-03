using UnityEngine;
using System.Collections;

public class BoundaryColliderBehavior : MonoBehaviour {
	private GameObject boundary;
	private bool showOutofBoundaryWarning;
	
	// Use this for initialization
	void Start () {
		showOutofBoundaryWarning = false;
	}
	
	// Update is called once per frame
	void Update () {
	
	}
	
	void OnTriggerEnter(Collider other) {
		if (other.tag == "PeripherialRoadBoundary") {
//        	Debug.Log("Hitting the boundary: " + other + " hit " + other.tag);
			showOutofBoundaryWarning = true;
		}
    }
	void OnGUI () {
//		GUI.Button (new Rect (0, 0, 100, 20), "Click Me");
//    	GUI.Button (new Rect (0, 30, 100, 20),new  GUIContent ("Click Me"));
		//back ground
//		GUI.Box(new Rect(Screen.width/2 - 250, 10, 500, 80), "Instructions");
//		GUI.Label (new Rect (0,0,100,50), 
//			"This is the text string for a Label Control");
//			
//			if (showOutofBoundaryWarning && GUI.Button (new Rect (10,10,200,20), "Meet the flashing button")) {
//				print ("You clicked me!");
//			}
		
	}
}