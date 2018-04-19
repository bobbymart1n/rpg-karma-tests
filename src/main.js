import { User } from './user.js';
import { Goblin } from './goblin.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  let player = new User();
  let goblin = new Goblin(20);
  $("#playerHealth").text(player.health);
  $("#goblinHealth").text(goblin.health);
  $("#attack").click(function() {
    goblin.userAttack();
    $("#goblinHealth").text(goblin.health);
    if(goblin.health <= 0) {
      $("#attack").hide();
      $("#goblinHealth").text('You killed the Goblin!');
      goblin.loot.forEach(item => player.inventory.push(item));
      $("#inventory ul").append(`<li>${player.inventory}</li>`);
    }
  });
});
