

class Pangram {
  constructor(input) {
    this.input = input.toLowerCase()
    this.ref = ('abcdefghijklmnopqrstuvwxyz').split("")
  }

  isPangram() {
   let check = [...this.ref]
    for(let i=0;i<this.input.length;i++){
      if(check.indexOf(this.input[i]) !== -1){
        check.splice( check.indexOf(this.input[i]), 1  )
      }
    }
    if(check.length === 0){
      return true
    }else {
      return false
    }
  }
}

module.exports = Pangram
