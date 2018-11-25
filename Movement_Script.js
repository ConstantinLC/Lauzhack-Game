#pragma strict

function Start () {

}

function FixedUpdate () {
	var offset = Mathf.Round(transform.eulerAngles.y/90);
	Debug.Log(transform.rotation.y + " " + offset);
	var direction = -10;
	if(Input.GetKey("up")){
		direction = 0.0;
	}
	if(Input.GetKey("right")){
		direction = 1.0;
	}
	if(Input.GetKey("down")){
		direction = 2.0;
	}
	if(Input.GetKey("left")){
		direction = 3.0;
	}
	direction += offset%4;
	if(direction>=0){
		direction = direction%4;
	}

	Debug.Log(direction);

	if(direction == 0){
		transform.position.z += 0.05;
	}

	if(direction == 1){
		transform.position.x += 0.05;
	}
	if(direction == 2){
		transform.position.z -= 0.05;
	}
	if(direction == 3){
		transform.position.x -= 0.05;
	}
/*	var xInput = Input.GetAxis("Horizontal");
	var zInput = Input.GetAxis("Vertical");
	transform.Translate(xInput*0.2, 0, zInput*0.2, Space.World);*/
}