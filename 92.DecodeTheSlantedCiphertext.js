var decodeCiphertext = function(encodedText, rows) {
if (encodedText.length === 0) return "";
    
    const n = encodedText.length;
    const cols = Math.floor(n / rows);
    
    let result = [];
    
    for (let startCol = 0; startCol < cols; startCol++) {
        let row = 0;
        let col = startCol;
        
        while (row < rows && col < cols) {
            result.push(encodedText[row * cols + col]);
            row++;
            col++;
        }
    }
    return result.join('').replace(/\s+$/, '');
}