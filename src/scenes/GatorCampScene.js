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
    var newLeftChar;
    var newHeight = this.game.config.height;
    var newWidth = this.game.config.width;
    var campContainer = this.add.container(0, newHeight * 0.2);
    campContainer.setSize(newWidth, newHeight * 0.85);

    var bg = this.add.image(0, 0, 'bg').setPipeline('Light2D').setAlpha(0.2);
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
    var newLeftContainer = this.add.container(newWidth / 6 - 10, newHeight / 2);
    newLeftContainer.setSize('22vw', '30vh');
    var mainCharacter = this.characterId;
    console.log('THE NEW CHAR---->>>>', mainCharacter);
    newLeftChar = this.add
      .sprite(1, 0.5, mainCharacter, `${mainCharacter}Idle_000.png`)
      .setInteractive();
    newLeftChar.setScale(newWidth / 1800);
    newLeftChar.on('pointerdown', function (pointer) {
      this.setTint(11843512);
      var frameNames2;
      if (mainCharacter === 'counselor1') {
        frameNames2 = this.anims.generateFrameNames(mainCharacter, {
          start: 0,
          end: 3,
          zeroPad: 3,
          prefix: mainCharacter + 'Attack_',
          suffix: '.png',
        });
      } else {
        frameNames2 = this.anims.generateFrameNames(mainCharacter, {
          start: 0,
          end: 6,
          zeroPad: 3,
          prefix: mainCharacter + 'Attack_',
          suffix: '.png',
        });
      }
      this.anims.create({
        key: mainCharacter + 'animation2',
        frames: frameNames2,
        frameRate: 8,
        repeat: 1,
      });
      newLeftChar.anims.play(mainCharacter + 'animation2');
    });
    newLeftChar.on('pointerout', function (pointer) {
      this.clearTint();
      newLeftChar.anims.play(mainCharacter + 'animation');
    });

    newLeftChar.on('pointerup', function (pointer) {
      this.clearTint();
    });
    this.lights.enable();
    this.lights.setAmbientColor(0x808080);

    var spotlight = this.lights.addLight(400, 300, 280).setIntensity(8);
    3;
    this.input.on('pointermove', function (pointer) {
      spotlight.x = pointer.x;
      spotlight.y = pointer.y;
    });

    var colors = [0xffffff, 0xff0000, 0x00ff00, 0x00ffff, 0xff00ff, 0xffff00];

    var currentColor = 0;

    this.input.on('pointerdown', function (pointer) {
      currentColor++;

      if (currentColor === colors.length) {
        currentColor = 0;
      }

      spotlight.setColor(colors[currentColor]);
    });
    var rightContainer = this.add.container(newWidth / 1.2 - 15, newHeight / 2);
    rightContainer.setSize('88vw', '30vh');

    newLeftContainer.add(newLeftChar);
    campContainer.add(bg);
    campContainer.add(newLeftContainer);
    campContainer.add(rightContainer);

    newLeftChar.anims.play(mainCharacter + 'animation');
  }
}

export default GatorCampScene;
