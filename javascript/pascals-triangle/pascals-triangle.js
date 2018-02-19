class Triangle {
  constructor(rows) {
    this.rows = this.createTriangle(rows);
    this.lastRow = this.rows[this.rows.length - 1]
  }

  createTriangle(rows) {
    let tri = [];
    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i ) {
          row.push(1);
        } else {
          let num = tri[i - 1][j - 1] + tri[i - 1][j];
          row.push(num);
        }
      }

      tri.push(row);
    }
    return tri;
  }

  
}

module.exports = Triangle;
