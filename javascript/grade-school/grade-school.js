class School {
  constructor() {
    this.schoolRoster = {};
  }

  roster() {
    return this.schoolRoster;
  }

  add(student, grade) {
    if (!this.schoolRoster[grade]) {
      this.schoolRoster[grade] = [];
    }
    const update = { ...this.schoolRoster, [grade]: [...this.schoolRoster[grade], student] };
    update[grade] = update[grade].sort()
    this.schoolRoster = update;
  }

  grade( gradeQuery ) {
    let result;
    !this.schoolRoster[gradeQuery] ?  result = [] :  result = this.schoolRoster[gradeQuery]
    return result  }
}

module.exports = School;
