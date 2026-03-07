var thirdMax = function(nums) {
    let unique = [...new Set(nums)];
    unique.sort((a, b) => b - a);
    if (unique.length >= 3) {
        return unique[2];
    }
    return unique[0];
};