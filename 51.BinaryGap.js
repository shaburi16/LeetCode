var binaryGap = function(n) {
    let lastPosition = -1;
    let maxDistance = 0;
    let currentPosition = 0;
    while (n > 0){
        if ((n & 1) === 1){
            if (lastPosition !== -1){
                maxDistance = Math.max(maxDistance, currentPosition - lastPosition);
            }
            lastPosition = currentPosition;
        }
        n = n >> 1;
        currentPosition++;
    }
    return maxDistance;
};