import Phaser from 'phaser';
import './styles.scss';
import HomeScene from './scenes/HomeScene.js';

let homeScene = new HomeScene();
var newHeight = window.innerHeight;
var newWidth = window.innerWidth;
var config = {
  type: Phaser.AUTO,
  parent: 'gatorCamp',
  width: newWidth,
  height: newHeight,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

var game = new Phaser.Game(config);
game.scene.add('HomeScene', homeScene);
game.scene.start('HomeScene');
