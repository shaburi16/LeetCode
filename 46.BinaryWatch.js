var readBinaryWatch = function(turnedOn) {
    const result = [];
    
    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            let totalBits = countBits(h) + countBits(m);
            
            if (totalBits === turnedOn) {
                result.push(`${h}:${m.toString().padStart(2, '0')}`);
            }
        }
    }
    return result;
};
function countBits(num) {
    let count = 0;
    while (num > 0) {
        count += num & 1;
        num >>= 1;
    }
    return count;
}
