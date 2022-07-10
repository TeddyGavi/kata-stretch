/* let whiteQueen = [1, 5];
let blackQueen = [5, 0]; */

let whiteQueen = [0, 0];
let blackQueen = [6, 6];
 

const generateBoard = (whiteQueen, blackQueen) => {
  /* whiteQueen = [0, 5];
   blackQueen = [5, 0];

  for ( j = 0; j < 8; j++){
    chessBoardRow.push(0)
   for (i = 0; i < 8; i ++){
    } 
    chessBoardCol.push(chessBoardRow)
  }
 */

  let chessBoardCol = [];
  let chessBoardRow = [];
  for (let i = 0; i < 8; i ++){
    chessBoardRow = [];
    for (let j = 0; j < 8; j ++){
        if((whiteQueen[0] === i && whiteQueen[1] === j) || (blackQueen[0] === i && blackQueen[1] === j)){
          chessBoardRow.push(1);
        } 
        else {chessBoardRow.push(0)}
      }
      chessBoardCol.push(chessBoardRow);
    }
  return chessBoardCol;
}

const queenThreat = () => {
  let result = "false";
  if ((whiteQueen[0] === blackQueen[0]) || (whiteQueen[1] === blackQueen[1]) || Math.abs(whiteQueen[0] - blackQueen[0]) === Math.abs(whiteQueen[1] - blackQueen[1])){
     result = "true";
  }
  return result;
}

let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));