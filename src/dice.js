class Dice {
  dTwentyRoll() {
    return Math.floor(Math.random() * (21 - 1) + 1);
  }
}

export { Dice };
