export default class Sprite extends Phaser.GameObjects.Sprite {
    constructor(scene: any, x: any, y: any, texture: any, frame: any) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.setInteractive();
    }
}
