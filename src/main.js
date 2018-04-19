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
    setTimeout(function() {
      $("#goblinSprite").hide();
      $("#goblinGif").show();
      setTimeout(function() {
        $("#goblinGif").hide();
        $("#goblinSprite").show();
      }, 940);
      if(goblin.health > 0) {
        player.enemyAttack();
        $("#playerHealth").text(player.health);
      }
    }, 1000);
    goblin.userAttack();
    $("#goblinHealth").text(goblin.health);
    $(".progress-bar").css('width', (goblin.health * 5) + '%');
    if(goblin.health <= 0) {
      $("#attack").hide();
      $("#items").show();
      $("#goblinHealth").text(' is dead!');
      goblin.loot.forEach(item => {
        player.inventory.push(item);
        $("#inventory ul").append(`<li>${item}</li>`);
      });
      $("#goblinGif").hide();
      $("#goblinSprite").hide();
    }
  });
});
