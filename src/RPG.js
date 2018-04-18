export class User {
  constructor() {
    this.health = 100;
    this.damage = 10;
    this.level = 1;
    this.exp = 0;
    this.inventory = [];
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

}



export class Enemy {
  constructor(health, damage) {
    this.health = health;
    this.damage = damage;
    this.expGiven = 20;
  }

}
