// N-Repeated Element in Size 2N Araay //

var repeatedNTimes = function(nums) {
    const repi = new Set();
    for (let num of nums){
        if(repi.hasO(num)){
            return num;
        }
        repi.add(num);
    }
};

