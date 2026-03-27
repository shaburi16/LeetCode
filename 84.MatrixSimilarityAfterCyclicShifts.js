
var areSimilar = function(mat, k) {
    let m = mat.length;
    let n = mat[0].length;
    let d = k % n;
    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            let original = mat[i][j];
            let shifted;
            if( i % 2 === 0){
                shifted = mat[i][(j + d) % n];
            }else {
                shifted = mat[i][(j - d + n) % n];
            }
            if (shifted !== original){
                return false;
            }
        }
    } 
    return true
};