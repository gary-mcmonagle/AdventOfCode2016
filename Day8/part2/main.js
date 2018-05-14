let LittleScreen = require('./LittleScreen');
let fs = require('fs');
let ins = fs.readFileSync('input.txt').toString().split("\n");
let myScreen = new LittleScreen(50)
for(let i = 0; i<ins.length; i++){
    ins[i] = ins[i].trim();
}
for(let i = 0; i<ins.length; i++){
    let instruction = ins[i].split(" ");
    if(instruction[0] == "rect"){
        myScreen.turnOnRectangle(instruction[1].split("x")[0], instruction[1].split("x")[1])
    }
    else{
        if(instruction[1] == "column"){
            myScreen.rotateColumn(parseInt(instruction[2].split("=")[1]), parseInt(instruction[4]));
        }
        else{
            myScreen.rotateRow(parseInt(instruction[2].split("=")[1]), parseInt(instruction[4]));
        }
    }
}

console.log(myScreen.getOnLights());
var stream = fs.createWriteStream("my_file.csv");
stream.once('open', function(fd) {
  stream.write(myScreen.outCSV());
  stream.end();
});



//console.log(ins);
// let myScreen = new LittleScreen(50);
// myScreen.turnOnRectangle(2,2);
// //myScreen.rotateRow(0,1);
// myScreen.rotateColumn(0,3);
// console.log(myScreen.display);