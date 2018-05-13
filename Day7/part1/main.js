let fs = require('fs')
let ips = fs.readFileSync('input.txt').toString().split("\n");
for(let i = 0; i<ips.length; i++){
    ips[i] = ips[i].trim();
}
function validateHypernets(ip){
    for(let i = 0; i<ip.length;i++){
        if(ip.charAt(i) == "["){
            let hypernet = ip.substring(i+1, ip.indexOf("]", i))
            for(let j = 0; j<hypernet.length-3; j++){
                if(hypernet.charAt(j) == hypernet.charAt(j+3) && hypernet.charAt(j+1) == hypernet.charAt(j+2) 
                && hypernet.charAt(j) != hypernet.charAt(j+1) ){
                    return false
                }
            }
        }
    }
    return true;
}
function supportsTLS(ip){
    if(!validateHypernets(ip)){
        return false;
    }
    for(let i = 0; i<ip.length-3; i++){
        if(ip.charAt(i) == "["){
            i = ip.indexOf("]", i);
        }
        else{
            if(ip.charAt(i) == ip.charAt(i+3) && ip.charAt(i+1) == ip.charAt(i+2) && ip.charAt(i+1) != ip.charAt(i)){
                return true
            }
        }
    }
    return false;
}
let count = 0;
for(let i = 0; i<ips.length; i++){
    if(supportsTLS(ips[i])){
        count++;
    }
}
console.log(count);