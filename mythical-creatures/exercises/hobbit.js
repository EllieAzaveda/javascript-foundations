class Hobbit {
  constructor({ name } = {}, age, adult, old, hasRing) {
    this.name = name;
    this.adult = adult;
    this.hasRing = hasRing;
    this.age = age || 0;
    this.old = false;
  }

  celebrateBirthday() {
    this.age += 1;
    if(this.age <= 32) {
      this.adult = false;
    } else if (this.age >= 101) {
      this.adult = false;
      this.old = true;
    } else {
      this.adult = true;
    }
  }

  getRing() {
    if (this.name === "Frodo") {
      this.hasRing = true;
      return 'Here is the ring!';
    } else {
      this.hasRing = false;
      return 'You can\'t have it!';
    }
  }
}


module.exports = Hobbit;
