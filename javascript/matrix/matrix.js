class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
    this.rows = this.toRows(matrix);
    this.columns = this.toColumns(this.toRows(matrix));
  }

  toRows(m) {
    return m.split("\n").map(function(row) {
      return row.split(" ").map(function(i){
        return parseInt(i)
      });
    });
  }

  toColumns(m) {
    let columns = [];
    for (let i = 0; i < m[0].length; i++) {
      columns.push(new Array());
    }
    for (let i = 0; i < m.length; i++) {
      for (let j = 0; j < m[i].length; j++) {
        columns[j].push(m[i][j]);
      }
    }

    return columns;
  }
}

module.exports = Matrix;
