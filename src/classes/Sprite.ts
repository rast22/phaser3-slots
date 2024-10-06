import {Scene} from "phaser";

export default class Sprite extends Phaser.GameObjects.Sprite {
    constructor(scene: Scene, x: number, y: number, texture: string, frame: string) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this as Sprite);
        this.setInteractive();
    }
}
