let fs = require('fs')
let ips = fs.readFileSync('input.txt').toString().split("\n");
for(let i = 0; i<ips.length; i++){
    ips[i] = ips[i].trim();
}
function getABAs(ip){
    let abas = []
    for(let i = 0; i<ip.length-2; i++){
        if(ip.charAt(i) == "["){
            i = ip.indexOf("]", i);
        }
        else{
            if(ip.charAt(i) == ip.charAt(i+2)){
                abas.push(ip.substring(i,i+3));
            }
        }
    }
    return abas;
}

function supportsSSL(ip){
    let abas = getABAs(ip);
    for(let i = 0; i<ip.length;i++){
        if(ip.charAt(i) == "["){
            let hypernet = ip.substring(i+1, ip.indexOf("]", i));
            for(let j = 0; j<hypernet.length-2; j++){
                for(let k = 0; k<abas.length; k++){
                    let reorder = abas[k].charAt(1) + abas[k].charAt(0) + abas[k].charAt(1);
                    if(hypernet.substring(j, j+3) ==reorder){
                        return true;
                    }
                }
            }
        }
    }
    return false;
}
let count = 0;
for(let i = 0; i<ips.length; i++){
    if(supportsSSL(ips[i])){
        count++;
    }
}
console.log(count);

//console.log(supportsSSL("zazbz[bzb]cdb"));