class Bob {
  hey(input) {
    if (input.length > 0) {
      input = input.trim();
    }
    if (input.match(/[a-z]/i) && input.toUpperCase() === input) {
      return 'Whoa, chill out!';
    } else if (input.toUpperCase === input && input[input.length - 1] === '?') {
      return "Calm down, I know what I'm doing!";
    } else if (input[input.length - 1] === '?') {
      return 'Sure.';
    } else if (input.length === 0 || input.length === 0) {
      return 'Fine. Be that way!';
    } else {
      return 'Whatever.';
    }
  }
}

module.exports = Bob;
