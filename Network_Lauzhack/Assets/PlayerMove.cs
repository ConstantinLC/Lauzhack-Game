using UnityEngine;
using System.Collections;
using UnityEngine.Networking;

public class PlayerMove : NetworkBehaviour {
	
	// Update is called once per frame
	void FixedUpdate () {
		if (!isLocalPlayer)
			return;
		if (!isServer)
			return;
		
		var xPos = Input.GetAxis ("Horizontal") * 0.1f;
		var yPos = Input.GetAxis ("Vertical") * 0.1f;

		transform.Translate(xPos, 0, yPos);
	}

	public override void OnStartLocalPlayer(){
		gameObject.AddComponent <Camera>();
		gameObject.GetComponent <Camera> ().tag = "MainCamera";
		if (isServer) {			
			GetComponent<MeshRenderer> ().material.color = Color.red;
		}
		if (!isServer) {
			GetComponent<MeshRenderer> ().material.color = Color.black;
			transform.position = new Vector3 (0, 10, 0);
			transform.Rotate (90, 0, 0);	
		}
	}
}