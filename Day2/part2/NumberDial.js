"use strict";
module.exports = class NumberDial{
    constructor(){
        this.currentNumber = [2,0];
        this.keys = [["D"], ["A", "B", "C"], [5,6,7,8,9], [2,3,4], [1]]
        var setSize = 5;
        for(var i=0; i<this.keys.length; i++){
            var j = this.keys[i].length;
            while(j < setSize){
                if((j+1)%2 == 0){
                    this.keys[i].push(null);
                }
                else{
                    this.keys[i].splice(0,0,null);
                }
                j+=1
            }
        }
    }

    move(direction){
        var move = [null,null];
        var applyMove = true;
        switch(direction){
            case 'U':
                move = [0,1];
                break;
            case 'D':
                move = [0,-1];
                break;
            case 'L':
                move = [1,-1];
                break;
            case 'R':
                move = [1,1]
                break
        }
        var possibLoc = this.currentNumber.slice();
        possibLoc[move[0]] += move[1];
        if(this.currentNumber[move[0]]+move[1] < 0 || this.currentNumber[move[0]]+move[1] > 4 ||
        this.keys[possibLoc[0]][possibLoc[1]] == null){
            applyMove = false;
        }
        else{
            this.currentNumber[move[0]] += move[1]
        }
    }
    getCurrentKey(){
        return this.keys[this.currentNumber[0]][this.currentNumber[1]];
    }
}