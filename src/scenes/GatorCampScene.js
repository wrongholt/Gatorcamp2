import 'phaser';
class GatorCampScene extends Phaser.Scene {
  constructor(args) {
    super();
  }

  preload() {}
  init(data) {
    console.log('init', data);
    this.characterId = data.id;
  }
  create() {
    var leftChar;
    var newHeight = this.game.config.height;
    var newWidth = this.game.config.width;
    var counselorContainer = this.add.container(0, newHeight * 0.2);
    counselorContainer.setSize(newWidth, newHeight * 0.85);

    var bg = this.add.image(0, 0, 'bg');
    bg.setScale(0.76);
    bg.setOrigin(0, 0.04);
    bg.setTint(11843512);
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
    var leftCharContainer = this.add.container(
      newWidth / 6 - 10,
      newHeight / 2
    );
    leftCharContainer.setSize('22vw', '30vh');
    var mainCharacter = this.characterId;
    leftChar = this.add
      .sprite(0, 0, mainCharacter, `${mainCharacter}Idle_000.png`)
      .setInteractive();
    leftChar.setScale(newWidth / 1800);
    leftChar.on('pointerdown', function (pointer) {
      this.setTint(11843512);
      var frameNames2 = this.anims.generateFrameNames(mainCharacter, {
        start: 0,
        end: 6,
        zeroPad: 3,
        prefix: mainCharacter + 'Attack_',
        suffix: '.png',
      });
      this.anims.create({
        key: 'animation',
        frames: frameNames2,
        frameRate: 8,
        repeat: -1,
      });
    });
    leftChar.on('pointerout', function (pointer) {
      this.clearTint();
    });

    leftChar.on('pointerup', function (pointer) {
      this.clearTint();
    });
    this.lights.enable();
    this.lights.setAmbientColor(0x808080);

    var spotlight = this.lights.addLight(400, 300, 280).setIntensity(3);
    var rightCharContainer = this.add.container(
      newWidth / 1.2 - 15,
      newHeight / 2
    );
    rightCharContainer.setSize('88vw', '30vh');

    leftCharContainer.add(leftChar);
    counselorContainer.add(bg);
    counselorContainer.add(leftCharContainer);
    counselorContainer.add(rightCharContainer);
    var frameNames = this.anims.generateFrameNames(mainCharacter, {
      start: 0,
      end: 19,
      zeroPad: 3,
      prefix: mainCharacter + 'Idle_',
      suffix: '.png',
    });
    this.anims.create({
      key: 'animation',
      frames: frameNames,
      frameRate: 8,
      repeat: -1,
    });
    leftChar.anims.play('animation');
  }
}

export default GatorCampScene;
