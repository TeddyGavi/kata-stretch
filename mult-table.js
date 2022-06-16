const multiplicationTable = function(maxValue) {
  let tableRow = [];
  let tableCol = [];
  let oneTableLine = "";
  let totalTable = []
  //create an array to use as the initial multiplication values
  for (let i = 1; i <= maxValue; i++){
   tableRow.push(i);
   tableCol.push(i);
  }
  //use a nested loop to get the results of the table and push each row into a seperate array.
   for (j = 0; j < tableRow.length; j++){
    let rowArr = [];
    for(k = 0; k < tableCol.length; k++){
     rowArr.push(tableRow[j] * tableCol[k]);
    }
    //after each row is complete create an array of arrays then join each array into a newline string
    totalTable.push(rowArr);
    oneTableLine = totalTable.join(' \n')
  } 
  //remove commas and return
  return oneTableLine.replace(/,/g, ' ');
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
