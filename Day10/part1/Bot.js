"use strict";
module.exports = class Bot{
    constructor(id){
        this.id =id;
        this.chips=[];
    }
    dumpChips(){
        if(this.chips.length != 2){
            return null;
        }
        let dump = []
        dump.push(this.chips[0]);
        dump.push(this.chips[1]);
        this.chips = []
        return dump
    }
    get id(){
        return this._id;
    }
    set id(val){
        this._id = val;
    }

    recieveChip(chip){
        if(this.chips.length == 0){
            this.chips.push(chip);
            this.beenInit = true;
        }
        else{
            // if(chip == 61 && this.chips[0] == 17 || chip == 17 && this.chips[0] == 61  ){
            //     throw "Compare found at "  + this.id
            // }
            if(this.chips[0] < chip){
                this.chips.push(chip);
            }
            else{
                this.chips.splice(0, 0, chip);
            }
        }
        if(this.chips.length > 2){
            throw "Bigger than 2"
        }
    }
}