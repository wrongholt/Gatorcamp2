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

    var backButton = this.add.image(1, 1, 'back');
    backButton.setOrigin(-0.02, -0.02);
    backButton.setScale(0.4);
    backButton.setInteractive();
    backButton.on('pointerdown', function (pointer) {
      this.setTint(11843512);
      this.scene.scene.start('HomeScene');
    });
    backButton.on('pointerout', function (pointer) {
      this.clearTint();
    });

    backButton.on('pointerup', function (pointer) {
      this.clearTint();
    });
    var bg = this.add.image(0, 0, 'bg').setPipeline('Light2D').setAlpha(0.2);
    bg.setScale(newWidth / 1920);
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
    var owl = this.add
      .image(-450, -390, 'owl')
      .setBlendMode(Phaser.BlendModes.NORMAL)
      .setPipeline('Light2D')
      .setAlpha(0.6)
      .setInteractive();
    owl.setScale(0.03);
    owl.setOrigin(0.5, 0.5);
    var bear = this.add
      .image(60, -250, 'bear')
      .setBlendMode(Phaser.BlendModes.NORMAL)
      .setPipeline('Light2D')
      .setAlpha(0.6)
      .setInteractive();
    bear.setScale(0.1);
    bear.setOrigin(0.5, 0.5);
    var gator = this.add
      .image(-260, -100, 'gator2')
      .setBlendMode(Phaser.BlendModes.NORMAL)
      .setPipeline('Light2D')
      .setAlpha(0.6)
      .setInteractive();
    gator.setScale(newWidth / 3800);
    gator.setOrigin(0.5, 0.5);
    gator.on('pointerover', function (pointer) {
      console.log('Hello');
    });
    gator.on('pointerout', function (pointer) {});
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

    var spotlight = this.lights.addLight(400, 300, 280).setIntensity(10);
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
    var topContainer = this.add.container(0, 0);
    topContainer.setSize(newWidth, newHeight * 0.15);
    var campContainer = this.add.container(0, newHeight * 0.2);
    campContainer.setSize(newWidth, newHeight * 0.85);
    var newLeftContainer = this.add.container(newWidth / 6 - 10, newHeight / 2);
    newLeftContainer.setSize('22vw', '30vh');
    var rightContainer = this.add.container(
      newWidth / 1.2 - 10,
      campContainer.height
    );
    rightContainer.setSize('88vw', '30vh');
    rightContainer.add(gator);
    rightContainer.add(bear);
    rightContainer.add(owl);
    topContainer.add(headingImage);
    topContainer.add(backButton);
    newLeftContainer.add(newLeftChar);
    campContainer.add(bg);
    campContainer.add(newLeftContainer);
    campContainer.add(rightContainer);

    newLeftChar.anims.play(mainCharacter + 'animation');
  }
}

export default GatorCampScene;
