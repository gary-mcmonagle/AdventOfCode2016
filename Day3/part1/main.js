let fs = require('fs')
let possibleTriangles = fs.readFileSync('input.txt').toString().split("\n");
function isTriangle(pointArray){
    console.log(pointArray);
    return (pointArray[0] < (pointArray[1] + pointArray[2]))
    && (pointArray[1] < (pointArray[0] + pointArray[2]))
    && (pointArray[2] < (pointArray[0] + pointArray[1]));
}
let count = 0;
    for(let i = 0; i<possibleTriangles.length; i+=3){
        possibleTriangles[i] = possibleTriangles[i].trim().split("  ").map(Number);
        possibleTriangles[i+1] = possibleTriangles[i+1].trim().split("  ").map(Number);
        possibleTriangles[i+2] = possibleTriangles[i+2].trim().split("  ").map(Number);
        if(isTriangle([possibleTriangles[i+0][0], possibleTriangles[i+1][0], possibleTriangles[i+2][0]])){
            count++;
        }
        if(isTriangle([possibleTriangles[i+0][1], possibleTriangles[i+1][1], possibleTriangles[i+2][1]])){
            count++;
        }
        if(isTriangle([possibleTriangles[i+0][2], possibleTriangles[i+1][2], possibleTriangles[i+2][2]])){
            count++;
        }
    }
console.log(count);