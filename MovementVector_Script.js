#pragma strict

var speed: float = 2.0;
private var moveDirection : Vector3 = Vector3.zero;

function Start () {

}

function FixedUpdate () {

	var controller : CharacterController = GetComponent.<CharacterController>();
	moveDirection = Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
	moveDirection = transform.GetChild(0).TransformDirection(moveDirection);
	moveDirection.y = 0;
	moveDirection.Normalize();
	moveDirection *= speed;

	controller.Move(moveDirection);

}


