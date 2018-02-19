class SecretHandshake {
  constructor(input) {
    if (input.toString().match(/[^0-9]/)) {
      throw new Error("Handshake must be a number");
    }
    this.decimal = input;
    this.binary = this.decimal.toString(2);
  }

  commands() {
    let commandList = [];
    const secret = this.binary;
    if (secret[secret.length - 1] === "1") {
      commandList.push("wink");
    }
    if (secret[secret.length - 2] === "1") {
      commandList.push("double blink");
    }
    if (secret[secret.length - 3] === "1") {
      commandList.push("close your eyes");
    }
    if (secret[secret.length - 4] === "1") {
      commandList.push("jump");
    }
    if (secret[secret.length - 5] === "1") {
      commandList = commandList.reverse();
    }

    return commandList;
  }
}

module.exports = SecretHandshake;
