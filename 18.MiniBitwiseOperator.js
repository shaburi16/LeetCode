
 var minBitwiseArray = function(nums) {
    let ans = [];

    for (let p of nums) {
        let found = -1;

        for (let i = 0; i <= p; i++) {
            if ((i | (i + 1)) === p) {
                found = i;
                break;
            }
        }
        ans.push(found);
    }
    return ans;
};