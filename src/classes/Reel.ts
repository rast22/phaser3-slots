export default class Reel extends Phaser.GameObjects.Container {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y);
        scene.add.existing(this as Reel);

        // symbols
        const symbols1 = scene.add.sprite(0, 0, 'symbols', 'symbols_' + this.randomBetween(1, 5) + '.png');
        const symbols2 = scene.add.sprite(0, - 150, 'symbols', 'symbols_' + this.randomBetween(1, 5) + '.png');
        const symbols3 = scene.add.sprite(0, - 150 * 2, 'symbols', 'symbols_' + this.randomBetween(1, 5) + '.png');
        this.add([symbols1, symbols2, symbols3]);
    }

    randomBetween(min: number, max: number) {
        return Phaser.Math.Between(min, max);
    }
}
