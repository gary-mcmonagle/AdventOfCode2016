"use strict";
module.exports = class NumberDial{
    constructor(){
        this.currentNumber = [1,1];
        this.keys = [[7,8,9],[4,5,6],[1,2,3]];
    }
    enterKey(keyPressed){
        switch(keyPressed){
            case 'U':
                this.currentNumber[0]+=1;
                break;
            case 'D':
                this.currentNumber[0]-=1;
                break;
            case 'R':
                this.currentNumber[1]+=1;
                break;
            case 'L':
                this.currentNumber[1]-=1;
                break;
        }
        if(this.currentNumber[0] > 2){
            this.currentNumber[0] = 2;
        }
        if(this.currentNumber[1] > 2){
            this.currentNumber[1] = 2;
        }
        if(this.currentNumber[0] < 0){
            this.currentNumber[0] = 0;
        }
        if(this.currentNumber[1] < 0){
            this.currentNumber[1] = 0;
        }
    }
    getCurrentKey(){
        return this.keys[this.currentNumber[0]][this.currentNumber[1]];
    }

}