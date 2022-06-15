const camelCase = function(input) {
  return input.replace(/(?<=[\s])./g, function(x){
    return x.toUpperCase();
  }).replace(/\s+/g, '');
};

  // Your code here
/*   const stringToArray = input.split('')
  let newSplitArr = [];
  console.log(stringToArray);
  for (i = 0; i < stringToArray.length; i++){
    if (stringToArray[i] === ' '){
      newSplitArr += stringToArray[i +1];
    }
  }
  console.log(newSplitArr); */
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));


/* function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

console.log(camelize("this is a string")); */