"use strict";
let Bot = require('./Bot');
function parseInstructions(instructions){
    let retArray = []
    for(let i = 0; i<instructions.length; i++){
        let insSpilt = instructions[i].split(" ");
        for(let j = 0; j<insSpilt.length; j++){
            if(!isNaN(parseInt(insSpilt[j]))){
                insSpilt[j] = parseInt(insSpilt[j])
            }
        }
        retArray.push(insSpilt);
    }
    return retArray;
}

module.exports = class Factory{
    constructor(instructionList){
        let insList = parseInstructions(instructionList);
        this.instructions = [];
        for(let i = 0; i<insList.length; i++){
            this.instructions.push([false, insList[i]]);
        }
        this.bots = [];
        this.outputs= [];
    }

    set outputs(val){
        this._outputs = val;
    }

    get outputs(){
        return this._outputs;

    }
    findOutput(outputId){
        for(let i = 0; i<this.outputs.length; i++){
            if(this.outputs[i][0] == outputId){
                return this.outputs[i];
            }
        }
        this.outputs.push([outputId, null]);
        return this.outputs[this.outputs.length-1];

    }
    findBot(botId){
        for(let i = 0; i<this.bots.length; i++){
            if(this.bots[i].id == botId){
                return this.bots[i]
            }
        }
        this.bots.push(new Bot(botId));
        return this.bots[this.bots.length-1];
    } 

    hasExecutedAll(){
        for(let i = 0; i<this.instructions.length; i++){
            if(this.instructions[i][0] == false){
                return false;
            }
        }
        return true;
    }
    executeNextInstruction(){
        let wasSuccesful = false;
        let i = 0;
        do{
            let execIns = this.instructions[i][1];
            if(!this.instructions[i][0]){
                //console.log(execIns);
                if(execIns.length == 6){
                    this.findBot(execIns[5]).recieveChip(execIns[1]);
                    wasSuccesful = true;
                }
                else{
                    let dump = this.findBot(execIns[1]).dumpChips();
                    if(dump != null){
                        wasSuccesful = true;
                        if(execIns[5] == "bot"){
                            this.findBot(execIns[6]).recieveChip(dump[0]);
                        }
                        if(execIns[10] == "bot"){
                            this.findBot(execIns[11]).recieveChip(dump[1]);
                        }
                        if(execIns[5] == "output"){
                            this.findOutput(execIns[6])[1] = dump[0];
                        }
                        if(execIns[10] == "output"){
                            this.findOutput(execIns[11])[1] = dump[1];
                        }
                    }
                }

            }
            if(wasSuccesful){
                this.instructions[i][0] = true;
            }
            i++;
            if(i == this.instructions.length){
                i = 0;
            }
        }
        while(!wasSuccesful);
    }
}