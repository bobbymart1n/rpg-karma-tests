import { User, Enemy } from './../src/rpg.js';

describe('Player', function() {

  it('should test giving the user a level', function() {
    const player = new User();
    console.log(player);
  });

  it('should insert enemy into battle scenario', function() {
    let mummra = new Enemy(25, 15);
    console.log(mummra);
  });
});
