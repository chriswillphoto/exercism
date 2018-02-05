class Cipher {
  constructor(
    key = 'asdkjawkdjakwjdaklsjdkjwakldjakjaskldjaklwjdjfnjkanwkanf',
  ) {
    this.ref = 'abcdefghijklmnopqrstuvwxyz';
    if (/^[a-z]+$/.test(key)) {
      this.key = key;
    } else {
      throw Error('Bad key');
    }
  }

  keyLength(input){
    if(input.length > this.key.length) {
      this.key = this.key.repeat( Math.ceil( input.length / this.key.length  )  )
    }
  }

  encode(input) {
    this.keyLength(input)
    let output = [];
    let inputLowered = input.toLowerCase();
    for (let i = 0; i < input.length; i++) {
      let newIndex =
        this.ref.indexOf(inputLowered[i]) + this.ref.indexOf(this.key[i]);
      if(newIndex > 25){
        newIndex = newIndex - 26
      }
      let newLetter = this.ref[newIndex];
      output.push(newLetter);
    }
    return output.join('');
  }

  decode(input) {
    this.keyLength(input)
    let output = [];
    let inputLowered = input.toLowerCase();
    for (let i = 0; i < input.length; i++) {
      let newIndex =
        this.ref.indexOf(inputLowered[i]) - this.ref.indexOf(this.key[i]);
      if (newIndex < 0) {
        newIndex = this.ref.length + newIndex;
      }
      let newLetter = this.ref[newIndex];
      output.push(newLetter);
    }
    return output.join('');
  }
}



module.exports = Cipher;
