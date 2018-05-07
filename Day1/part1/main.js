var fs = require('fs');
var data = fs.readFileSync('input.txt', 'utf8').split(',');
let directions = [];
data.forEach(function(entry){
    entry = entry.trim();
    en = [entry.charAt(0), parseInt(entry.substring(1))];
    directions.push(en);
});
let xAxis = 0;
let yAxis = 0;
let currentDirection = 0;
directions.forEach(function(entry){
    if(entry[0] === 'R'){
        currentDirection += 1;
    }
    else{
        currentDirection -= 1;
    }
    if(currentDirection === 4){
        currentDirection = 0;
    }
    if(currentDirection === -1){
        currentDirection = 3;
    }
    switch(currentDirection){
        case 0:
            yAxis += entry[1];
            break;
        case 1:
            xAxis += entry[1];
            break;
        case 2:
            yAxis -= entry[1];
            break;
        case 3:
            xAxis -= entry[1];
            break;
    }
});

console.log(Math.abs(xAxis) + Math.abs(yAxis));
