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
    var mainCharacter = this.characterId;
    var topContainer = this.add.container(0, 0);
    var speechContainer = this.add.container(250, 380);
    topContainer.setSize(newWidth, newHeight * 0.15);
    var bubbleWidth = 200;
    var bubbleHeight = 200;
    var bubblePadding = 10;
    var arrowHeight = bubbleHeight / 4;

    var bubble = this.add.graphics({ x: 0, y: 0 });
    var quote = '';
    //  Bubble shadow
    bubble.fillStyle(0x222222, 0.5);
    bubble.fillRoundedRect(6, 6, bubbleWidth, bubbleHeight, 16);

    //  Bubble color
    bubble.fillStyle(0xffffff, 1);

    //  Bubble outline line style
    bubble.lineStyle(4, 0x565656, 1);

    //  Bubble shape and outline
    bubble.strokeRoundedRect(0, 0, bubbleWidth, bubbleHeight, 16);
    bubble.fillRoundedRect(0, 0, bubbleWidth, bubbleHeight, 16);

    //  Calculate arrow coordinates
    var point1X = Math.floor(bubbleWidth / 7);
    var point1Y = bubbleHeight;
    var point2X = Math.floor((bubbleWidth / 7) * 2);
    var point2Y = bubbleHeight;
    var point3X = Math.floor(bubbleWidth / 7);
    var point3Y = Math.floor(bubbleHeight + arrowHeight);

    //  Bubble arrow shadow
    bubble.lineStyle(4, 0x222222, 0.5);
    bubble.lineBetween(point2X - 1, point2Y + 6, point3X + 2, point3Y);

    //  Bubble arrow fill
    bubble.fillTriangle(point1X, point1Y, point2X, point2Y, point3X, point3Y);
    bubble.lineStyle(2, 0x565656, 1);
    bubble.lineBetween(point2X, point2Y, point3X, point3Y);
    bubble.lineBetween(point1X, point1Y, point3X, point3Y);

    var content = this.add.text(0, 0, quote, {
      fontFamily: 'Arial',
      fontSize: 20,
      color: '#000000',
      align: 'center',
      wordWrap: { width: bubbleWidth - bubblePadding * 2 },
    });

    var b = content.getBounds();

    content.setPosition(bubble.x + 15, bubble.y + 15);
    speechContainer.add(bubble);
    speechContainer.add(content);
    speechContainer.setVisible(false);
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
    var headingImage = this.add.image(
      newWidth * 0.5,
      newHeight * 0.1,
      'gatorHeading'
    );
    headingImage.setOrigin(0.5);
    headingImage.setScale(newWidth / 4000);
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
    // speechContainer.add(speech);
    gator.on('pointerover', function (pointer) {
      // speech.setVisible(true);
      quote =
        '"We have tons of food and the choices are endless(not really): Chicken or Kale."';
      speechContainer.setVisible(true);
      content.setText(quote);
      console.log('Hello');
    });
    gator.on('pointerout', function (pointer) {
      speechContainer.setVisible(false);
    });
    bear.on('pointerover', function (pointer) {
      // speech.setVisible(true);
      quote =
        '"Be careful where you go you never know what is lurking in the shadows."';
      speechContainer.setVisible(true);
      content.setText(quote);
      console.log('Hello');
    });
    bear.on('pointerout', function (pointer) {
      speechContainer.setVisible(false);
    });
    owl.on('pointerover', function (pointer) {
      // speech.setVisible(true);
      quote = '"There are tons of animals and plants to see."';
      speechContainer.setVisible(true);
      content.setText(quote);
      console.log('Hello');
    });
    owl.on('pointerout', function (pointer) {
      speechContainer.setVisible(false);
    });
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
