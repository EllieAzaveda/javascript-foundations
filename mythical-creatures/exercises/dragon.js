class Dragon {
  constructor(name, rider, hungry) {
    this.name = name;
    this.rider = rider;
    this.hungry = hungry || true;
    this.hasMeal = 0;
  }

  greet(greeting){
      return `Hi, ${this.rider}!`
  }

  eat() {
    this.hasMeal++;
    if(this.hasMeal >= 3) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;
