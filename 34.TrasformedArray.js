var constructTransformedArray = function (nums) {
    let n = nums.length;
    if (n == 1) return [nums[0]];
    const res = [];
    for (let i = 0; i < n; i++) {
        let idx = (i + 100 * n + nums[i]) % n;
        res.push(nums[idx]);
    }
    return res;
}