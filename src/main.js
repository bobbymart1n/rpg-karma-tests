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
    $("#nikolaSprite").hide();
    $("#nikolaGif").show();
    setTimeout(function() {
      $("#nikolaGif").hide();
      $("#nikolaSprite").show();
    }, 2000);
    setTimeout(function() {
      $("#goblinSprite").hide();
      $("#goblinGif").show();
      setTimeout(function() {
        $("#goblinGif").hide();
        $("#goblinSprite").show();
      }, 940);
      if(goblin.health > 0) {
        player.enemyAttack();
        $(".nikola-health .progress-bar").css('width', (player.health * 1) + '%');
        $("#playerHealth").text(player.health);
      }
    }, 2500);
    goblin.userAttack();
    $("#goblinHealth").text(goblin.health);
    $(".goblin-health .progress-bar").css('width', (goblin.health * 5) + '%');
    if(goblin.health <= 0) {
      $(".goblin").hide();
      $("#attack").hide();
      $("#items").show();
      $("#goblinHealth").text(' is dead!');
      goblin.loot.forEach(item => {
        player.inventory.push(item);
        $("#inventory ul").append(`<li>${item}</li>`);
      });
    }
  });
});
