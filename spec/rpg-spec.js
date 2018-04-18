import { User, Enemy } from './../src/rpg.js';

describe('Player', function() {
  let player;
  let mummra;

  it('should test giving the user a level', function() {
    player = new User();
    console.log(player);
  });

  it('should insert enemy into battle scenario', function() {
    mummra = new Enemy(25, 15);
    console.log(mummra);
  });

  it('should subtract player damage from enemy health', function() {
    player = new User();
    mummra = new Enemy(25, 15);
    mummra.health -= player.damage;
    console.log(mummra.health);
  });
});
