const calculateChange = function(total, cash) {
  // Your code here
  let totalChange = cash - total;
  let rem;
  const change = {};
  let changeName = ['twentyDollar', 'tenDollar', 'fiveDollar', 'twoDollar', 'oneDollar', 'quarter', 'dime', 'nickel', 'penny',];
  let changeValue = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
  for (let i = 0; i < changeValue.length; i++){
    rem = Math.floor(totalChange / changeValue[i])
    if (rem > 0){
      change[changeName[i]] = rem;
      totalChange = totalChange % changeValue[i];
    }
  }

return change;

};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
