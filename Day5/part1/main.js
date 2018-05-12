var md5 = require('md5');
let puzzleInput = "reyedfim"
let decryted = "";
i = 0;
while(decryted.length<8){
    if(md5(puzzleInput+i.toString()).startsWith("00000")){
        decryted += md5(puzzleInput+i.toString()).charAt(5);
        console.log(decryted);
    }
    if(i % 100000 == 0){
        console.log(i);
    }
    i+=1;
    //puzzleInput = md5(puzzleInput+i.toString());
}
console.log(decryted);

