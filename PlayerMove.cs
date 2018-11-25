using UnityEngine;
using System.Collections;
using UnityEngine.Networking;
using UnityEngine.UI;

public class PlayerMove : NetworkBehaviour {

	public void Start(){
		Random.InitState (42989);
	}

	private int counter = 500;
	private bool ghostSpawn = false;
	public GameObject ghost;

	public override void OnStartLocalPlayer(){
		var cam = GameObject.Find ("Main Camera");
		cam.transform.SetParent(this.transform);
		if (!isServer) {
			transform.position = new Vector3 (5, 10, 5);
			transform.Rotate (90, 0, 0);
			GameObject ghost1 = (GameObject)Instantiate (ghost, new Vector3 (1, 0, 3), Quaternion.identity);
			CmdSpawnGhost1 (new Vector3(1, 0, 3));
			ghostSpawn = true;
		} else {
			transform.position = new Vector3 (6, 0, -2);
		}
	}

	[Command]
	public void CmdSpawnGhost1(Vector3 vect) {
		GameObject ghost1 = (GameObject)Instantiate (ghost, vect, Quaternion.identity);
		ghostSpawn = true;
	}

	public void FixedUpdate(){
		if (ghostSpawn){
			if (counter > 0) {
				counter--;
			} else {
				int chance = Random.Range (0, 3);
				if (chance < 3) {
					var Vector = new Vector3 (1, 0, 3);
					GameObject ghost1 = (GameObject)Instantiate (ghost, Vector, Quaternion.identity);
				}
				counter = 500;
			}
		}
	}
}