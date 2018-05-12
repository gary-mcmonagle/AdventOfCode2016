let fs = require('fs')
let rooms = fs.readFileSync('input.txt').toString().split("\n");
function getMostCommonLetters(inputString, noOfLetters){
    let letArr = []
    let seenChars = [];
    for(let i = 0; i<inputString.length; i++){
        if(seenChars.indexOf(inputString.charAt(i)) == -1){
            seenChars.push(inputString.charAt(i));
            letArr.push([inputString.charAt(i),inputString.match(new RegExp(inputString.charAt(i), "g" || [])).length]);
        }
    }
    letArr.sort(function(a, b){
        if(a[1] != b[1]){
            return b[1] - a[1];
        }
        else{
            if(a[0] < b[0]){
                return -1;
            }
            else{
                return 1;
            }
        }
    });
    let retStr = "";
    for(let i = 0; i<noOfLetters; i++){
        retStr += letArr[i][0];
    }
    return retStr;
}

let sum = 0;
for (i = 0; i<rooms.length; i++){
    let checkSplit = rooms[i].trim().split("[");
    let checkSum = checkSplit[1].substring(0,checkSplit[1].length-1);
    let letterSplit = checkSplit[0].split("-");
    let letters = ""
    for(let j = 0; j<letterSplit.length-1; j++){
        letters += letterSplit[j];
    }
    let compStr = getMostCommonLetters(letters, 5)
    if(compStr == checkSum){
        sum += parseInt(letterSplit[letterSplit.length-1]);
    }
}
console.log(sum);
