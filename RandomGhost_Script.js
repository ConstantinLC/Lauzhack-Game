#pragma strict

var maze = [
	[1,1,1,1,1,1,1,1,1],
	[1,0,1,0,0,0,0,0,1],
	[1,0,1,0,1,1,0,1,1],
	[1,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1]
];
var x : int = 1;
var y : int = 1;

var oneMovement : int = 20;
var oneMovementCounter = 0;
var direction = 0;

function Start () {
}

function FixedUpdate () {

	var directions = [0,0,0,0];
	if(oneMovementCounter == 0){
		for(var i = 0; i < 4; ++i){
			switch(i){
				case 0:
					if(maze[y-1][x] == 0){
						directions[i] = 1;
					}
					break;
				case 1:
					if(maze[y][x+1] == 0){
						directions[i] = 1;
					}
					break;
				case 2:
					if(maze[y+1][x] == 0){
						directions[i] = 1;
					}
					break;
				case 3:
					if(maze[y][x-1] == 0){
						directions[i] = 1;
					}
					break;
			}
		}

		var choice = Random.Range(0,3);
		direction = (direction+2)%4;
		for(var j = 0; j < 4; ++j){
			if(directions[choice] == 1 && choice != direction){
			direction = choice;
			break;
			} else{
				choice = (choice+1)%4;
			}
		}


		if(direction == 0){
			--y;
		}
		if(direction == 1){
			++x;
		}
		if(direction == 2){
			++y;
		}
		if(direction == 3){
			--x;
		}

		oneMovementCounter = oneMovement;
	
	} else{
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
		--oneMovementCounter;
	}
}