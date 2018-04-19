import { Dice } from './dice.js';
class User {
  constructor() {
    this.health = 100;
    this.damage = 10;
    this.level = 1;
    this.exp = 0;
    this.inventory = [];
    this.intell = 0;
    this.dex = 0;
    this.strength = 0;
  }
  wizard() {
    this.intell = 10;
    this.dex = 5;
    this.strength = 5;
  }
  thief() {
    this.intell = 3;
    this.dex = 10;
    this.strength = 7;
  }
  warrior() {
    this.intell = 5;
    this.dex = 5;
    this.strength = 10;
  }
  levelUp() {
    if(this.exp === 20) {
      this.level = 2;
    } else if (this.exp === 40) {
      this.level = 3;
    } else if (this.exp === 60) {
      this.level = 4;
    }
  }

  enemyAttack() {
    this.health -= Dice.prototype.dTwentyRoll();
  }
}

export { User };
