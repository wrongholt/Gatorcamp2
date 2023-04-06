import 'phaser';

class HomeScene extends Phaser.Scene {
  constructor(args) {
    super();
  }
  preload() {
    this.load.multiatlas('counselor1', 'assets/counselor1.json', 'assets');
  }

  create() {
    var leftChar;
    var rightChar;
    var centerChar;
    var newHeight = window.innerHeight;
    var newWidth = window.innerWidth;
    leftChar = this.add.sprite(
      newWidth / 6,
      newHeight / 2,
      'counselor1',
      'counselor1Idle_000.png'
    );
    leftChar.setScale(0.9, 0.9);
    centerChar = this.add.sprite(
      newWidth / 2.2,
      newHeight / 2,
      'counselor2',
      'counselor2Idle_000.png'
    );
    centerChar.setScale(0.9, 0.9);
    rightChar = this.add.sprite(
      newWidth / 1.2,
      newHeight / 2,
      'counselor3',
      'counselor3Idle_000.png'
    );
    rightChar.setScale(0.9, 0.9);
    var frameNames = this.anims.generateFrameNames('counselor1', {
      start: 0,
      end: 19,
      zeroPad: 3,
      prefix: 'counselor1Idle_',
      suffix: '.png',
    });
    var frameNames2 = this.anims.generateFrameNames('counselor2', {
      start: 0,
      end: 19,
      zeroPad: 3,
      prefix: 'counselor2Idle_',
      suffix: '.png',
    });
    var frameNames3 = this.anims.generateFrameNames('counselor3', {
      start: 0,
      end: 19,
      zeroPad: 3,
      prefix: 'counselor3Idle_',
      suffix: '.png',
    });
    this.anims.create({
      key: 'animation',
      frames: frameNames,
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: 'animation2',
      frames: frameNames2,
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: 'animation3',
      frames: frameNames3,
      frameRate: 8,
      repeat: -1,
    });
    leftChar.anims.play('animation');
    centerChar.anims.play('animation2');
    rightChar.anims.play('animation3');
  }
}
export default HomeScene;
