class Magician {
  constructor({ name, assistant, clothing } = {}, favoriteAccessory, spell, charm) {
    this.name = `The Great ${name}`;
    this.assistant = assistant;
    this.favoriteAccessory = favoriteAccessory;
    if(favoriteAccessory === undefined){
      this.favoriteAccessory = 'top hat';
    } else {
      this.favoriteAccessory = clothing;
    }
    this.spell = spell;
    this.charm = charm;
  }

performIncantation(x){
  if(x === 'abracadabra') {
    return 'ABRACADABRA!';
  } else {
    return 'ALLAKAZAAM!';
  }
};

performTrick( {clothing} = {}) {
  if(this.clothing === 'top hat'){
    return 'PULL RABBIT FROM TOP HAT';
  } else {
    return 'PULL DOVE FROM SLEEVE';
  }
}

}

module.exports = Magician;
