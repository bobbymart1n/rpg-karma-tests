import { Enemy } from './enemy.js'

class Goblin extends Enemy {
  constructor(health) {
    super (health);
    this.expGiven = 15;
    this.loot = ["goblin ear", "broken belt"];
  }
}

export { Goblin };
