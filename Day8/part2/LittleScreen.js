"use strict";
const toCSV = require('array-to-csv');
module.exports = class LittleScreen{
    constructor(size){
        this.display = [];
        for(let i = 0; i < size; i++){
            let row = []
            for(let j = 0; j< size; j++){
                row.push(0);
            }
            this.display.push(row);
        }
    }

    get display(){
        return this._display;
    }

    set display(val){
        this._display = val;
    }

    turnOnRectangle(col, row){
        for(let i = 0; i<row; i++){
            for(let j = 0; j<col; j++){
                this.display[i][j] = 1;
            }
        }
    }
    outCSV(){
        return toCSV(this.display.reverse());
    }


    rotateRow(targetRow, value){
        for(let i = 0; i<value; i++){
            this.display[targetRow].splice(0,0,this.display[targetRow].pop());
        }
    }

    rotateColumn(targetColumn, value){
        for(let i = 0; i<value; i++){
            let nextValue = this.display[0][targetColumn]
            this.display[0][targetColumn] = this.display[this.display.length-1][targetColumn]
            for(let j = 1; j<this.display.length; j++){
                let currentValue = this.display[j][targetColumn];
                this.display[j][targetColumn] = nextValue;
                nextValue = currentValue;
            }   
        }
    }

    getOnLights(){
        let count = 0;
        for(let i = 0; i<this.display.length; i++){
            for(let j = 0; j<this.display[i].length; j++){
                if(this.display[i][j] == 1){
                    count ++;
                }
            }
        }
        return count
    }

}