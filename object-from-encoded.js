const urlDecode = function(text) {

  let finalDecoded = {};
  textCopy = text.replaceAll(/(%20)/g, ' ');
  textCopy = textCopy.split(/[\=\&]/g);
  for( let i = 0; i < textCopy.length; i+=2){
    finalDecoded[textCopy[i]] = textCopy[i +1];
  }
return finalDecoded;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
