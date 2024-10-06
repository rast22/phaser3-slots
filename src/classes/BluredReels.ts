import Tween = Phaser.Tweens.Tween;
import MainScene from "../scenes/Main";
import Reel from "./Reel";
import State from "../state";

export default class BluredReel {
    private readonly _scene: MainScene;
    private _tweenMap: Map<string, Tween> = new Map();

    constructor(scene: MainScene) {
        this._scene = scene;
        this.initializeTweens();
    }

    private initializeTweens(): void {
        this.createColumnTween('reel1', 150, 100, 10, 2);
        this.createColumnTween('reel2', 150, 100, 15, 3);
        this.createColumnTween('reel3', 150, 100, 20, 4);
    }

    private createColumnTween(reelKey: string, value: number, duration: number, repeat: number, index: number ): void {
        const reel = this._scene.reelMap.get(reelKey);
        if (!reel) {
            console.warn(`Reel with key ${reelKey} not found.`);
            return;
        }

        const tween = this._scene.tweens.add({
            targets: reel,
            props: {
                y: {
                    value: "+=" + value,
                    duration: duration
                }
            },
            repeat: repeat,
            onRepeat: function () {
                const randomNumber = Phaser.Math.RND.between(1, 5);
                this.updateTo('y', this.targets[0].y + value, true);
                this.targets[0].first.y = this.targets[0].last.y - value;
                const symbol = this.targets[0].first;
                symbol.setVisible(true).setTexture('symbols_blur', 'symbols_' + randomNumber + '.png');
                (this.targets[0] as Reel).moveTo(symbol, 2);
                console.log(reelKey + ' columnTween');
            },
            onComplete: function () {
                this.targets[0].scene.tweens.add({
                    targets: this.targets[0],
                    props: {
                        y: {
                            value: "-=" + value,
                            duration: duration * index
                        }
                    },
                    repeat: 1,
                    onRepeat: function () {
                        this.updateTo('y', this.targets[0].y - value, true);
                    },
                    onComplete: function () {
                        console.log(this)
                        this.targets[0].last.y = this.targets[0].first.y + value;
                        const symbol = this.targets[0].last;
                        this.targets[0].moveTo(symbol, 0);
                        // Set texture symbols
                        for (let i = 0; i < this.targets[0].list.length; i++) {
                            const symbolsName = this.targets[0].list[i].frame.name;
                            this.targets[0].list[i].setTexture('symbols', symbolsName);
                        }

                        if (reelKey === 'reel3') {
                           State.isSpinning = false;
                        }
                    }
                });
            },
        });

        this._tweenMap.set(reelKey, tween);
    }
}

