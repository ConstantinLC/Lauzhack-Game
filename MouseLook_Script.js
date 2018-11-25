#pragma strict

function Start () {
	
}

function FixedUpdate () {
	var zInput = Input.GetAxis("Mouse Y");
	var xInput = Input.GetAxis("Mouse X");

	transform.GetChild(0).Rotate(0,xInput,0,Space.World);
	transform.GetChild(0).Rotate(-zInput,0,0);
}