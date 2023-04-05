import 'phaser';

class BootScene extends Phaser.Scene {
  constructor(args) {
    super({ key: 'BootScene' });
  }
  preload() {
    this.load.multiatlas(
      'counselor1',
      'https://the-tales-of-old.s3.amazonaws.com/assets/counselor1.json',
      'https://the-tales-of-old.s3.amazonaws.com/assets'
    );
    this.load.multiatlas(
      'counselor2',
      'https://the-tales-of-old.s3.amazonaws.com/assets/counselor2.json',
      'https://the-tales-of-old.s3.amazonaws.com/assets'
    );
    this.load.multiatlas(
      'counselor3',
      'https://the-tales-of-old.s3.amazonaws.com/assets/counselor3.json',
      'https://the-tales-of-old.s3.amazonaws.com/assets'
    );
  }

  create() {
    this.scene.start('HomeScene');
  }
}
export default BootScene;
