const squareCode = function(message) {
  message = message.replaceAll(' ', '')
  let CharPerLine = 0;
  CharPerLine = Math.ceil(Math.sqrt(message.length));
  message = message.split('')
  let charByCol = [];
  for (j = 0; j < CharPerLine; j++){
   for (i = j; i < message.length; i += CharPerLine){
    charByCol += message[i];
  }
  charByCol += ' ';
}
 return charByCol;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
