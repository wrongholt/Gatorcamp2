import 'phaser';
import 'webfontloader';
import WebFontFile from '../helpers/webfont.js';
class BootScene extends Phaser.Scene {
  constructor(args) {
    super();
  }

  preload() {
    this.load.multiatlas('counselor1', 'assets/counselor1.json', 'assets');
    this.load.multiatlas('counselor2', 'assets/counselor2.json', 'assets');
    this.load.multiatlas('counselor3', 'assets/counselor3.json', 'assets');
    this.load.addFile(new WebFontFile(this.load, ['Cinzel', 'Lato', 'Caveat']));
  }

  create() {
    this.scene.start('HomeScene');
  }
}

export default BootScene;
