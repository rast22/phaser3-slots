import { Scene } from 'phaser';


export default class PreloadScene extends Scene {
    private progressBar: Phaser.GameObjects.Graphics;
    private progressBox: Phaser.GameObjects.Graphics;
    private loadingText: Phaser.GameObjects.Text;

    constructor() {
    super({key: 'Preload'});
  }

  preload() {
    //load image
    this.load.path = '../../public/assets';
    this.load.atlas('background', 'images/main-bg/main-bg.png', 'images/main-bg/main-bg.json');
    this.progressBar = this.add.graphics();
    this.progressBox = this.add.graphics();
    this.progressBox.fillStyle(0x222222, 0.8);
    this.progressBox.fillRect(1024 / 2 - 450, 720 / 2 - 30, 900, 50);
    //load text
    this.loadingText = this.make.text({
      x: 1024 / 2,
      y: 768 / 2 + 20,
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
        this.progressBar.fillRect(1024 / 2 - 440, 720 / 2 - 20, 880 * value, 30);
      this.loadingText.setText(parseInt((value * 100).toString()) + '%');
    });
    this.load.on('complete', this.onComplete, this);
    // for(let i = 0; i < 100; i++) {
    //   this.load.atlas('background' + i, 'images/bg/bg.png', 'images/bg/bg.json');
    // }
  }

  create() {
    // this.scene.start('Boot');
  }


  onComplete() {
    this.progressBar.destroy();
    this.progressBox.destroy();
    this.loadingText.destroy();
  }

}
