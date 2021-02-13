class Magician {
  constructor({ name, assistant, clothing } = {}, favoriteAccessory, spell, charm, confidencePercentage) {
    this.name = `The Great ${name}`;
    this.assistant = assistant;
    if (clothing === undefined) {
      this.favoriteAccessory = 'top hat';
    } else {
      this.favoriteAccessory = clothing;
    }
    this.clothing = clothing;
    this.spell = spell;
    this.charm = charm;
    this.confidencePercentage = 10;
  }

performIncantation(x){
  if(x === 'abracadabra') {
    return 'ABRACADABRA!';
  } else {
    return 'ALLAKAZAAM!';
  }
};

performTrick(clothing) {
  this.confidencePercentage += 10;
  if(this.clothing === 'top hat' || this.favoriteAccessory === 'top hat'){
    return 'PULL RABBIT FROM TOP HAT';
  } else {
    return 'PULL DOVE FROM SLEEVE';
  }
}

// Come back to this and figure out how to stop confidence at 100%
performShowStopper() {
  if (this.confidencePercentage >= 100 && this.assistant === true) {
    return 'WOW! The magician totally just sawed that person in half!';
  } else {
    return 'Oh no, this trick is not ready!'
  }
}

}

module.exports = Magician;
