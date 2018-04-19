import { Dice } from './dice.js';
class Enemy {
  constructor(health, damage) {
    this.health = health;
    this.damage = damage;
    this.expGiven = 20;
  }

  userAttack() {
    this.health -= Dice.prototype.dTwentyRoll();
  }
}


export { Enemy };
