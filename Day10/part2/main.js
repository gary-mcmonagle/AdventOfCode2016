var fs = require('fs'),
Bot = require('./Bot'),
Factory = require('./Factory');
let bots = [];
let ins = fs.readFileSync('input.txt').toString().split("\n");
for(let i = 0; i<ins.length; i++){
    ins[i] = ins[i].trim();
}
let myFactory = new Factory(ins);
while(!myFactory.hasExecutedAll()){
    myFactory.executeNextInstruction();
}
console.log(myFactory.outputs);