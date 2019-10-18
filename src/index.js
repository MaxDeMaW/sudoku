
module.exports = function solveSudoku(grid) {

 grid = verticalLonelinessAdd(grid);
 grid = horizontalLonelinessAdd(grid);

return grid;

}






function horizontalLonelinessAdd(grid) {
  //ищем строки, где отсутствует только 1 цифра
  for (let col = 0; col < 9; col++) {
    var numberEmptyPlaces = 0;
    var emptyRow = -1;
    for (let row = 0; row < 9; row++) {
      if (grid[col][row] == 0) {
        numberEmptyPlaces++;
        emptyRow = row;
      };
      //если только 1 пустая ячейка, найти
      if (numberEmptyPlaces == 1) {
        if (emptyRow != -1)
          grid[col][emptyRow] = (45 - grid[col][0] + grid[col][1] + grid[col][2] + grid[col][3] + grid[col][4] + grid[col][5] + grid[col][6] + grid[col][7] + grid[col][8]);
      }
    }
  }
  return grid;
}




function verticalLonelinessAdd(grid) {
  //ищем колонки, где отсутствует только 1 цифра

  for (let row = 0; row < 9; row++) {
    var numberEmptyPlaces = 0;
    var emptyColumn = -1;
    for (let col = 0; col < 9; col++) {
      if (grid[col][row] == 0) {
        numberEmptyPlaces++;
        emptyColumn = col;
      };
      //если только 1 пустая ячейка, найти
      if (numberEmptyPlaces == 1) {
        if (emptyColumn != -1)
          grid[emptyColumn][row] = (45 - grid[0][row] + grid[1][row] + grid[2][row] + grid[3][row] + grid[4][row] + grid[5][row] + grid[6][row] + grid[7][row] + grid[8][row]);
      }
    }
  }
  return grid;
}
