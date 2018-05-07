var fs = require('fs');
var data = fs.readFileSync('input.txt', 'utf8').split(',');
var directions = []
data.forEach(function(entry){
    entry = entry.trim();
    en = [entry.charAt(0), parseInt(entry.substring(1))];
    directions.push(en);
});
let xAxis = 0;
let yAxis = 0;
let currentDirection = 0;
let visitedLocations = []
let beenFound = false;
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
    let i = 0; 
    while(i < entry[1]){
        switch(currentDirection){
            case 0:
                yAxis += 1;
                break;
            case 1:
                xAxis += 1;
                break;
            case 2:
                yAxis -= 1;
                break;
            case 3:
                xAxis -= 1;
                break;
        }
        visitedLocations.forEach(function(seenLocation){
            if(yAxis == seenLocation[0] && xAxis == seenLocation[1]){
                console.log(Math.abs(xAxis) + Math.abs(yAxis));
                process.exit();
            }
        })
        visitedLocations.push([yAxis, xAxis]);
        i+=1;
    }
});

console.log(Math.abs(xAxis) + Math.abs(yAxis));
