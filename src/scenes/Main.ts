import {Scene} from "phaser";
import gameConfig from "../gameConfig";
import Sprite from "../classes/Sprite";
import Reel from "../classes/Reel";
import Spin from "../classes/Spin";

export default class MainScene extends Scene {
    reelMap: Map<string, Reel> = new Map();
    spin: Spin;
    constructor() {
        super({key:'Main'});
        console.log('MainScene');
    }

    create() {
        new Sprite(this, gameConfig.width / 2, gameConfig.height / 2, 'background', 'oceannn.png');
        this.reelMap.set('reel1', new Reel(this, gameConfig.width / 2 - 360, gameConfig.height / 2 + 150));
        this.reelMap.set('reel2', new Reel(this, gameConfig.width / 2, gameConfig.height / 2 + 150));
        this.reelMap.set('reel3', new Reel(this, gameConfig.width / 2 + 360, gameConfig.height / 2 + 150));
        this.spin = new Spin(this);
    }

    textCallback(data: any) {
        const colorwheel = Phaser.Display.Color.HSVColorWheel()
        data.tint.topLeft = colorwheel[Math.floor(0)].color;
        data.tint.topRight = colorwheel[359 - Math.floor(0)].color;
        data.tint.bottomLeft = colorwheel[359 - Math.floor(0)].color;
        data.tint.bottomRight = colorwheel[Math.floor(0)].color;
        let counter = 0;
        counter += 0.05;

        if (counter >= colorwheel.length)
        {
            counter = 0
        }

        return data;
    }
}
