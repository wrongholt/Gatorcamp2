import 'phaser';
class HomeScene extends Phaser.Scene {
  constructor(args) {
    super();
  }

  preload() {}

  create() {
    var leftChar;
    var rightChar;
    var centerChar;
    var newHeight = this.game.config.height;
    var newWidth = this.game.config.width;
    var headingImage = this.add.image(newWidth * 0.5, -500, 'gatorHeading');
    headingImage.setOrigin(0.5);
    headingImage.setScale(newWidth / 4000);
    this.tweens.add({
      targets: headingImage,
      y: newHeight * 0.1,
      ease: 'Bounce.easeInOut',
      delay: 0,
      duration: 1000,
    });
    var subText = this.add.text(
      -300,
      newHeight * 0.25,
      `Choose your Counselor`,
      {
        fontFamily: '"Cinzel"',
        fontSize: '4vw',
      }
    );
    console.log(this.game.config.width);
    subText.setOrigin(0.5);
    this.tweens.add({
      targets: subText,
      x: newWidth * 0.5,
      ease: 'Quad.easeInOut',
      delay: 0,
      duration: 2500,
    });
    leftChar = this.add
      .sprite(
        newWidth / 6 - 10,
        newHeight / 1.6,
        'counselor1',
        'counselor1Idle_000.png'
      )
      .setInteractive();
    var scaleRatio = window.devicePixelRatio / 1.5;
    leftChar.setScale(newWidth / 1800);
    leftChar.on('pointerdown', function (pointer) {
      this.setTint(0xff0000);
    });
    leftChar.on('pointerout', function (pointer) {
      this.clearTint();
    });

    leftChar.on('pointerup', function (pointer) {
      this.clearTint();
    });
    centerChar = this.add
      .sprite(
        newWidth * 0.5,
        newHeight / 1.6,
        'counselor2',
        'counselor2Idle_000.png'
      )
      .setInteractive();
    centerChar.setOrigin(0.5);
    centerChar.setScale(newWidth / 1800);
    centerChar.on('pointerdown', function (pointer) {
      this.setTint(0xff0000);
    });
    centerChar.on('pointerout', function (pointer) {
      this.clearTint();
    });

    centerChar.on('pointerup', function (pointer) {
      this.clearTint();
    });
    rightChar = this.add
      .sprite(
        newWidth / 1.2 - 15,
        newHeight / 1.6,
        'counselor3',
        'counselor3Idle_000.png'
      )
      .setInteractive();
    rightChar.setScale(newWidth / 1800);
    rightChar.on('pointerdown', function (pointer) {
      this.setTint(0xff0000);
    });
    rightChar.on('pointerout', function (pointer) {
      this.clearTint();
    });

    rightChar.on('pointerup', function (pointer) {
      this.clearTint();
    });
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
