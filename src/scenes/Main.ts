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
        new Sprite(this, gameConfig.width / 2, gameConfig.height / 2, 'background', 'machine-bg.png');
        this.reelMap.set('reel1', new Reel(this, gameConfig.width / 2 - 360, gameConfig.height / 2 + 150));
        this.reelMap.set('reel2', new Reel(this, gameConfig.width / 2, gameConfig.height / 2 + 150));
        this.reelMap.set('reel3', new Reel(this, gameConfig.width / 2 + 360, gameConfig.height / 2 + 150));
        new Sprite(this, gameConfig.width / 2, gameConfig.height / 2, 'background', 'machine.png');
        this.spin = new Spin(this);
    }
}
