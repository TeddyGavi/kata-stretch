const blocksAway = function(directions) {

  let directionFacing = [];
  const finalDirection = {
    east: 0,
    north: 0,
  };
  
  //split the array into numbers and strings in order to keep them seperate in my head
    const numArr = directions.filter((x) => typeof x === "number" )
    const directionArr = directions.filter((x) => typeof x === "string")
   
//if the first direction is right, the starting position is distinct and must be logged, 
//I then check left and right directions against the previous position and log "north, south, east or west" to a new array
//we can then use this new array at the same time to decide if we are +/- from the current position, this is referenced to the number array
  if (directions[0] === "right"){
    directionFacing.push("east");
    finalDirection.east += numArr[0];
    for (let i = 1; i < directionArr.length; i++){
      if (directionArr[i] === "right" && directionFacing[i -1] === "east"){
        directionFacing.push("south");
        finalDirection.north -= numArr[i];
      } else if (directionArr[i] === "left" && directionFacing[i -1] === "east"){
        directionFacing.push("north");
        finalDirection.north += numArr[i];
      } else if (directionArr[i] === "right" && directionFacing[i -1] === "north"){
        directionFacing.push("east");
        finalDirection.east += numArr[i];
      } else if (directionArr[i] === "left" && directionFacing[i -1] === "north"){
        directionFacing.push("west");
        finalDirection.east -= numArr[i];
      } else if (directionArr[i] === "right" && directionFacing[i -1] === "west") {
        directionFacing.push("north");
        finalDirection.north += numArr[i];
      } else if (directionArr[i] === "left" && directionFacing[i -1] === "west"){
        directionFacing.push("south");
        finalDirection.north -= numArr[i];
      } else if (directionArr[i] === "right" && directionFacing[i -1] === "south"){
        directionFacing.push("west")
        finalDirection.east -= numArr[i];
      } else if (directionArr[i] === "left" && directionFacing[i -1] === "south") {
        directionFacing.push("east");
        finalDirection.east += numArr[i];
      }
    }
  }

  if (directions[0] === "left"){
    directionFacing.push("north");
    finalDirection.north += numArr[0];
    for (let i = 1; i < directionArr.length; i++){
      if (directionArr[i] === "right" && directionFacing[i -1] === "east"){
        directionFacing.push("south");
        finalDirection.north -= numArr[i];
      } else if (directionArr[i] === "left" && directionFacing[i -1] === "east"){
        directionFacing.push("north");
        finalDirection.north += numArr[i];
      } else if (directionArr[i] === "right" && directionFacing[i -1] === "north"){
        directionFacing.push("east");
        finalDirection.east += numArr[i];
      } else if (directionArr[i] === "left" && directionFacing[i -1] === "north"){
        directionFacing.push("west");
        finalDirection.east -= numArr[i];
      } else if (directionArr[i] === "right" && directionFacing[i -1] === "west") {
        directionFacing.push("north");
        finalDirection.north += numArr[i];
      } else if (directionArr[i] === "left" && directionFacing[i -1] === "west"){
        directionFacing.push("south");
        finalDirection.north -= numArr[i];
      } else if (directionArr[i] === "right" && directionFacing[i -1] === "south"){
        directionFacing.push("west")
        finalDirection.east -= numArr[i];
      } else if (directionArr[i] === "left" && directionFacing[i -1] === "south") {
        directionFacing.push("east");
        finalDirection.east += numArr[i];
      }
    }
  }
return finalDirection; 
}


console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
