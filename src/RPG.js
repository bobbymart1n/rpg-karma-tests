export class User {
  constructor() {
    this.health = 100;
    this.damage = 10;
    this.level = 1;
    this.exp = 0;
  }

  enemyAttack() {

  }

  expGain() {

  }

  levelUp() {

  }

}



export class Enemy {
  constructor(health, damage) {
    this.health = health;
    this.damage = damage;
    this.expGiven = 20;
  }

  userAttack() {

  }


}

exports.userObject = User;
exports.enemyObject = Enemy;
