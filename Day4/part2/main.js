let fs = require('fs')
let rooms = fs.readFileSync('input.txt').toString().split("\n");
function nextChar(c) {
    if(c == "z"){
        return "a";
    }
    return String.fromCharCode(c.charCodeAt(0) + 1);
}
let sum = 0;
function getRealName(encrytedName, sectordId){
    for(let g = 0; g < sectordId; g++){
        for(let i = 0; i<encrytedName.length; i++){
            if(encrytedName.charAt(i) == "-" || encrytedName.charAt(i) == " "){
                encrytedName =  encrytedName.substring(0, i) + " "
                + encrytedName.substring(i + 1);
            }
            else{
                encrytedName =  encrytedName.substring(0, i) + nextChar(encrytedName.charAt(i)).toLowerCase()
                + encrytedName.substring(i + 1);
            }
        }
    }
    return encrytedName
}
for (i = 0; i<rooms.length; i++){
    let checkSplit = rooms[i].trim().split("[");
    let checkSum = checkSplit[1].substring(0,checkSplit[1].length-1);
    let letterSplit = checkSplit[0].split("-");
    let letters = ""
    for(let j = 0; j<letterSplit.length-1; j++){
        letters += letterSplit[j];
        if(j != letterSplit.length-2){
            letters += "-"
        }
    }
    //let ans = getRealName(letters, parseInt(letterSplit[letterSplit.length-1]))
    if(getRealName(letters, parseInt(letterSplit[letterSplit.length-1])).match(/northpole/g) ){
        console.log(letterSplit[letterSplit.length-1])
    }
}