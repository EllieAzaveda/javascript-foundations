class Hobbit {
  constructor({ name } = {}, age, adult, old, hasRing) {
    this.name = name;
    this.adult = adult;
    this.hasRing = hasRing;

    if(age === undefined) {
      this.age = 0;
    } else {
      this.age = age;
    };

    if(age <= 32) {
      this.adult = false;
    } else {
      this.adult = true;
    };

    if(age >= 101) {
      this.old = old;
    };

  }

  celebrateBirthday() {
    this.age += 1;
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
