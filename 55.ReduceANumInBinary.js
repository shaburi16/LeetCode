
var numSteps = function(s) {
    let step = 0;
    let carry = 0;
    for (let i = s.length - 1; i>0; i--){
        let bit = parseInt(s[i]);
        if(bit + carry === 1){
            step +=2;
            carry = 1;
        }else{
            step += 1;
        }
    }
    return step + carry;
};