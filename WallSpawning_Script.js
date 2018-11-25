#pragma strict

var wall: Transform;

var maze = [
	[1,1,1,1,1,1,1,1,1],
	[1,0,1,0,0,0,0,0,1],
	[1,0,1,0,1,1,0,1,1],
	[1,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1]
];

function Start () {
	for(var i = 0; i < maze.length; ++i){
		for(var j = 0; j < maze[0].length; ++j){
			if(maze[i][j] == 1){
				Instantiate(wall, new Vector3(j,0,maze.length -i-1), Quaternion.identity);
			}
		}
	}
}

function FixedUpdate () {
	
}