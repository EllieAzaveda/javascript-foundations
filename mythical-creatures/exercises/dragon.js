var hasMeal = 0;

class Dragon {
  constructor(name, rider, hungry) {
    this.name = name;
    this.rider = rider;
    if (hungry === undefined) {
      this.hungry = true;
    } else {
      this.hungry = hungry;
    }
  }

  greet(greeting){
      return `Hi, ${this.rider}!`
  }

  eat() {
    hasMeal++;
    if(hasMeal >= 3) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;
