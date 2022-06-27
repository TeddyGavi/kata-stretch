const makeCase = function(input, caseType) {
  let caseFuncArray = [];
  camelCase = () => {
    return input.replace(/(?<=[\s])./g, function(x){
      return x.toUpperCase();
    }).replace(/\s/g, '');
  };
  pascal = () => { 
    return input.replace(/\b(\w)/g, function(x){
      return x.toUpperCase();
    }).replace(/\s/g, '')
  }
  snake = () => {
    return input.replace(/\s/g, "_");
  }
  kebab = () => { 
    return input.replace(/\s/g, "-");
  }
  title = () => {
    return input.replace(/\b(\w)/g, function(x){
      return x.toUpperCase()
     })
  }
  vowel = () => {
    return input.replace(/([aeiou])/g, function(x){
      return x.toUpperCase();
    });
  }
  consonant = () => {
    return input.replace(/([bcdfghjklmnpqrstvwxyz])/g, function(x){
      return x.toUpperCase();
    })
  }
//Upper
  upperSnake = () => {
    return input.replace(/\S/g, function(x) {
      return x.toUpperCase();
    }).replace(/\s/g, "_");
  }
caseFuncArray = [camelCase, pascal, snake, kebab, title, vowel, consonant, upperSnake]

for (let i = 0; i < caseFuncArray.length; i++){
  console.log(caseFuncArray[i])
} 
 
switch (caseType){
  case 'camel' : return camelCase(input); break;
  case 'pascal' : return  pascal(input) ; break ;
  case 'snake' : return snake(input) ; break ;
  case 'kebab' : return kebab(input) ; break ;
  case 'title' : return title(input) ; break ; 
  case 'vowel' : return vowel(input) ; break;
  case 'consonant' : return consonant(input) ; break ;
}
if (caseType[0] === 'upper' && caseType[1] === 'snake'){
  return upperSnake(input);
}
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
