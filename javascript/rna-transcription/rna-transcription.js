class DnaTranscriber {
  constructor() {
    this.lookup = {
      G: 'C',
      C: 'G',
      T: 'A',
      A: 'U',
    };
  }

  toRna(input) {
    let output = [];
    for (let i = 0; i < input.length; i++) {
      if (Object.keys(this.lookup).indexOf(input[i]) === -1){
        throw Error("Invalid input") 
      }
      output.push(this.lookup[input[i]]);
    }
    return output.join('');
  }
}

module.exports = DnaTranscriber;
