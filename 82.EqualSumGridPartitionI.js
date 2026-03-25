var canPartitionGrid = function(grid) {
    let m = grid.length, n = grid[0].length;
    
    let total = 0;
    
    for (let row of grid) {
        for (let val of row) {
            total += val;
        }
    }
    
    if (total % 2 !== 0) return false;
    
    let target = total / 2;
    
    let rowSum = 0;
    for (let i = 0; i < m - 1; i++) {
        for (let j = 0; j < n; j++) {
            rowSum += grid[i][j];
        }
        if (rowSum === target) return true;
    }
    
    let colSum = new Array(n).fill(0);
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < m; i++) {
            colSum[j] += grid[i][j];
        }
    }
    
    let curr = 0;
    for (let j = 0; j < n - 1; j++) {
        curr += colSum[j];
        if (curr === target) return true;
    }
    
    return false;
};