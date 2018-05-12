var md5 = require('md5');
let puzzleInput = "reyedfim"
let decryted = "";
let pass = []
function getPassword(passArray){
    let retString = "________";
    for(let i = 0; i<passArray.length; i++){
        retString = retString.substr(0, passArray[i][1]) + passArray[i][0] + retString.substr(passArray[i][1] + 1);
    }
    return retString;
}

i = 0;
while(pass.length<8){
    if(md5(puzzleInput+i.toString()).startsWith("00000")){
        let num = parseInt(md5(puzzleInput+i.toString()).charAt(5))
        let val = md5(puzzleInput+i.toString()).charAt(6)
        console.log("num: " + num);
        console.log("val: "+ val);
        if(!Number.isNaN(num)){
            if(num < 8){
                let toAdd = true;
                for(let i = 0; i<pass.length; i++){
                    if(pass[i][1] == num){
                        toAdd = false;
                    }
                }
                if(toAdd){
                    pass.push([val, num]);
                }
                console.log(getPassword(pass));
            }
        }
    }
    if(i % 1000000 == 0){
        console.log(i);
        //console.log(getPassword(pass));
    }
    i+=1;
}

console.log(getPassword(pass));
//console.log(decryted);

