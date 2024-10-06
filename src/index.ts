import { Game, Types } from "phaser";
import PreloadScene from "./scenes/Preload";
import MainScene from "./scenes/Main";
import gameConfig from "./gameConfig";

const config: Types.Core.GameConfig = {
    type: Phaser.WEBGL,
    width: gameConfig.width,
    height: gameConfig.height,
    physics : {
        default : 'arcade',
        arcade : {
            debug : false
        }
    },
    parent: 'game-container',
    backgroundColor: 'transparent',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    fps : {
        min: 30,
        target: 60
    },
    scene: [
        PreloadScene,
        MainScene
    ]
};

export default new Game(config);
