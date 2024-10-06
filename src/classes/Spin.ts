import BluredReel from "./BluredReels";
import MainScene from "../scenes/Main";
import gameConfig from "../gameConfig";
import Sprite from "./Sprite";
import State from "../state";

export default class Spin {
    private readonly _scene: MainScene;
    private _bgSpin: Phaser.GameObjects.Sprite;

    constructor(scene: MainScene) {
        this._scene = scene;
        this.startSpin();
    }

    startSpin() {
        console.log('Spin started');
        this._bgSpin = new Sprite(this._scene, gameConfig.width-136, gameConfig.height/2 , 'bgButtons', 'button.png');

        this._bgSpin.on('pointerdown', this.setBlurSymbols, this);
        this._bgSpin.on('pointerup', () => this._bgSpin.setScale(1));
    }

    setBlurSymbols() {
        //Class Tween
        if (!State.isSpinning) {
            State.isSpinning = true;
            this._bgSpin.setScale(0.9);
            new BluredReel(this._scene);
        }
    }
}
