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

}