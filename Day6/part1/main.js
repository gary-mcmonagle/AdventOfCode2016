let fs = require('fs')
let messages = fs.readFileSync('input.txt').toString().split("\n");
for(let i = 0; i<messages.length; i++){
    messages[i] = messages[i].trim();
}
function getLeastCommonLetter(inputString){
    let leastCommon = [null, inputString.length+1];
    for(i = 0; i < inputString.length; i++){
        let count = inputString.match(new RegExp(inputString.charAt(i), "g" || [])).length;
        if(count < leastCommon[1]){
            leastCommon = [inputString.charAt(i), count];
        }
    }
    return leastCommon[0];
}
let phrase = ""
for(let i = 0; i<8; i++){
    let colStr = ""
    for(let j = 0; j<messages.length; j++){
        colStr += messages[j].charAt(i);
    }
    phrase += getLeastCommonLetter(colStr);
}
console.log(phrase);