class Character {
    // TODO: Add a constructor
    constructor(name, strength, hitPoints) {
      this.nombre = name;
      this.strength = strength;
      this.hitPoints = hitPoints;
      this.isCritical = false;
    }
  
    //boolean that will return true if resurrected, otherwise stay dead and return false
    resurrect() {
      var chanceOfResurrection = Math.random();
      if (chanceOfResurrection >= 0.5) {
        this.hitPoints = 50;
        return true;
      }
      return false;
    }
  
    healHealth() {
      //randomize a health bonus and add it to hit points
      const healthBonus = Math.floor(Math.random() * 20);
      this.hitPoints = this.hitPoints + healthBonus;
      
      console.log(`\x1b[42m${this.nombre} healed themself by ${healthBonus}\x1b[0m`);
    }
    // TODO: Create a printStats() method that console logs `this.name`, `this.strength`, and `this.hitPoints`
    printStats() {
      console.log(`${this.nombre} has ${this.hitPoints} health left`);
      if (this.hitPoints <= 20) {
        console.log(`\x1b[31m ${this.nombre} is in critical condition and got strength boost! \x1b[0m`);
        this.isCritical = true;
        this.strength = this.strength * 2;
        // if character has magicpoints then attempt to heal
        this.healHealth();
      }
  
    }
    // TODO: Create a isAlive() method that returns a boolean based on whether or not a character's "hitpoints" are <= 0
    isAlive() {
      if (this.hitPoints <= 0) {
        
        console.log(`${this.nombre} has been defeated!`);
  
        var wasCharacterResurrected = this.resurrect();
        if (wasCharacterResurrected) {
          console.log(`\x1b[34m⚡⚡⚡⚡BUT THEY ROSE FROM THE DEAD!⚡⚡⚡⚡\x1b[0m`);
          return true;
        }
        return false;
      }
      return true;
    }
  
  
  
    // TODO: Create a attack() method that accepts an opponent object and decreases the opponent's "hitPoints" by this character's strength
    attack(opponent) {
      const hitValue = Math.floor(this.strength * Math.random());
      console.log(`${this.nombre} hit ${opponent.nombre} for ${hitValue}`);
      opponent.hitPoints = opponent.hitPoints - hitValue;
    }  
  }
  
  module.exports = Character;