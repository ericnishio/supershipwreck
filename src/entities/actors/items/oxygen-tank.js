import Item, {TYPE_POWERUP} from './item';
import {getGame} from 'core/game';

/**
 * @param {number} x
 * @param {number} y
 * @return {OxygenTank}
 */
export default (x, y) => {
  return new OxygenTank(getGame(), x, y);
};

export class OxygenTank extends Item {
  /**
   * @param {Phaser.Game} game
   * @param {number} x
   * @param {number} y
   */
  constructor(game, x, y) {
    super(game, x, y, 'items-1x1-1', 0);

    this.name = 'Oxygen Tank';
    this.itemType = TYPE_POWERUP;

    this.effects.pickup = this.game.add.audio('powerup1', 1, false);
  }

  /**
   * @inheritdoc
   */
  handleCollision(actor) {
    super.handleCollision(actor);

    if (actor.inventory) {
      this.kill();
      this.effects.pickup.play();
      actor.increaseOxygenBy(50);
    }
  }
}