export class Player {
  constructor(health, damage, level, exp) {
    this.health = 100;
    this.damage = 0;
    this.level = 1;
    this.exp = 0;
  }

  method() {

  }
};



export class Enemy {
  constructor(health, damage, expGiven) {
    this.health = health;
    this.damage = damage;
    this.expGiven = expGiven;
  }

  method() {
    
  }

};
