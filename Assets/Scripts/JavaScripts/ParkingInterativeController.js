#pragma strict
var warning_controller : WarningTextController;
var instruction_controller : InstructionTextController;

function Start () {

}

function Update () {

}

function OnCollisionEnter(collision : Collision) {
    // Debug-draw all contact points and normals
    for (var contact : ContactPoint in collision.contacts)
        Debug.DrawRay(contact.point, contact.normal, Color.white);
    
    
}
