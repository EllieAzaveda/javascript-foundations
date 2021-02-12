class Pirate {
  constructor(name, job, cursed, booty) {
    this.name = name;
    this.booty = 0;

    if(job === undefined){
      this.job = 'scallywag';
    } else {
      this.job = job;
    }

    if(cursed === undefined) {
      this.cursed = false;
    } else {
      this.cursed = curse;
    }
  }

  robShip() {
    if(this.booty <=400) {
      this.booty += 100;
      return 'YAARRR!';
    } else {
      this.booty = 500;
      this.cursed = true;
      return 'ARG! I\'ve been cursed!';
    }
  }

    liftCurse() {
      if(this.cursed == true) {
        this.booty = 200;
        this.cursed = false;
        return 'Your curse has been lifted!';
      } else { 
        return 'You don\'t need to lift a curse!'
      }
    }

}

module.exports = Pirate;
