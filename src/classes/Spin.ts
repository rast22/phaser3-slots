import BluredReel from "./BluredReels";
import MainScene from "../scenes/Main";
import gameConfig from "../gameConfig";
import Sprite from "./Sprite";

export default class Spin {
    private _scene: MainScene;
    private blurredSymbols: BluredReel;
    // private _txtSpin: Phaser.GameObjects.DynamicBitmapText;
    private bgSpin: Phaser.GameObjects.Sprite;

    constructor(scene: MainScene) {
        this._scene = scene;
        this.startSpin();
    }

    startSpin() {
        console.log('Spin started');
        this.bgSpin = new Sprite(this._scene, gameConfig.width-136, gameConfig.height/2 , 'bgButtons', 'button.png');

        this.bgSpin.on('pointerdown', this.setBlurSymbols, this);
        this.bgSpin.on('pointerup', () => this.bgSpin.setScale(1));
    }

    setBlurSymbols() {
        //Class Tween
        // this.tweens = new Tween(this.scene);
        this.bgSpin.setScale(0.9);
        this.blurredSymbols = new BluredReel(this._scene);

        console.log('Spin clicked', this.blurredSymbols.scene);

    }
}
