function unroll(squareArray) {
    const result = [];
    let startRow = 0, endRow = squareArray.length;
    let startCol = 0, endCol = squareArray[0].length;
  
    while (startRow < endRow && startCol < endCol) {
      for (let i = startCol; i < endCol; ++i) {
        result.push(squareArray[startRow][i]);
      }
      startRow++;
  
      for (let i = startRow; i < endRow; ++i) {
        result.push(squareArray[i][endCol - 1]);
      }
      endCol--;
  
      if (startRow < endRow) {
        for (let i = endCol - 1; i >= startCol; --i) {
          result.push(squareArray[endRow - 1][i]);
        }
        endRow--;
      }
  
      if (startCol < endCol) {
        for (let i = endRow - 1; i >= startRow; --i) {
          result.push(squareArray[i][startCol]);
        }
        startCol++;
      }
    }
  
    return result;
  }
  
  module.exports = unroll;
  