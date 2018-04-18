class Enemy {
  constructor(health, damage) {
    this.health = health;
    this.damage = damage;
    this.expGiven = 20;
  }
}
class Goblin extends Enemy {
  constructor(health, damage) {
    super (health, damage);
    this.expGiven = 15;
    this.loot = ["goblin ear", "broken belt"];
  }
}

export { Enemy, Goblin };
