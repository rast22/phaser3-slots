// import Spin from './Spin';
import Tween = Phaser.Tweens.Tween;
import MainScene from "../scenes/Main";
import Reel from "./Reel";
//Class Tween
export default class BluredReel {
    private _scene: MainScene;
    private tweenMap: Map<string, Tween> = new Map();
    constructor(scene: MainScene) {
        this._scene = scene;
        this.renderTweens();
    }

    renderTweens() {
        //column tweens 1
        const columnTween1 = this._scene.tweens.add({
            targets: this._scene.reelMap.get('reel1'),
            props: { y: { value: "+=" + 150,
                    duration: 100 }},
            repeat: 5,
            onRepeat: function(){
                console.log(this.targets[0]);
                const randomNumber = Phaser.Math.RND.between(1, 5);
                console.log(randomNumber);
                this.updateTo('y', this.targets[0].y + 150, true);
                this.targets[0].first.y = this.targets[0].last.y - 150;
                console.log(this.targets[0])
                const symbol = this.targets[0].first;
                console.log(symbol)
                symbol.setVisible(true).setTexture('symbols_blur', 'symbols_' + randomNumber + '.png');
                (this.targets[0] as Reel).moveTo(symbol, 2);
                console.log('columnTween1');
            },
            onComplete: function() {
                this.targets[0].scene.tweens.add({
                    targets : this.targets[0],
                    props: { y: { value: "-=" + 150,
                            duration: 200 } },
                    repeat : 1,
                    onRepeat : function() {
                        this.updateTo('y', this.targets[0].y - 150, true);
                    },
                    onComplete : function() {
                        console.log('onComplete');
                        this.targets[0].last.y = this.targets[0].first.y + 150;
                        const symbol = this.targets[0].last;
                        console.log(this.targets[0], symbol);
                        this.targets[0].moveTo(symbol, 0);
                        //set texture symbols
                        for (let i = 0; i < 3; i++) {
                            console.log(this.targets[0].list[i]);
                            const symbolsName = this.targets[0].list[i].frame.name;
                            this.targets[0].list[i].setTexture('symbols', symbolsName);
                        }
                    }
                });
            }
        });

        this.tweenMap.set('columnTween1', columnTween1);


        //column tweens 2
        const columnTween2 = this._scene.tweens.add({
            targets: this._scene.reelMap.get('reel2'),
            props: { y: { value: "+=" + 150,
                    duration: 100 } },
            repeat: 10,
            onRepeat: function(){
                console.log(this.targets[0]);
                const randomNumber = Phaser.Math.RND.between(1, 5);
                console.log(randomNumber);
                this.updateTo('y', this.targets[0].y + 150, true);
                this.targets[0].first.y = this.targets[0].last.y - 150;
                console.log(this.targets[0])
                const symbol = this.targets[0].first;
                console.log(symbol)
                symbol.setVisible(true).setTexture('symbols_blur', 'symbols_' + randomNumber + '.png');
                (this.targets[0] as Reel).moveTo(symbol, 2);
                console.log('columnTween1');
            },
            onComplete: function() {
                this.targets[0].scene.tweens.add({
                    targets : this.targets[0],
                    props: { y: { value: "-=" + 150,
                            duration: 150 * 2 } },
                    repeat : 1,
                    onRepeat : function() {
                        this.updateTo('y', this.targets[0].y - 150, true);
                    },
                    onComplete : function() {
                        this.targets[0].last.y = this.targets[0].first.y +150;
                        const symbol = this.targets[0].last;
                        this.targets[0].moveTo(symbol, 0);
                        //set texture symbols
                        for (let i = 0; i < 3; i++) {
                            const symbolsName = this.targets[0].list[i].frame.name;
                            this.targets[0].list[i].setTexture('symbols', symbolsName);
                        }
                    }
                });
            }
        });

        this.tweenMap.set('columnTween2', columnTween2);


        //column tweens 3
        const columnTween3 = this._scene.tweens.add({
            targets: this._scene.reelMap.get('reel3'),
            props: { y: { value: "+=" + 150,
                    duration: 150 } },
            repeat: 15,
            onRepeat: function(){
                console.log(this.targets[0]);
                const randomNumber = Phaser.Math.RND.between(1, 5);
                console.log(randomNumber);
                this.updateTo('y', this.targets[0].y + 150, true);
                this.targets[0].first.y = this.targets[0].last.y - 150;
                console.log(this.targets[0])
                const symbol = this.targets[0].first;
                console.log(symbol)
                symbol.setVisible(true).setTexture('symbols_blur', 'symbols_' + randomNumber + '.png');
                (this.targets[0] as Reel).moveTo(symbol, 2);
                console.log('columnTween1');
            },
            onComplete: function() {
                this.targets[0].scene.tweens.add({
                    targets : this.targets[0],
                    props: { y: { value: "-=" + 150,
                            duration: 150 * 2 } },
                    repeat : 1,
                    onRepeat : function() {
                        this.updateTo('y', this.targets[0].y - 150, true);
                    },
                    onComplete : function() {
                        this.targets[0].last.y = this.targets[0].first.y +150;
                        const symbol = this.targets[0].last;
                        this.targets[0].moveTo(symbol, 0);
                        //set texture symbols
                        for (let i = 0; i < 3; i++) {
                            const symbolsName = this.targets[0].list[i].frame.name;
                            this.targets[0].list[i].setTexture('symbols', symbolsName);
                        }
                    }
                });
            }
        });

        this.tweenMap.set('columnTween3', columnTween3);

    }

    get scene(): MainScene {
        return this._scene;
    }
}
