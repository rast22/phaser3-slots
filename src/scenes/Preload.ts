import { Scene } from 'phaser';
import gameConfig from "../gameConfig";


export default class PreloadScene extends Scene {
    private progressBar: Phaser.GameObjects.Graphics;
    private progressBox: Phaser.GameObjects.Graphics;
    private loadingText: Phaser.GameObjects.Text;
    constructor() {
        super({key: 'Preload'});
    }

  preload() {
    //load image
    this.load.path = './assets';
    this.load.atlas('background', '/images/machine/machine.png', '/images/machine/machine.json');
    this.load.atlas('symbols', '/images/symbols/symbols.png', '/images/symbols/symbols.json');
    this.load.atlas('symbols_blur', '/images/symbols-blur/symbols-blur.png', '/images/symbols-blur/symbols-blur.json');
    this.load.atlas('bgButtons', '/images/buttons/buttons.png', '/images/buttons/buttons.json');

    this.progressBar = this.add.graphics();
    this.progressBox = this.add.graphics();
    this.progressBox.fillStyle(0x222222, 0.8);
    this.progressBox.fillRect(gameConfig.width / 2 - 450, gameConfig.height / 2 - 30, 900, 50);
    //load text
    this.loadingText = this.make.text({
      x: gameConfig.width / 2,
      y: gameConfig.height / 2 + 20,
      text: '0%',
      style: {
        font: '30px PT Serif',
        color: '#ffffff'
      }
    });
    this.loadingText.setOrigin(0.5, 0.5);
    this.load.on('progress', (value: any) => {
      this.progressBar.clear();
      this.progressBar.fillStyle(0xff00ff, 1);
        this.progressBar.fillRect(gameConfig.width / 2 - 440, gameConfig.height / 2 - 20, 880 * value, 30);
      this.loadingText.setText(parseInt((value * 100).toString()) + '%');
    });
    this.load.on('complete', this.onComplete, this);
  }

  create() {
    this.scene.start('Main');
  }


  onComplete() {
    this.progressBar.destroy();
    this.progressBox.destroy();
    this.loadingText.destroy();
  }

}
