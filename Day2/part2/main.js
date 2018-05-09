var fs = require('fs'),
NumberDial = require('./NumberDial')
readline = require('readline');
var array = fs.readFileSync('input.txt').toString().split("\n");
let myDial = new NumberDial();
for(var i = 0; i<array.length; i++){
    for(var j=0; j<array[i].length; j++){
        myDial.move(array[i].charAt(j));
    }
    console.log(myDial.getCurrentKey());
}