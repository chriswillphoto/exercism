usedNames = []

class Robot {
  constructor() {
    this.name = this.getName() 
  }

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateName() {
    let newName = []
    for(let i = 0; i < 5; i++){
      if(i < 2){
        newName.push( String.fromCharCode( this.randomInt(65, 90) ) )
      }else{
        newName.push( this.randomInt(0, 9) )
      }
    }
    console.log(newName)
    newName = newName.join("")
    return newName
  }

  getName() {
    let possibleName = this.generateName()

    while(usedNames.indexOf(possibleName) !== -1){
      possibleName = this.generateName()
    }

    usedNames.push(possibleName)
    return possibleName
  }

  reset() {
    this.name = this.getName()
  }
}



module.exports = Robot