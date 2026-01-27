
var singleNumber = function(nums) {
    let index = 0;
    for(let n of nums){
        index ^= n;
    }
    return index;
    
};