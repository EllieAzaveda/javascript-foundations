class Vampire {
  constructor(name, pet, thirsty, ouncesDrank) {
    this.name = name;
    if(pet === undefined) {
      this.pet = "bat";
    } else{
      this.pet = pet;
    }
    if (thirsty === undefined) {
      this.thirsty = true;
    } else{
    this.thirsty = thirsty;
    }
    this.ouncesDrank = 0;
  }

    drink() {
      this.thirsty = false;
      if(this.ouncesDrank === 50) {
        return "I\'m too full to drink anymore!";
      } else {
        this.ouncesDrank += 10;

      }
  }
}



module.exports = Vampire;
