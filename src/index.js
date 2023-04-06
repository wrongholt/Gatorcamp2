import './styles.scss';
import HomeScene from './scenes/HomeScene.js';
import BootScene from './scenes/BootScene.js';

var newHeight = window.innerHeight;
var newWidth = window.innerWidth - 25;
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

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('HomeScene', HomeScene);
    this.scene.add('BootScene', BootScene);
    this.scene.start('BootScene');
  }
}
window.onload = function () {
  window.game = new Game();
};
