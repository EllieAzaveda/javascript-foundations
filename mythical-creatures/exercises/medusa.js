var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(victim) {
    var newStatue = new Statue(victim.name);
    if (this.statues.length < 3) {
      this.statues.push(newStatue);
    } else {
      var freeVictims = this.statues.shift();
      freeVictims.mood = "relieved";
      this.statues.push(newStatue);
      var person = new Person(freeVictims.name, freeVictims.mood);
      return person;
    }
  }

};

module.exports = Medusa;
